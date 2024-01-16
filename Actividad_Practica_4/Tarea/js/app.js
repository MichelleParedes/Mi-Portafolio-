// js/app.js

document.addEventListener("DOMContentLoaded", function () {
    const tarea1 = new Tarea("Hacer la compra");
    const tarea2 = new Tarea("Estudiar para el examen");
  
    tarea1.mostrarInformacion();
    tarea2.mostrarInformacion();
  
    const modeloTareas = new ListaTareasModelo();
    const vistaTareas = new ListaTareasVista("tareas-list-container");
    const controladorTareas = new ListaTareasControlador(modeloTareas, vistaTareas);
  
    const tareaInput = document.getElementById("tarea-input");
    const agregarBtn = document.getElementById("agregar-btn");
  
    agregarBtn.addEventListener("click", function () {
      const nuevaTarea = tareaInput.value.trim();
      if (nuevaTarea !== "") {
        controladorTareas.agregarTarea(nuevaTarea);
        tareaInput.value = "";
      }
    });
  
    // Inicializar la vista
    controladorTareas.actualizarVista();
  });
  