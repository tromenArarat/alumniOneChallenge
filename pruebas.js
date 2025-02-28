/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
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
                    resultado.push(j)
                    resultado.push(i)
                    return resultado   
                }    
            }
        }
    }
    return cuenta(nums,target)
};

console.log(twoSum([1,2,3],3))


//let res = suma(arr, target);

//console.log(res);

/*
function combinaciones(elementos) {

    //  Inicializa dos vectores: "resultado" y "temporal". 
    //  resultado almacena todas las combinaciones de elementos posibles sin repeticiones
    //  y sin importar el orden, empezando en vacío,
    //  temporal almacenará cada subconjunto construido.
    let resultado = [];
    let temporal = [];

    //  La función recursiva es definida dentro del conjunto. 
    //  Esta función toma dos argumentos: elementos (el vector ingresado) 
    //  e i (un índice que realiza un seguimiento sobre el elemento actual).
    function recursiva(elementos, i) {

        // Caso base: cuando i toma el valor de la longitud del vector
        // significa que ya recorrimos todos los elementos.
        // En este punto, insertamos una copia del vector temporal en resultado.
        // Así aseguramos no enviar una referencia a temporal, y 
        // preservamos las combinaciones encontradas.
        if (i === elementos.length) {
            return resultado.push([...temporal]);
        }

        // temp.push(elementos[i]) es llamado para agregar el elemento actual 
        // en el índice i al vector temporal, incluyéndolo como la combinación actual. 
        temporal.push(elementos[i]);

        // recursiva(nums, i + 1); es llamado para generar recursivamente 
        // subconjuntos incluyendo el elemento actual en el índice i.        
        recursiva(elementos, i + 1);

        // temp.pop();remueve el último elemento agregado al vector temp, 
        // excluyéndolo de la combinación actual.        
        temporal.pop();

        recursiva(elementos, i + 1);
    }
    recursiva(elementos, 0);
    return resultado;
}
let combinetas = combinaciones(["1","2","3"]);
console.log(combinetas);
*/


//console.log(arr[1]);