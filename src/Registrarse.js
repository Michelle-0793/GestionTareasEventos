const nombre = document.getElementById("nombre")
const usuario=document.getElementById("Usuario");
const correo=document.getElementById("correoElectrónico");
const contraseña=document.getElementById("contraseña");
const boton=document.getElementById("btnRegistrarse");


const lista=JSON.parse(localStorage.getItem ("personasRegistradas")) || [];

boton.addEventListener("click", function () {


    let persona={
        Nombre:nombre.value,
        Usuario:usuario.value,
        correoElectrónico:correo.value,
        Contraseña:contraseña.value,
    }    

lista.push(persona);

localStorage.setItem("personasRegistradas", JSON.stringify(lista))

nombre.value="";
usuario.value="";
correo.value="";
contraseña.value="";

window.location.href="iniciarSesión.html"
})