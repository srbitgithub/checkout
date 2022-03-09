const {it, expect} = require('@jest/globals');
const Checkout = require('./main')

describe('checkout', ()=>{
    const checkout = new Checkout();

    it ('Return 0 if the string is empty', ()=>{
        const result = checkout.main('');
        expect(result).toBe(0);
    });

    it ('Return 50 if the string is A', ()=>{
        const result = checkout.main('A');
        expect(result).toBe(50);
    });

    it ('Return 30 if the string is B', ()=>{
        const result = checkout.main('B');
        expect(result).toBe(30);
    });

    it ('Return 20 if the string is C', ()=>{
        const result = checkout.main('C');
        expect(result).toBe(20);
    });

    it ('Return 15 if the string is D', ()=>{
        const result = checkout.main('D');
        expect(result).toBe(15);
    });

    it ('Return 80 if the string is AB', ()=>{
        const result = checkout.main('AB');
        expect(result).toBe(80);
    });

    it ('Return 65 if the string is CDB', ()=>{
        const result = checkout.main('CDB');
        expect(result).toBe(65);
    });

    it ('Return 115 if the string is CDBA', ()=>{
        const result = checkout.main('CDBA');
        expect(result).toBe(115);
    });

});