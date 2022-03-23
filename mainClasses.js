class Checkout {
    constructor(myString){
        this._myString = myString

        this._incrementalString = ''
    }

    get myString(){
        return this._myString
    }

    set myString(newMyString){
        this._myString = newMyString;
    }

    main(){
        let myArray = this._myString.split('')
        return this.calculateTotal(myArray)
    }

    mainIncremental(newString){
        const currentIncrementalString = this._incrementalString;
        this._incrementalString = currentIncrementalString + newString
        const myArray = this._incrementalString.split('')
        return this.calculateTotal(myArray)
    }

    calculateTotal(myArray){
        let total = 0
        const itemsA = this.findItem(myArray, 'A')
        const itemsB = this.findItem(myArray, 'B')
        const itemsC = this.findItem(myArray, 'C')
        const itemsD = this.findItem(myArray, 'D')

        total = total + this.calculateItemsA(itemsA)
        total = total + this.calculateItemsB(itemsB)
        total = total + this.calculateItemsC(itemsC)
        total = total + this.calculateItemsD(itemsD)

        return total
    }

    findItem(myArray, itemToFind){
        return myArray.filter(item => item == itemToFind)
    }

    calculateItemsA(myArray){
        const totalGroupA = this.calculateGroupA(myArray)
        const totalReminderGroupA = this.calculateReminderGroupA(myArray)

        return totalGroupA + totalReminderGroupA
    }

    calculateItemsB(myArray){
        const totalGroupB = this.calculateGroupB(myArray)
        const totalReminderGroupB = this.calculateReminderGroupB(myArray)

        return totalGroupB + totalReminderGroupB
    }

    calculateItemsC(myArray){
        return this.calculateGroupC(myArray)
    }

    calculateItemsD(myArray){
        return this.calculateGroupD(myArray)
    }

    
    calculateGroupA(myArray){
        return Math.floor(myArray.length / 3) * 130
    }

    calculateReminderGroupA(myArray){
        return Math.floor(myArray.length % 3) * 50
    }

    calculateGroupB(myArray){
        return Math.floor(myArray.length / 2) * 45
    }

    calculateReminderGroupB(myArray){
        return Math.floor(myArray.length % 2) * 30
    }

    calculateGroupC(myArray){
        return myArray.length * 20
    }

    calculateGroupD(myArray){
        return myArray.length * 15
    }
}

module.exports = Checkout