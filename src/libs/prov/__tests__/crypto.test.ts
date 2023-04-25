import CryptoJS from "crypto-js";
import { createAesContext, encryptAes256, sha256 } from "../crypto";

type WordArray = CryptoJS.lib.WordArray; 

describe("SHA256 hashing and AES-CTR encryption", () => {

  const _nonce = "fc3b89955e6e04cadc7e4442ecbc15fc";
  const _key = "c8961c346a743a0a65bf152a07b8e6f45ea599583453bbd4fd4739bc96349c92";

  const parse = (x: string) => CryptoJS.enc.Hex.parse(x);
  const stringify = (x: WordArray) => CryptoJS.enc.Hex.stringify(x);

  test("hash random string using SHA256", () => {
    const data = CryptoJS.enc.Hex.parse("abcd1234");
    const hash = CryptoJS.enc.Hex.stringify(sha256(data));

    const exp =
      "777907d54b6a4502bd654cb4ae81c5f727013b5e3b93cd8b53d721344269d3b0";

    expect(hash).toEqual(exp);
  });

  test("AES256 doesn't require padding to minimum block size", () => {
    const key = parse(_key); 
    const nonce = parse(_nonce); 

    const context = createAesContext(key, nonce); 
    
    const a0 = CryptoJS.lib.WordArray.random(16); 
    const b0 = context.update(a0) as WordArray; 
    expect(b0.sigBytes).toEqual(16); 

    const a1 = CryptoJS.lib.WordArray.random(12); 
    const b1 = context.update(a1) as WordArray; 
    expect(b1.sigBytes).toEqual(12); 

    const a2 = CryptoJS.lib.WordArray.random(16); 
    const b2 = context.update(a2) as WordArray; 
    expect(b2.sigBytes).toEqual(16); 
  });
});
