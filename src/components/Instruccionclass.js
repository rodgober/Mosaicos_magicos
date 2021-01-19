class Instruccionclass {
    constructor(id, tipo, n, nombre){
      this.id = id;     //Identificador único de la instrucción
      this.tipo = tipo; //Tipo de instrucción
      this.n = n;       // Parámetro de la instrucción
      this.nombre = nombre;
    }
    mostrarNombre(){
      return this.tipo
    }
  }

  export default Instruccionclass;