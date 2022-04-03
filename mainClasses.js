class Checkout {
    constructor(myString, isIncremental){
        this._myString = myString
        this._incrementalString = ''

        this.VALUE_A = 50
        this.VALUE_A_BY_3 = 130
        this.VALUE_B = 30
        this.VALUE_B_BY_2 = 45
        this.VALUE_C = 20
        this.VALUE_D = 15
        this.DISCOUNT_C_D = 25

        this.total =  this.main()
        return this.total
    }

    main = () => {
        let myArray = this._myString.split('')
        return this.calculateTotal(myArray)
    }

    mainIncremental = (newString) => {
        const currentIncrementalString = this._incrementalString;
        this._incrementalString = currentIncrementalString + newString
        const myArray = this._incrementalString.split('')
        return this.calculateTotal(myArray)
    }

    calculateTotal = (myArray) => {
        let total = 0
        let discount = 0
        const itemsA = this.findItem(myArray, 'A')
        const itemsB = this.findItem(myArray, 'B')
        const itemsC = this.findItem(myArray, 'C')
        const itemsD = this.findItem(myArray, 'D')

        const totalA = this.calculateItemsA(itemsA)
        const totalB = this.calculateItemsB(itemsB)
        const totalC = this.calculateItemsC(itemsC)
        const totalD = this.calculateItemsD(itemsD)

        if (totalC > 0 && totalD > 0) discount = this.calculateDiscountCD(totalC, totalD)

        return totalA + totalB + totalC + totalD - discount
    }

    calculateDiscountCD = (totalC, totalD) => {
        const discountC = totalC * this.DISCOUNT_C_D / 100
        const discountD = totalD * this.DISCOUNT_C_D / 100
        return discountC + discountD
    }

    findItem = (myArray, itemToFind) => myArray.filter(item => item == itemToFind)

    calculateItemsA = (myArray) =>{
        const totalGroupA = this.calculateGroupA(myArray)
        const totalReminderGroupA = this.calculateReminderGroupA(myArray)
        return totalGroupA + totalReminderGroupA
    }

    calculateItemsB = (myArray) => {
        const totalGroupB = this.calculateGroupB(myArray)
        const totalReminderGroupB = this.calculateReminderGroupB(myArray)
        return totalGroupB + totalReminderGroupB
    }

    calculateItemsC = (myArray) => this.calculateGroupC(myArray)

    calculateItemsD = (myArray) => this.calculateGroupD(myArray)

    calculateGroupA = (myArray) => Math.floor(myArray.length / 3) * this.VALUE_A_BY_3

    calculateReminderGroupA = (myArray) => Math.floor(myArray.length % 3) * this.VALUE_A

    calculateGroupB = (myArray) => Math.floor(myArray.length / 2) * this.VALUE_B_BY_2

    calculateReminderGroupB = (myArray) => Math.floor(myArray.length % 2) * this.VALUE_B

    calculateGroupC = (myArray) => myArray.length * this.VALUE_C

    calculateGroupD = (myArray) => myArray.length * this.VALUE_D

}

module.exports = Checkout