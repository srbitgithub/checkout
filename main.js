function Checkout() {

    this.findItem = function(myArray, itemToFind){
        const newArray = myArray.filter(item => item == itemToFind)
        return newArray
    }

    this.separeByCharGroups = function (myString){
        let total = 0

        let myArray = myString.split('')
        const itemsA = this.findItem(myArray, 'A')
        const itemsB = this.findItem(myArray, 'B')
        const itemsC = this.findItem(myArray, 'C')
        const itemsD = this.findItem(myArray, 'D')

        total = total + this.calculateTotal(itemsA, 'A')
        total = total + this.calculateTotal(itemsB, 'B')
        total = total + this.calculateTotal(itemsC, 'C')
        total = total + this.calculateTotal(itemsD, 'D')

        return total
    }

    this.calculateTotal = function (myArray, charGroup){
        let totalGroupA = 0
        let totalReminderGroupA = 0
        let totalGroupB = 0
        let totalReminderGroupB = 0
        let totalGroupC = 0
        let totalGroupD = 0

        if (charGroup == 'A')
        {
            if (myArray.length > 2) totalGroupA = this.calculateGroupA(myArray)
            totalReminderGroupA = this.calculateReminderGroupA(myArray)
        }
        if (charGroup == 'B')
        {
            if (myArray.length > 1) totalGroupB = this.calculateGroupB(myArray)
            totalReminderGroupB = this.calculateReminderGroupB(myArray)
        }
        if (charGroup == 'C')
        {
            if (myArray.length > 0) totalGroupC = this.calculateGroupC(myArray)
        }
        if (charGroup == 'D')
        {
            if (myArray.length > 0) totalGroupD = this.calculateGroupD(myArray)
        }

        return  (totalGroupA + totalReminderGroupA + totalGroupB + totalReminderGroupB +
                totalGroupC + totalGroupD)
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