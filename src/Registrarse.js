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
    };   

if (nombre.value==="" || usuario.value==="" || correo.value==="" || contraseña.value==="") {
    alert("Debe completar todos los campos")
} else {
    let usuarioYaRegistrado=false
    for (let index = 0; index < lista.length; index++) {
        if (lista[index].Usuario === usuario.value) {
            usuarioYaRegistrado=true;
            break;
        }
}
nombre.value="";
usuario.value="";
correo.value="";
contraseña.value="";

if (usuarioYaRegistrado) {
    alert("Este usuario ya está registrado");
}else{
lista.push(persona);

localStorage.setItem("personasRegistradas", JSON.stringify(lista))

alert ("¡Se ha registrado con éxito!")
window.location.href="iniciarSesión.html"

}
}})
