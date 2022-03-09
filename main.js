function Checkout() {
    this.main = function(myString){
        if(myString.length == 0) return 0;
        if(myString.length == 1) return this.lookChar(myString);
        if(myString.length == 2) return this.byChars(myString);
        if(myString.length == 3) return this.byChars(myString);
        if(myString.length == 4) return this.byChars(myString);
    }    
    
    this.lookChar = function(char){
        if (char == 'A') return 50;
        if (char == 'B') return 30;
        if (char == 'C') return 20;
        if (char == 'D') return 15;
    }

    this.byChars = function(myString){
        let myArray = myString.split('');
        const arrayValues = myArray.map(this.lookChar);
        
        let total = 0;
        arrayValues.forEach (function(n){
            total += n;
        });
        
        return total;
    }
}

module.exports = Checkout;