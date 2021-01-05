class Instruccionclass {
    constructor(id, tipo, n){
      this.id = id;     //Identificador único de la instrucción
      this.tipo = tipo; //Tipo de instrucción
      this.n = n;       // Parámetro de la instrucción
    }
    mostrarNombre(){
      return this.tipo
    }
  }

  export default Instruccionclass;