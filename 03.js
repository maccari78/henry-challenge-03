// 3. Clase libro
// Para este ejercicio deberas definir una clase libro con sus propiedades y metodos
// Las propiedades de la case libro son: 'titulo', 'autor', 'traducciones'
// El constructor de la calse recibe esos tres datos por parametro
// Los metodos de la clase son:
// getTitulo: Permite obtener el titulo del libro
// getAutor: Permite obtener el autor del libro
// getTraducciones: Retorna un arreglo con todas los idiomas de las traducciones
// addTraduccion: A partir de los parametros recibidos agrega un objeto al arreglo de traducciones

class libro{
    constructor(titulo, autor, traducciones){
        // Inicializar las propiedades del libro con los valores recibidos como argumento
        // Tu codigo aqui:
        this.titulo = titulo;
        this.autor = autor;
        this.traducciones = traducciones;
    }

    getTitulo(){
        // Tu codigo aqui:
        return this.titulo;
    }

    getAutor(){
        // Tu codigo aqui:
        return this.autor;
    }

    getTraducciones(){
        // Retornar un arreglo con los idiomas de las traducciones
        // Tu codigo aqui:
        return this.traducciones.map((traduccion) => traduccion.idioma);
    }

    addTraduccion(idioma, editorial){
        // Agregar un objeto: { idioma: idioma, editorial: editorial }
        // al arreglo de traducciones del libro
        // Tu codigo aqui:
        this.traducciones.push({ idioma, editorial });
    }
}

// HenryChallenge - HackerRank - 27 may 2023
// https://www.youtube.com/watch?v=vYPLwOuz9DM&ab_channel=ederEngine