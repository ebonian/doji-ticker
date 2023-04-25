import { xor } from '../utils'; 
import CryptoJS from 'crypto-js';

describe("Proto-communication convenience function", () => {
    test("xor'ing two Uint8Array correctly", () => {
        const a = new Uint8Array([0b01110101, 0b11010001]); 
        const b = new Uint8Array([0b01001001, 0b11111001]); 
        const exp = new Uint8Array([0b00111100, 0b00101000]); 

        const result = xor(a, b); 
        expect(result).toEqual(exp); 
    }); 

    test("xor'ing two CryptoJS.lib.WordArray correctly", () => {
        const a = CryptoJS.lib.WordArray.create([0x00010203, 0x045d0607]); 
        const b = CryptoJS.lib.WordArray.create([0x398f903d, 0x39d88f0a]); 
        const exp = CryptoJS.lib.WordArray.create([0x398e923e, 0x3d85890d]); 

        const result = xor(a, b); 
        expect(result.words).toEqual(exp.words); 
    }); 
})