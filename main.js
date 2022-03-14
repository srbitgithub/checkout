function Checkout() {

    let incrementalString = ''

    this.Main = function (myString){
        let myArray = myString.split('')

        return this.CalculateTotal(myArray)
    }

    this.MainIncremental = function(myString){
        incrementalString = incrementalString + myString
        let myArray = incrementalString.split('')

        return this.CalculateTotal(myArray)
    }

    this.CalculateTotal = function(myArray){
        let total = 0
        const itemsA = this.FindItem(myArray, 'A')
        const itemsB = this.FindItem(myArray, 'B')
        const itemsC = this.FindItem(myArray, 'C')
        const itemsD = this.FindItem(myArray, 'D')

        total = total + this.CalculateItemsA(itemsA)
        total = total + this.CalculateItemsB(itemsB)
        total = total + this.CalculateItemsC(itemsC)
        total = total + this.CalculateItemsD(itemsD)

        return total
    }

    this.FindItem = function(myArray, itemToFind){
        return myArray.filter(item => item == itemToFind)
    }

    this.CalculateItemsA = function (myArray){
        totalGroupA = this.CalculateGroupA(myArray)
        totalReminderGroupA = this.CalculateReminderGroupA(myArray)

        return totalGroupA + totalReminderGroupA
    }

    this.CalculateItemsB = function (myArray){
        totalGroupB = this.CalculateGroupB(myArray)
        totalReminderGroupB = this.CalculateReminderGroupB(myArray)

        return totalGroupB + totalReminderGroupB
    }

    this.CalculateItemsC = function (myArray){
        return this.CalculateGroupC(myArray)
    }

    this.CalculateItemsD = function (myArray){
        return this.CalculateGroupD(myArray)
    }

    
    this.CalculateGroupA = function(myArray){
        return Math.floor(myArray.length / 3) * 130
    }

    this.CalculateReminderGroupA = function(myArray){
        return Math.floor(myArray.length % 3) * 50
    }

    this.CalculateGroupB = function(myArray){
        return Math.floor(myArray.length / 2) * 45
    }

    this.CalculateReminderGroupB = function(myArray){
        return Math.floor(myArray.length % 2) * 30
    }

    this.CalculateGroupC = function(myArray){
        return myArray.length * 20
    }

    this.CalculateGroupD = function(myArray){
        return myArray.length * 15
    }
}

module.exports = Checkout