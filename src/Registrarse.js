
const usuario=document.getElementById("Usuario");
const correo=document.getElementById("correoElectrónico");
const contraseña=document.getElementById("contraseña");
const boton=document.getElementById("btnRegistrarse");



let usuario1=usuario.value;
let correo1=correo.value;
let contraseña1=contraseña.value;


let lista=[];

boton.addEventListener("click", function () {

    let persona={
        Usuario:usuario.value,
        correoElectrónico:correo.value,
        Contraseña:contraseña.value,
    }    

lista.push(persona)
console.log (lista)
})