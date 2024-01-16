// js/modelo.js

class Tarea {
    constructor(nombre) {
      this.nombre = nombre;
      this.completada = false;
    }
  
    marcarComoCompletada() {
      this.completada = true;
    }
  
    mostrarInformacion() {
      console.log(`Tarea: ${this.nombre}, Completada: ${this.completada}`);
    }
  }
  
  class ListaTareasModelo {
    constructor() {
      this.tareas = [];
    }
  
    agregarTarea(tarea) {
      this.tareas.push(tarea);
    }
  
    obtenerTareas() {
      return this.tareas;
    }
  }
  