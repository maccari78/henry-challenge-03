// 4. Bienvenido Sr
// En esta ocacion trabajaras con objetos
// Deberas escribir una funcion que a partir de un objeto que representa a una Persona, retorne un mensaje de Bienvenida a la misma
// Si el objeto tiene propiedades: 'nombre, apellido e invitado' en 'true' debe retornar: 'nombre, apellido, un gusto tenerlo nuevamente! Bienvenido'
// Si el objeto tiene las propiedades 'invitado' en true y 'apellido' debe retornar: 'Bienvenido Sr. apellido'
// Si el objeto tiene las propiedades 'invitado' en true y 'nombre' debe retornar: 'Hola nombre, tu mesa esta lista'
// en caso que la propiedad invitado sea falsa o no la tenga debe retornar: 'Disculpe señor, no esta invitado a la fiesta'
//
// Ejemplo:
// let persona = {
//     nombre: 'Lionel',
//     apellido: 'Messi',
//     invitado: true
// };
// bienvenidoSr(persona);
// Deberia retornar:
// 'Lionel Messi, un gusto tenerlo nuevamente! Bienvenido'
//
// Completa la funcion bienvenidoSr a continuacion
// La funcion debe retornar un string
// La funcion recibe como parametro un objeto 'persona'

function bienvenidoSr(persona) {
    // Tu codigo aqui:
    if (persona.invitado === true) {
        if (persona.nombre) {
            if (persona.apellido) {
                return `${persona.nombre}, ${persona.apellido}, un gusto tenerlo nuevamente! Bienvenido`;
            } else {
                return `Bienvenido Sr. ${persona.nombre}`;
            }
            } else {
                return `Hola Sr. ${persona.apellido}, tu mesa esta lista`;
        }
    } else {
        return `Disculpe señor, no esta invitado a la fiesta`;
    }
}

// HenryChallenge - HackerRank - 27 may 2023
// https://www.youtube.com/watch?v=vYPLwOuz9DM&ab_channel=ederEngine
