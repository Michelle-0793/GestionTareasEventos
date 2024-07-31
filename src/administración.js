const inputTareaEvento = document.getElementById ("inputTareaEvento");
const fechaPrioridadInput = document.getElementById("fechaPrioridadInput");
const btnGuardar = document.getElementById("btnGuardar");
const select = document.getElementById("select");
const cajaTareas = document.getElementById("cajaTareas");
const cajaEventos = document.getElementById("cajaEventos");



//INTENTO 1 con local
//1 Cargar los datos, implemento el window.onload para que se ejecute el código después de que
// cargue la página


window.onload = function () {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    const eventos = JSON.parse(localStorage.getItem("eventos")) || [];
   
tareas.forEach(tarea => agregarElemento(cajaTareas, tarea, "tareas"));
eventos.forEach(evento => agregarElemento(cajaEventos, evento, "eventos"));
    
};

/*
for (let index = 0; index < tareas.length; index++) {
agregarElemento(cajaTareas, tareas[index], "tareas");  
}
for (let index = 0; index < eventos.length; index++) {
    agregarElemento(cajaEventos, eventos[index], "eventos");
}*/

//Aquí voy a agregar elementos a la página

function agregarElemento(caja, item, opción) {
    
    const etiquetaP = document.createElement("p")
    const btnEliminar = document.createElement("button");
    const btnEditar = document.createElement("button");

    

    etiquetaP.innerHTML = item.texto+ " " +item.fecha;
    caja.appendChild(etiquetaP);

    btnEliminar.innerHTML = "Eliminar";
    caja.appendChild(btnEliminar);

    btnEditar.innerHTML = "Editar";
    caja.appendChild(btnEditar);

  btnEliminar.addEventListener("click", function () {
     eliminarElemento(item, opción);
     etiquetaP.remove();
     btnEliminar.remove();
     btnEditar.remove();
     alert ("Se eliminó correctamente");
});
btnEditar.addEventListener("click", function () {
    editarElemento(etiquetaP, item, opción);
});
}

//Para eliminar elementos del local storage
function eliminarElemento(item, opción) {
   let lista = JSON.parse(localStorage.getItem(opción))  || []; //llamo la lista o la obtengo
   // uso el filter para eliminar 
   lista = lista.filter(tareaEvento => !(tareaEvento.texto === item.texto && tareaEvento.fecha === item.fecha));

 localStorage.setItem(opción, JSON.stringify(lista)); //Para que la lista actualizada se guarde en el local

}

//Para editar
function editarElemento(etiquetaP, item, opción) {
    const inputEdit = document.createElement("input");
    const inputEditFecha = document.createElement("input");
    const btnSave = document.createElement("button");

    inputEdit.value = item.texto;
    inputEditFecha.value = item.fecha;

 etiquetaP.innerHTML = "";

 etiquetaP.appendChild(inputEdit);
 etiquetaP.appendChild(inputEditFecha);

 btnSave.innerHTML = "Guardar";
 etiquetaP.appendChild(btnSave);

 btnSave.addEventListener("click", function () {
    const nuevoTexto = inputEdit.value.trim();
    const nuevaFecha = inputEditFecha.value.trim();

actualizarElemento(item, opción, nuevoTexto, nuevaFecha)
    etiquetaP.textContent = nuevoTexto+ " " +nuevaFecha;
  
 });
}

//Para que se actualice en el local
function actualizarElemento(item, opción, nuevoTexto, nuevaFecha) {

    let lista = JSON.parse(localStorage.getItem(opción))  || [];

    for (let index = 0; index < lista.length; index++) {
    
    if (lista[index].texto === item.texto && lista[index].fecha === item.fecha) {
     //necesito que me actualice con lo nuevo que escribí   
        lista[index].texto = nuevoTexto; 
        lista[index].fecha = nuevaFecha;
        break; 
    }
}
localStorage.setItem(opción, JSON.stringify(lista)); //Para que la lista actualizada se guarde en el local
}

//Para Guardar
btnGuardar.addEventListener("click", function () {
    const texto1 = inputTareaEvento.value.trim();
    const texto2 = fechaPrioridadInput.value.trim();
    const opción = select.value;

//Un if papá para cuando seleccione una de las opciones

if (texto1 === "" || texto2 === "") { 
alert ("Debe ingresar una tarea o evento");

}else{
    const nuevaTareaEvento= {texto:texto1, fecha:texto2};
if (opción === "tarea") {
        agregarElemento(cajaTareas, nuevaTareaEvento, "tareas");

    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push(nuevaTareaEvento);

    localStorage.setItem("tareas", JSON.stringify(tareas));


}else{
    agregarElemento(cajaEventos, nuevaTareaEvento, "eventos");
    let eventos = JSON.parse(localStorage.getItem("eventos")) || [];
    eventos.push(nuevaTareaEvento)

    localStorage.setItem("eventos", JSON.stringify(eventos));
}
    //para que me limpie los inputs
    inputTareaEvento.value = "";
    fechaPrioridadInput.value = "";
}
})

//FUNCIONABILIDAD CON LOCAL STORAGE
/*
//Evento para el btón guardar (dentro de él van todo)
btnGuardar.addEventListener("click", function () {
        const texto1 = inputTareaEvento.value;
        const texto2 = fechaPrioridadInput.value;
        const opción = select.value;

//Un if papá para cuando seleccione una de las opciones
 if (opción==="tarea") {
    if (texto1 === "" && texto2 === "") { //otro if para que lance una alerta cuando algún espacio está en blanco
    alert ("Debe ingresar una tarea o evento")  
    
 }else{
    const etiquetaP = document.createElement("p");
    const btnEliminar = document.createElement("button");
    const btnEditar = document.createElement("button");

    etiquetaP.innerHTML = texto1+ " " +texto2;
    cajaTareas.appendChild(etiquetaP);

    btnEliminar.innerHTML = "Eliminar";
    cajaTareas.appendChild(btnEliminar);

    btnEditar.innerHTML = "Editar";
    cajaTareas.appendChild(btnEditar);

  btnEliminar.addEventListener("click", function () {
     etiquetaP.remove();
     btnEliminar.remove();
     btnEditar.remove();
     alert ("Se eliminó correctamente");
});

  btnEditar.addEventListener("click", function () {
       const inputEdit = document.createElement("input");
       const inputEditPrioridad = document.createElement("input");
       const btnSave = document.createElement("button");

    inputEdit.value = texto1;
    inputEditPrioridad.value = texto2;
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
//aplico un else del if "papá", para decir que si la opción no es tarea, por defecto lo que se 
//escogió es un evento. Apliqué la misma logica (copy and page), y los appendChild los hice a 
//la caja tareas
}else{ 

    if (texto1 === "" || texto2 ==="") {
        alert ("Debe ingresar una tarea o evento") 
    } else {
    const etiquetaP = document.createElement("p");
    const btnEliminar = document.createElement("button");
    const btnEditar = document.createElement("button");


    etiquetaP.innerHTML = texto1+ " " +texto2;
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

    inputEdit.value = texto1;
    inputEditFecha.value = texto2;
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
*/
