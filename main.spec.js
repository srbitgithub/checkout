const {it, expect} = require('@jest/globals')
const Checkout = require('./main')

describe('checkout', ()=>{
    const checkout = new Checkout()

    it ('Return 0 if the string is empty', ()=>{
        const result = checkout.main('')
        expect(result).toBe(0)
    });

    it ('Return 50 if the string is A', ()=>{
        const result = checkout.main('A')
        expect(result).toBe(50)
    });

    it ('Return 30 if the string is B', ()=>{
        const result = checkout.main('B')
        expect(result).toBe(30)
    });

    it ('Return 20 if the string is C', ()=>{
        const result = checkout.main('C')
        expect(result).toBe(20)
    });

    it ('Return 15 if the string is D', ()=>{
        const result = checkout.main('D')
        expect(result).toBe(15)
    });

    it ('Return 80 if the string is AB', ()=>{
        const result = checkout.main('AB')
        expect(result).toBe(80)
    });

    it ('Return 65 if the string is CDB', ()=>{
        const result = checkout.main('CDB')
        expect(result).toBe(65)
    });

    it ('Return 115 if the string is CDBA', ()=>{
        const result = checkout.main('CDBA')
        expect(result).toBe(115)
    });

    it ('Return 100 if the string is AA', ()=>{
        const result = checkout.separeByCharGroups('AA')
        expect(result).toBe(100)
    });
    it ('Return 130 if the string is AAA', ()=>{
        const result = checkout.separeByCharGroups('AAA')
        expect(result).toBe(130)
    });
    it ('Return 180 if the string is AAAA', ()=>{
        const result = checkout.separeByCharGroups('AAAA')
        expect(result).toBe(180)
    });
    it ('Return 230 if the string is AAAAA', ()=>{
        const result = checkout.separeByCharGroups('AAAAA')
        expect(result).toBe(230)
    });
    it ('Return 260 if the string is AAAAAA', ()=>{
        const result = checkout.separeByCharGroups('AAAAAA')
        expect(result).toBe(260)
    });

    it ('Return 160 if the string is AAAB', ()=>{
        const result = checkout.separeByCharGroups('AAAB')
        expect(result).toBe(160)
    });

    it ('Return 175 if the string is AAABB', ()=>{
        const result = checkout.separeByCharGroups('AAABB')
        expect(result).toBe(175)
    });


});