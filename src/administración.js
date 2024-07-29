const inputTareaEvento = document.getElementById("inputTareaEvento");
const fechaPrioridadInput = document.getElementById("fechaPrioridadInput");
const btnGuardar = document.getElementById("btnGuardar");
const select = document.getElementById("select")
const cajaTareas = document.getElementById("cajaTareas");
const cajaEventos = document.getElementById("cajaEventos");


btnGuardar.addEventListener("click", function () {
        const texto = inputTareaEvento.value;
        const fecha = fechaPrioridadInput.value;
        const tipo = select.value;
        const prioridad = fechaPrioridadInput.value

 if (tipo==="tarea") {
    if (texto === "" && prioridad === "") {
    alert ("Debe ingresar una tarea o evento")  
    
 }else{
    const etiquetaP = document.createElement("p");
    const btnEliminar = document.createElement("button");
    const btnEditar = document.createElement("button");

    etiquetaP.innerHTML = texto+ " " +prioridad;
    cajaTareas.appendChild(etiquetaP);

    btnEliminar.innerHTML = "Eliminar";
    cajaTareas.appendChild(btnEliminar);

    btnEditar.innerHTML = "Editar";
    cajaTareas.appendChild(btnEditar);

  btnEliminar.addEventListener("click", function () {
     etiquetaP.remove();
     btnEliminar.remove()
     btnEditar.remove();
     alert ("Se eliminó correctamente");
});

  btnEditar.addEventListener("click", function () {
       const inputEdit = document.createElement("input");
       const inputEditPrioridad = document.createElement("input");
       const btnSave = document.createElement("button");

    inputEdit.value = texto;
    inputEditPrioridad.value = prioridad;
    etiquetaP.innerHTML ="";
    etiquetaP.appendChild(inputEdit);
    etiquetaP.appendChild(inputEditPrioridad);

    btnSave.innerHTML = "Guardar";
    etiquetaP.appendChild(btnSave);

    btnSave.addEventListener("click", function () {
        etiquetaP.innerHTML = inputEdit.value+ " " +inputEditPrioridad.value
    });
});

}

}else{ 

    if (texto === "" || fecha ==="") {
        alert ("Debe ingresar una tarea o evento") 
    } else {
    const etiquetaP = document.createElement("p");
    const btnEliminar = document.createElement("button");
    const btnEditar = document.createElement("button");


    etiquetaP.innerHTML = texto+ " " +fecha;
    cajaEventos.appendChild(etiquetaP);

    btnEliminar.innerHTML = "Eliminar";
    cajaEventos.appendChild(btnEliminar);

    btnEditar.innerHTML = "Editar";
    cajaEventos.appendChild(btnEditar);

btnEliminar.addEventListener("click", function () {
        etiquetaP.remove();
        btnEliminar.remove();
        btnEditar.remove();
        alert ("Se eliminó correctamente");
    });

btnEditar.addEventListener("click", function () {
    const inputEdit = document.createElement("input");
    const inputEditFecha = document.createElement("input");
    const btnSave = document.createElement("button");

    inputEdit.value = texto;
    inputEditFecha.value = fecha;
    etiquetaP.innerHTML ="";
    etiquetaP.appendChild(inputEdit);
    etiquetaP.appendChild(inputEditFecha);

btnSave.innerHTML = "Guardar";
    etiquetaP.appendChild(btnSave);

btnSave.addEventListener("click", function () {
    etiquetaP.innerHTML = inputEdit.value+ " " + inputEditFecha.value;
   });
});

}
}
});
  