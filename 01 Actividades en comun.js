// 1. Actividades en comun
// Deberas escribir una funcion que recibe dos arreglos de actividades (strings) como argumentos y retornar un nuevo arreglo con las actividades 
// (strings) que tengan en comun ambos arreglos (personas)
// Ejemplo:
// const persona1 = {'leer', 'comer', 'pasear', 'dormir', 'jugar'}
// const persona2 = {'comer', 'dormir', 'futbol'}
// actividadesEnComun(persona1, persona2);
// Deberia retornar: ['comer', 'dormir']
//
// Descripcion de la funcion
// La funcion actividadesEnComun debe retornar un arreglo de strings
// La funcion actividadesEnComun recibe como parametros: parsona1 (Arreglo de strings), persona2 (Arreglo de strings)
// Aclaraciones:
// Podes usar ciclos 'for' anidados
// Si no hay actividades en comun la funcion deberia retornar un arreglo vacio
//
// Comlpeta la funcion actividadesEnComun a continuacion
// La funcion deberia retornar un arreglo de strings
// La funcion acepta dos arreglos de strings como parametros
// No modifiques nada fuera del cuerpo de esta funcion

function actividadesEnComun(persona1, persona2){
    // Tu codigo aqui
    
    const actividadesComunes = [];

    for (let actividadPersona1 of persona1) {
        for (let actividadPersona2 of persona2) {
            if (actividadPersona1 === actividadPersona2) {
                actividadesComunes.push(actividadPersona1);
                break; // Una vez que se encuentra una actividad común, se sale del bucle interno
            }
        }
    }

    return actividadesComunes;
}

// HenryChallenge - HackerRank - 27 may 2023
// https://www.youtube.com/watch?v=vYPLwOuz9DM&ab_channel=ederEngine
