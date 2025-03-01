/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    function suma(num1, num2, res) {
        let suma = num1 + num2;
        if (suma == res) {
            return true;
        } else {
            return false;
        }
    }

    function cuenta(arr,targ){
        let resultado = []
        for(let i = 1; i < arr.length; i++) {
            //console.log("i:"+i)
            for(let j = 0; j < i; j++) {
                //console.log("j:"+j)
                if(suma(arr[i],arr[j],targ)){
                    resultado.push(j+1)
                    resultado.push(i+1)
                    return resultado   
                }    
            }
        }
    }
    return cuenta(numbers,target)
};