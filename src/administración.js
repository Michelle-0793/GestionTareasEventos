const inputTareaEvento = document.getElementById("inputTareaEvento");

const fechaInput = document.getElementById("fechaInput");

const btnGuardar = document.getElementById("btnGuardar");

const select=document.getElementById("select")

const cajaTareas = document.getElementById("cajaTareas");

const cajaEventos = document.getElementById("cajaEventos");



btnGuardar.addEventListener("click", function () {
const sumaTareasEventos = inputTareaEvento.value+ " " +fechaInput.value;
const tipo = select.value;
etiquetaP = document.createElement("p");

e


if (tipo === "tarea") {
    cajaTareas.appendChild(etiquetaP);
}

if (tipo ==="evento") {
    cajaEventos.appendChild(etiquetaP);
}

})
  