function Checkout() {

    this.main = function (myString){
        let total = 0

        let myArray = myString.split('')

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

    this.findItem = function(myArray, itemToFind){
        const newArray = myArray.filter(item => item == itemToFind)
        return newArray
    }

    this.calculateItemsA = function (myArray){
        totalGroupA = this.calculateGroupA(myArray)
        totalReminderGroupA = this.calculateReminderGroupA(myArray)

        return totalGroupA + totalReminderGroupA
    }

    this.calculateItemsB = function (myArray){
        totalGroupB = this.calculateGroupB(myArray)
        totalReminderGroupB = this.calculateReminderGroupB(myArray)

        return totalGroupB + totalReminderGroupB
    }

    this.calculateItemsC = function (myArray){
        return this.calculateGroupC(myArray)
    }

    this.calculateItemsD = function (myArray){
        return this.calculateGroupD(myArray)
    }

    
    this.calculateGroupA = function(myArray){
        const result = Math.floor(myArray.length / 3)
        return result * 130
    }

    this.calculateReminderGroupA = function(myArray){
        const result = Math.floor(myArray.length % 3)
        return result * 50
    }

    this.calculateGroupB = function(myArray){
        const result = Math.floor(myArray.length / 2)
        return result * 45
    }

    this.calculateReminderGroupB = function(myArray){
        const result = Math.floor(myArray.length % 2)
        return result * 30
    }

    this.calculateGroupC = function(myArray){
        return myArray.length * 20
    }

    this.calculateGroupD = function(myArray){
        return myArray.length * 15
    }
}

module.exports = Checkout