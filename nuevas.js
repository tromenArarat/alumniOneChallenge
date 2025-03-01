
/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {

    //contador de dígitos
    let digitos = 0;
    let y = x;
    while((y/10)>0){
        y=Math.floor(y/10);
        digitos++;
    }

    //console.log(digitos)

    if(x<10 && x>-1){
        return true
    }
    
    if(digitos==0){
        return false
    }

    let z = x

    for(let j=digitos;j>digitos/2;j--){
        let nuevito = Math.floor(x/Math.pow(10,j-1))
    
        if(nuevito%10==z%10){
            z = Math.floor(z/10) 
        }else{
            return false
        }
    };
    
    return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

/*
console.log(isPalindrome(100));
console.log(isPalindrome(101));
console.log(isPalindrome(1));
console.log(isPalindrome(1010));
console.log(isPalindrome(111));


    
        //console.log("Cantidad de dígitos: "+i)
        //console.log("Primer dígito: "+Math.floor(x/Math.pow(10,i-1)))
        //console.log("Último dígito: "+x%10)
    
        
                //console.log("Vueltas de j: "+j)
                //console.log("z = "+z)
                
                //console.log("nuevito: "+nuevito)
                //console.log("Primer dígito: "+(nuevito%10))
                //console.log("Último dígito: "+z%10)
    
*/

/*

function recursiva(x){
        if(x < 10){
            return x;
        } else {
            return recursiva(Math.floor(x / 10));
        }
    }
function recursiva2(x){
    if(x < 10){
        let x = x;
    } else {
        let x = recursiva(Math.floor(x / 10));
    }
}

var isPalindrome = function(x) {
    var n = x.toString().split("");
    let j = 0;
    let i = n.length-1;

    function recursiva(n, i, j){
        if(i === j || i < j){
            return true;
        }else if(n[i] == n[j]){
            return recursiva(n, i-1, j+1);
        }else{
            return false;
        }
    }
    return recursiva(n, i, j);

};



console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
console.log(isPalindrome(1));
console.log(isPalindrome(0));
console.log(isPalindrome(11));
console.log(isPalindrome(111));
console.log(isPalindrome(1111));    
console.log(isPalindrome(11111));
console.log(isPalindrome(111111));
console.log(isPalindrome(1111121));
console.log(isPalindrome(1111112));

*/

// runtime: 4 ms / memory: 64.60 MB

// No se puede convertir x a string, se debe hacer con operaciones matemáticas.


/*
var twoSum = function(nums, target) {
    let mapa = new Map();
    for (let i = 0; i < nums.length; i++) {
        let buscado = target - nums[i];
        if (mapa.has(buscado)) {
            return [mapa.get(buscado), i];
        }
        mapa.set(nums[i], i);
    }
    return [];
}
console.log(twoSum([1, 2, 3,7,9,15,24,25], 32));

*/

/*
function somera(array, target) {
    let mapa = new Map();
    for (let i = 0; i < array.length; i++) {
        let buscado = target - array[i];
        if (mapa.has(buscado)) {
            return [mapa.get(buscado), i];
        }
        mapa.set(array[i], i);
    }
    return [];
}

console.log(somera([1,1,1,1,1,4,1,1,1,1,1,7,1,1,1,1,1], 11));

*/