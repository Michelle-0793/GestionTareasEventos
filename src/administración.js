const inputTareaEvento = document.getElementById("inputTareaEvento");

const fechaInput = document.getElementById("fechaInput");

const btnGuardar = document.getElementById("btnGuardar");

const select = document.getElementById("select")

const cajaTareas = document.getElementById("cajaTareas");

const cajaEventos = document.getElementById("cajaEventos");


btnGuardar.addEventListener("click", function () {
const titulo = inputTareaEvento.value;
const fecha = fechaInput.value;
const tipo = select.value; 

let etiquetaP = document.createElement("p");

if (tipo==="tarea") {
    cajaTareas.appendChild(etiquetaP);
}

if (tipo.value==="evento") {
cajaEventos.appendChild(etiquetaP)
}

})
  