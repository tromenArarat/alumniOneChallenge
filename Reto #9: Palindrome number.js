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