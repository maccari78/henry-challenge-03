// 8. Busca y destruye
// Escribe una funcion que al recibir un arreglo de numeros y un mnumero como dos parametros distintos, elimine del arreglo todos los elementos que
// sean iguales a ese numero
//
// Ejemplo:
// buscaDestruye([1, 2, 3, 4], 2)
// Deberia retornar:
// [1, 3, 4]
//
// Descripcion de la funcion:
// La funcion buscaDestruye debe retornar un arreglo de enteros
// La funcion buscaDestruye recibe como parametros:
// numeros (arreglo de enteros)
// n (entero)
//
// Aclaraciones:
// Todo lo que imprimas con 'console.log();' se vera en el recuadro 'Debug Output' cuando corras tu codigo al hacer click en 'Run code'
//
// Completa la funcion buscaDestruye a continuacion
// La funcion debe retornar un arreglo de enteros
// La funcion recibe un arreglo de enteros y un entero como parametros

function buscaDestruye(numeros, n){
    // Tu codigo aqui:
    const nuevoArreglo = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] !== n) {
            nuevoArreglo.push(numeros[i]);
        }
    }

    return nuevoArreglo;
}

// HenryChallenge - HackerRank - 27 may 2023
// https://www.youtube.com/watch?v=vYPLwOuz9DM&ab_channel=ederEngine