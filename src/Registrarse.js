const nombre = document.getElementById("nombre")
const usuario=document.getElementById("Usuario");
const correo=document.getElementById("correoElectrónico");
const contraseña=document.getElementById("contraseña");
const boton=document.getElementById("btnRegistrarse");


let nombre1=nombre.value
let usuario1=usuario.value;
let correo1=correo.value;
let contraseña1=contraseña.value;


let lista=[];

boton.addEventListener("click", function () {


    let persona={
        Nombre:nombre.value,
        Usuario:usuario.value,
        correoElectrónico:correo.value,
        Contraseña:contraseña.value,
    }    

let lista= JSON.parse(localStorage.getItem ("Personas registradas")) || [];

lista.push(persona);

localStorage.setItem("Personas registradas", JSON.stringify(lista))

nombre.value="";
usuario.value="";
correo.value="";
contraseña.value="";

alert ("Se ha registrado con éxito")
console.log (lista)
})