// js/vista.js

class ListaTareasVista {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
    }
  
    mostrarTareas(tareas) {
      this.container.innerHTML = "";
      tareas.forEach((tarea, index) => {
        const tareaElement = document.createElement("div");
        tareaElement.innerText = `${index + 1}. ${tarea.nombre} (${tarea.completada ? 'Completada' : 'Pendiente'})`;
        this.container.appendChild(tareaElement);
      });
    }
  }
  