import CryptoJS from "crypto-js";
import { sharedKey } from "curve25519-js";
import {
  createAesContext,
  decryptAes256,
  encryptAes256,
  sha256,
} from "../crypto";
import { toUint8Array, toWordArray, xor } from "../utils";

type WordArray = CryptoJS.lib.WordArray;

interface PreGeneratedKeys {
  clientPublic: string;
  clientPrivate: string;
  devicePublic: string;
  devicePop: string;
  deviceRandom: string;
  sharedKey: string;
  xoredKey: string;
  clientVerify: string;
  deviceVerify?: string;
}

describe("Integration test amongs the provisioning crypto components", () => {
  const generatedKeys: PreGeneratedKeys[] = [
    {
      devicePop: "DOJKMT",
      deviceRandom: "fc3b89955e6e04cadc7e4442ecbc15fc",
      clientPublic:
        "02b61968820bf18c4558753d71d03a3507b3b5e7816bc33c16eec858e6d46105",
      clientPrivate:
        "382a76d8d5b9f0d01aae8c7d597baccac4923c882483cd5d1bd0855051a3b06e",
      devicePublic:
        "5775e09edf6310fb1b0dd3257344feeb633d8fc519c5ec291c9524bfb19a5249",
      sharedKey:
        "07c9c6db447b8af4553a832d0f0493c250f62fdc49635caac31b96ecb7705e55",
      xoredKey:
        "c8961c346a743a0a65bf152a07b8e6f45ea599583453bbd4fd4739bc96349c92",
      clientVerify:
        "172cd9029a83c108d502ea78ebe3b68779f5edfd669ab705433ae0b059c05eb6",
      deviceVerify:
        "83d862f6d37e93e998780b43734e05a77065536b88477399ae5e52ef6ec1f7e5",
    },
    {
      devicePop: "DOJKMT",
      deviceRandom: "9aef108b71555fb90cf6599429b3ebbd",
      clientPublic:
        "a4cfc018cba3b49e8de3cfceaa143a2b1e3e9f7c13476f54773eec41e1299548",
      clientPrivate:
        "d0a328ead0a97494e72406a4c043f63d02cc460df8f94d37716cf0e6b770b077",
      devicePublic:
        "f7a86277bb1463d0836a6cc6382cfe4fbc82aa8debb75b17a0f3b5de3f693a63",
      sharedKey:
        "3cf729ec521c8372ed6c9ee0917bf8282d6d243cca9278627a010fb449c33317",
      xoredKey:
        "f3a8f3037c13338cdde908e799c78d1e233e92b8b7a29f1c445da0e46887f1d0",
      clientVerify:
        "ca90fe88dbbd2e1118869302facbd28a3a845e18f668c420b24e4aa626d858b8",
      deviceVerify:
        "d704db1c0a1442d6b4f8df21265fbaff3a8802fddf70094f138e2a32a25f7dc1",
    },
    {
      devicePop: "abcd1234",
      deviceRandom: "7cda0c6afba948a52312536b1463afef",
      clientPublic:
        "877ed007c1aef17b341975d340b1bf352113da9e96b60aa92f7b3e00ab93fb62",
      clientPrivate:
        "d03da9ff5d27434d00b735c2e547285d0bdc9f71594e5b682f0ecf12e2c23463",
      devicePublic:
        "3e23705505fb76f8f4a52c26c883d29ef257087f9a9aa79b448aec45e661a02f",
      sharedKey:
        "f799a6ee6bc004179bf481e57a48dff3f5b8f3ade6dfb4d3588c6350d48c727b",
      xoredKey:
        "1e5741f4d2f2f9fff8c70cedc405362c162653e45b70079196e9fd9591871bd5",
      clientVerify:
        "71066b77e2179b1a5db8a2f7136fac62f3fe7b0dc1e50da0208024ec3216eb68",
    },
  ];

  const parse = (x: string) => CryptoJS.enc.Hex.parse(x);
  const stringify = (x: WordArray) => CryptoJS.enc.Hex.stringify(x);

  test("generate shared key given own private key, peer's public key, and peer's pop", () => {
    for (const k of generatedKeys) {
      const clientPrivate = parse(k.clientPrivate);
      const devicePublic = parse(k.devicePublic);
      const hash = sha256(k.devicePop);

      const rawSharedKey = sharedKey(
        toUint8Array(clientPrivate),
        toUint8Array(devicePublic)
      );

      const beforeSharedKey = toWordArray(rawSharedKey);
      expect(stringify(beforeSharedKey)).toEqual(k.sharedKey);

      const afterSharedKey = xor(beforeSharedKey, hash);
      expect(stringify(afterSharedKey)).toEqual(k.xoredKey);
    }
  });

  test("generate client verify key given the shared xored key, peer's public key, and peer's random", () => {
    for (const k of generatedKeys) {
      const devicePublic = parse(k.devicePublic);
      const deviceRandom = parse(k.deviceRandom);
      const xoredKey = parse(k.xoredKey);

      const ctx = createAesContext(xoredKey, deviceRandom);
      const clientVerify = encryptAes256(devicePublic, ctx);
      expect(stringify(clientVerify).slice(0, 64)).toEqual(k.clientVerify);
    }
  });

  test("verify peer's verification token using progressive AES en/decryption", () => {
    for (const k of generatedKeys) {
      if (!k.deviceVerify) {
        break;
      }

      const devicePublic = parse(k.devicePublic);
      const deviceVerify = parse(k.deviceVerify);

      const nonce = parse(k.deviceRandom);
      const key = parse(k.xoredKey);
      const ctx = createAesContext(key, nonce);

      const clientVerify = encryptAes256(devicePublic, ctx);
      expect(clientVerify.toString()).toEqual(k.clientVerify);

      const clientPublic = decryptAes256(deviceVerify, ctx);
      expect(clientPublic.toString()).toEqual(k.clientPublic);
    }
  });
});
