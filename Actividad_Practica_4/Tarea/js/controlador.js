// js/controlador.js

class ListaTareasControlador {
    constructor(modelo, vista) {
      this.modelo = modelo;
      this.vista = vista;
    }
  
    agregarTarea(nombre) {
      const nuevaTarea = new Tarea(nombre);
      this.modelo.agregarTarea(nuevaTarea);
      this.actualizarVista();
    }
  
    actualizarVista() {
      const tareas = this.modelo.obtenerTareas();
      this.vista.mostrarTareas(tareas);
    }
  }
  