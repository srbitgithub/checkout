const {it, expect} = require('@jest/globals')
const Checkout = require('./mainClasses')

describe('checkout', () =>{
    //const checkout = new Checkout()

    it ('Return 0 if the string is empty', ()=>{
        const checkout = new Checkout('')
        expect(checkout.total).toBe(0)
    });

    it ('Return 50 if the string is A', ()=>{
        const checkout = new Checkout('A')
        expect(checkout.total).toBe(50)
    });

    it ('Return 30 if the string is B', ()=>{
        const checkout = new Checkout('B')
        expect(checkout.total).toBe(30)
    });

    it ('Return 20 if the string is C', ()=>{
        const checkout = new Checkout('C')
        expect(checkout.total).toBe(20)
    });

    it ('Return 15 if the string is D', ()=>{
        const checkout = new Checkout('D')
        expect(checkout.total).toBe(15)
    });

    it ('Return 80 if the string is AB', ()=>{
        const checkout = new Checkout('AB')
        expect(checkout.total).toBe(80)
    });

    it ('Return 56.25 if the string is CDB', ()=>{
        const checkout = new Checkout('CDB')
        expect(checkout.total).toBe(56.25)
    });

    it ('Return 106.25 if the string is CDBA', ()=>{
        const checkout = new Checkout('CDBA')
        expect(checkout.total).toBe(106.25)
    });

    it ('Return 100 if the string is AA', ()=>{
        const checkout = new Checkout('AA')
        expect(checkout.total).toBe(100)
    });

    it ('Return 130 if the string is AAA', ()=>{
        const checkout = new Checkout('AAA')
        expect(checkout.total).toBe(130)
    });

    it ('Return 180 if the string is AAAA', ()=>{
        const checkout = new Checkout('AAAA')
        expect(checkout.total).toBe(180)
    });

    it ('Return 230 if the string is AAAAA', ()=>{
        const checkout = new Checkout('AAAAA')
        expect(checkout.total).toBe(230)
    });

    it ('Return 260 if the string is AAAAAA', ()=>{
        const checkout = new Checkout('AAAAAA')
        expect(checkout.total).toBe(260)
    });

    it ('Return 160 if the string is AAAB', ()=>{
        const checkout = new Checkout('AAAB')
        expect(checkout.total).toBe(160)
    });

    it ('Return 175 if the string is AAABB', ()=>{
        const checkout = new Checkout('AAABB')
        expect(checkout.total).toBe(175)
    });

    it ('Return 190 if the string is AAABBD', ()=>{
        const checkout = new Checkout('AAABBD')
        expect(checkout.total).toBe(190)
    });

    it ('Return 190 if the string is DABABA', ()=>{
        const checkout = new Checkout('DABABA')
        expect(checkout.total).toBe(190)
    });
});

describe('incremental', () => {
    const checkout = new Checkout('')
    
    it ('Return 50 if the string is A', ()=>{
        const result = checkout.mainIncremental('A')
        expect(result).toBe(50)
    });
    
    it ('Return 80 if the string is B', ()=>{
        const result = checkout.mainIncremental('B')
        expect(result).toBe(80)
    });
    
    it ('Return 130 if the string is A', ()=>{
        const result = checkout.mainIncremental('A')
        expect(result).toBe(130)
    });
    
    it ('Return 160 if the string is A', ()=>{
        const result = checkout.mainIncremental('A')
        expect(result).toBe(160)
    });
    
    it ('Return 175 if the string is B', ()=>{
        const result = checkout.mainIncremental('B')
        expect(result).toBe(175)
    });
})
