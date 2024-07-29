let lista=JSON.parse(localStorage.getItem ("personasRegistradas") || []);

const usuario = document.getElementById("usuarioRegistrado");
const contraseña = document.getElementById("contraseñaRegistrada");
const botonIngresar = document.getElementById("ingresar");


botonIngresar.addEventListener("click", function () {
let usuarioEncontrado = false;

for (let index = 0; index < lista.length; index++) { 
    
  let usuarioRegistrado=lista[index].Usuario;
  let contraseñaRegistrada=lista[index].Contraseña;

  

  if (usuarioRegistrado==usuario.value  && contraseñaRegistrada==contraseña.value) {
    usuarioEncontrado = true;
    window.location.href="administración.html";
    break;
    
  }
  }

  if (!usuarioEncontrado) {
    alert("Su usuario y/o contraseña son inorrectos")
    usuario.value = "";
    contraseña.value = "";
  
}
});