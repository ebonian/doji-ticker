import CryptoJS from "crypto-js";
import { toUint8Array, toWordArray } from "../utils";
import { base64decode, base64encode, wa } from "../codec";

describe("Encoding and decoding crypto-related binary", () => {
    const targetB64 = "VGhpcyBpcyB3b3JraW5nIHByb3Blcmx5";
    const payloadB64 = "This is working properly";

    test("encode/decode WordArray", () => {
        const decoded = CryptoJS.enc.Utf8.parse(payloadB64); 
        const encoded = wa.base64encode(decoded); 

        // forward
        expect(encoded).toEqual(targetB64); 

        // backward
        expect(wa.base64decode(encoded).words).toEqual(decoded.words); 
    });

    test("encode/decode Uint8Array via Egor's implementation", () => {
        const decoded = new TextEncoder().encode(payloadB64); 
        const encoded = base64encode(decoded); 

        // forward
        expect(encoded).toEqual(targetB64); 

        // backward
        expect(base64decode(encoded)).toEqual(decoded); 
    });

    test('encode/decode Uint8Array via toWordArray() and CryptoJS', () => {
        const decoded = new TextEncoder().encode(payloadB64);
        const array = toWordArray(decoded); 
        const encoded = wa.base64encode(array); 

        // forward
        expect(encoded).toEqual(targetB64);

        // backward
        expect(toUint8Array(wa.base64decode(encoded))).toEqual(decoded); 
    });

    test('encode/decode empty string', () => {
        const encoder = new TextEncoder();

        const a = wa.base64encode(toWordArray(encoder.encode(""))); 
        const b = base64encode(encoder.encode(""));
        const c = encoder.encode("");

        // forward
        expect(a).toEqual(b); 

        // backward
        expect(toUint8Array(wa.base64decode(a))).toEqual(c); 
    });

    test("encode/decode string that isn't 32-bits aligned", () => {
        const encoder = new TextEncoder();

        const a0 = wa.base64encode(toWordArray(encoder.encode("?"))); 
        const b0 = base64encode(encoder.encode("?"));
        const c0 = encoder.encode("?");
        
        
        const a1 = wa.base64encode(toWordArray(encoder.encode("?!"))); 
        const b1 = base64encode(encoder.encode("?!"));
        const c1 = encoder.encode("?!");
        
        
        const a2 = wa.base64encode(toWordArray(encoder.encode("?!@"))); 
        const b2 = base64encode(encoder.encode("?!@"));
        const c2 = encoder.encode("?!@");
        
        // forward
        expect(a0).toEqual(b0); 
        expect(a1).toEqual(b1); 
        expect(a2).toEqual(b2); 

        // backward
        expect(toUint8Array(wa.base64decode(a0))).toEqual(c0);
        expect(toUint8Array(wa.base64decode(a1))).toEqual(c1);
        expect(toUint8Array(wa.base64decode(a2))).toEqual(c2);
    });

    test('encode using two different implementation has the same result', () => {
        const encoder = new TextEncoder();
        const payload = "This will match properly"; 

        const a = wa.base64encode(toWordArray(encoder.encode(payload))); 
        const b = base64encode(encoder.encode(payload)); 

        const c = wa.base64encode(toWordArray(encoder.encode(""))); 
        const d = base64encode(encoder.encode(""));

        expect(a).toEqual(b); 
        expect(c).toEqual(d); 
    });
}); 