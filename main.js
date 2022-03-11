function Checkout() {
    this.main = function(myString){
        if(myString.length == 0) return 0;
        if(myString.length == 1) return this.lookChar(myString)
        if(myString.length == 2) return this.byChars(myString)
        if(myString.length == 3) return this.byChars(myString)
        if(myString.length == 4) return this.byChars(myString)
    }    
    
    this.lookChar = function(char){
        if (char == 'A') return 50
        if (char == 'B') return 30
        if (char == 'C') return 20
        if (char == 'D') return 15
    }

    this.byChars = function(myString){
        let myArray = myString.split('')
        const arrayValues = myArray.map(this.lookChar)
        
        let total = 0
        arrayValues.forEach (function(n){
            total += n
        });
        
        return total
    }

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
        console.log('itemsB: ' + itemsB)

        if (itemsA.length > 0) total = total + this.calculateTotal(itemsA, 'A')
        if (itemsB.length > 0) total = total + this.calculateTotal(itemsB, 'B')
        console.log('desde separeByCharGroups: ' + total)
        /*total = total + this.calculateTotal(itemsC, 'C')
        total = total + this.calculateTotal(itemsD, 'D')*/
        return total
    }

    this.calculateTotal = function (myArray, charGroup){
        let totalGroupA = 0
        let totalReminderGroupA = 0
        let totalGroupB = 0
        let totalReminderGroupB = 0
        //let totalGroupC = 0
        //let totalGroupD = 0

        if (charGroup == 'A')
        {
            if (myArray.length > 2) totalGroupA = this.calculateGroupA(myArray)
            totalReminderGroupA = this.calculateReminderGroupA(myArray)
        }
        if (charGroup == 'B')
        {
            console.log('longitud B: ' + myArray.length)
            if (myArray.length > 1) totalGroupB = this.calculateGroupB(myArray)
            //if (myArray.length = 1) totalGroupB = 30
            totalReminderGroupB = this.calculateReminderGroupB(myArray)
            console.log('totalReminderGroupB: ' + totalReminderGroupB)
        }
        /*if (charGroup == 'C')
        {
            if (myArray.length > 0) totalGroupC = this.calculateGroupC(myArray)
        }
        if (charGroup == 'D')
        {
            if (myArray.length > 0) totalGroupD = this.calculateGroupD(myArray)
        }*/

        return  (totalGroupA + totalReminderGroupA + totalGroupB + totalReminderGroupB)
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