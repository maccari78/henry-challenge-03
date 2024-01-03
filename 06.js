// 6. Generador de binarios
// Existe un procedimiento matematico para expresar numeros en base binaria, pero para este ejercicio no vamos a preocuparnos por la matematica, 
// lo que debes lograr es una funcion que genere 'numeros binarios' (strings compuestos por ceros y unos) d euna longitud determinada que recibira 
// por parametro
//
// Ejemplo:
// fakeBinary(5);
// Deberia retornar:
// '10101'
// Es decir un numero binario de 5 digitos de longitud
//
// Descripcion de la funcion:
// La funcion fakeBinary debe retornar un string de la longitud especificada en el parametro
// La funcion fakeBinary recibe como parametro(s): 'size', un entero que indica la longitud (Cantidad de digitos) del numero binario que se busca 
// generar
//
// Aclaraciones:
// El numero binario retornado siempre empieza por 1
// El numero binario retornado se compone altrenando ceros y unos (Una vez cada uno)
//
// Completa la funcion 'fakeBinary' a continuacion
// La funcion debe retornar un string
// La funcion acepta un integer como parametro

function fakeBinary(size){
    // Tu codigo aqui:
    const binary = Array(size);
    binary[0] = 1;

    for (let i = 1; i < size; i += 2) {
        binary[i] = 0;
        binary[i + 1] = 1;
    }

    return binary.join("");
}

// HenryChallenge - HackerRank - 27 may 2023
// https://www.youtube.com/watch?v=vYPLwOuz9DM&ab_channel=ederEngine