// adding a method for extracting every nth element from an array 
// to the Array prototype
Array.prototype.nth_element = 
    function(n, i){
        // doing-duty-to-do : taking the nth element
        let res = this.filter(
            function(element, index, array){
                // test index for fit 
                let res =  (index + i) % n  === 0;
                // return test result 
                return res
            }
        )
        // return
        return res 
    }

// adding a method for extracting every nth element from an array 
// to the Array prototype
Uint8ClampedArray.prototype.nth_element = 
    function(n, i){
        // doing-duty-to-do : taking the nth element
        let res = this.filter(
            function(element, index, array){
                // test index for fit 
                let res =  (index + i) % n  === 0;
                // return test result 
                return res
            }
        )
        // return
        return res 
    }

    