const inputTareaEvento = document.getElementById ("inputTareaEvento");

const fechaPrioridadInput = document.getElementById("fechaPrioridadInput");

const btnAñadir = document.getElementById("btnAñadir");

const select = document.getElementById("select");

const cajaTareas = document.getElementById("cajaTareas");

const cajaEventos = document.getElementById("cajaEventos");


//Cargar los datos, implemento el window.onload para que se ejecute el código después 
// de que cargue la página


window.onload = function () {

// Obtengo tareas y eventos de localStorage o inicializar como un array vacío
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

// Agrego cada tarea y evento almacenado al DOM
tareas.forEach(tarea => agregarElemento(cajaTareas, tarea, "tareas"));

eventos.forEach(evento => agregarElemento(cajaEventos, evento, "eventos"));
    


//AGREGAR ELEMENTOS A LA PÁGINA

function agregarElemento(caja, item, opción) {
    
    const etiquetaP = document.createElement("p"); // Crear un elemento <p> para mostrar la tarea/evento
    etiquetaP.classList.add("tarea-evento"); //Añadí clases para dar estilo en CSS

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btnEliminar");

    const btnEditar = document.createElement("button");
    btnEditar.classList.add("btnEditar");
    
    // Establezco el contenido del <p> con el texto y la fecha del item
    etiquetaP.innerHTML = item.texto+ " " +item.fecha;
    caja.appendChild(etiquetaP);//Añado al contenedor

    // Establecer el texto del botón de eliminar
    btnEliminar.innerHTML = "Eliminar"; 
    caja.appendChild(btnEliminar);//Añado al contenedor

    // Establecer el texto del botón de editar
    btnEditar.innerHTML = "Editar";
    caja.appendChild(btnEditar);//Añado al contenedor

  btnEliminar.addEventListener("click", function () {
     eliminarElemento(item, opción); // Eliminar del localStorage
    
     //Estos tres los elimino del DOM
     etiquetaP.remove(); 
     btnEliminar.remove();
     btnEditar.remove();

     alert ("Se eliminó correctamente");
});


btnEditar.addEventListener("click", function () {
    editarElemento(etiquetaP, item, opción); //Llamo a la función de edición
});
}

//ELIMINAR ELEMENTOS EN EL LOCAL STORAGE
function eliminarElemento(item, opción) {
   //obtengo del localStorage o iniciar como una lista vacía
   let lista = JSON.parse(localStorage.getItem(opción))  || [];

   // Uso el filter para eliminar el elmento que quiero
   lista = lista.filter(tareaEvento => !(tareaEvento.texto === item.texto && tareaEvento.fecha === item.fecha));

localStorage.setItem(opción, JSON.stringify(lista)); /// Guardar la lista actualizada en el localStorage
}


//EDITAR
function editarElemento(etiquetaP, item, opción) {
    //Crear campos de entrada para el nuevo  y fecha-prioridad
    const inputEdit = document.createElement("input");
    inputEdit.classList.add("inputEdit"); //Añadí clases para dar estilo en CSS

    const inputEditFecha = document.createElement("input");
    inputEditFecha.classList.add("inputEditFecha");

    const btnSave = document.createElement("button");
    btnSave.classList.add("btnSave");
    
    // Establecer el valor inicial del campo de texto con el texto actual del item
    inputEdit.value = item.texto;
    inputEditFecha.value = item.fecha; //lo mismo con la fecha

    etiquetaP.innerHTML = ""; // Limpio el contenido del <p> para mostrar los campos de edición

    etiquetaP.appendChild(inputEdit); // Añadir el campo de texto al <p>
    etiquetaP.appendChild(inputEditFecha);// Añadir el campo de fecha o prioridad al <p>

 btnSave.innerHTML = "Guardar"; //Texto del botón guardar
 etiquetaP.appendChild(btnSave); //y lo añado a la etiqueta <p>

 //Un evento para acualizar esos cambios
 btnSave.addEventListener("click", function () {

    //obtengo los nuevos texto y fecha o prioridad de los campos de entrada
    const nuevoTexto = inputEdit.value.trim();
    const nuevaFecha = inputEditFecha.value.trim();

actualizarElemento(item, opción, nuevoTexto, nuevaFecha) //actualiza en el localStorage
    etiquetaP.textContent = nuevoTexto+ " " +nuevaFecha; //actualiza la <p> 
  
 });

}
};
//ACTUALIZAR LOS ELEMENTOS EN EL LOCAL STORAGE
function actualizarElemento(item, opción, nuevoTexto, nuevaFecha) {

    //obtengo del localStorage o iniciar como una lista vacía
    let lista = JSON.parse(localStorage.getItem(opción))  || []; 

    // Encontrar y actualizar el elemento en la lista   
    for (let index = 0; index < lista.length; index++) {
    
    if (lista[index].texto === item.texto && lista[index].fecha === item.fecha) {

    //necesito que me actualice con lo nuevo que escribí   
        lista[index].texto = nuevoTexto; //Actualiza el texto
        lista[index].fecha = nuevaFecha; //Actualiza la fecha o la prioridad
        break; // Salir del bucle cuando el elemento se encontró y actualizó
    }
}
//Para que la lista actualizada se guarde en el localStorage
localStorage.setItem(opción, JSON.stringify(lista));
}

// Evento para añadir nuevos elementos
btnAñadir.addEventListener("click", function () {
    const texto1 = inputTareaEvento.value.trim(); // Trim: Obtener y limpiar el valor de los campos
    const texto2 = fechaPrioridadInput.value.trim();
    const opción = select.value; // Obtener la opción seleccionada (tarea o evento)

//CONDICIONALES
if (texto1 === "" || texto2 === "") { 
alert ("Por favor, complete todos los campos");

}else{
    // Crear un nuevo objeto con el texto y la fecha o prioridad
    const nuevaTareaEvento= {texto:texto1, fecha:texto2};

if (opción === "tarea") {
        // Agregar la nueva tarea al DOM
        agregarElemento(cajaTareas, nuevaTareaEvento, "tareas");

    //obtengo del localStorage o iniciar como una lista vacía
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push(nuevaTareaEvento); // Añadir la nueva tarea a la lista

    // Guardar la lista actualizada en el localStorage
    localStorage.setItem("tareas", JSON.stringify(tareas));

}else{
    //Por defecto, si la selección no es tarea es evento
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




/*FUNCIONABILIDAD SIN LOCAL STORAGE
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
