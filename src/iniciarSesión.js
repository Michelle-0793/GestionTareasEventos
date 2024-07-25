let lista=JSON.parse(localStorage.getItem ("personasRegistradas")||[]);

const usuario = document.getElementById("usuarioRegistrado");
const contraseña = document.getElementById("contraseñaRegistrada");
const botonIngresar = document.getElementById("ingresar");


botonIngresar.addEventListener("click", function () {

for (let index = 0; index < lista.length; index++) { 
    
  let usuarioRegistrado=lista[index].Usuario;
  let contraseñaRegistrada=lista[index].Contraseña;

  if (usuarioRegistrado==usuario.value  && contraseñaRegistrada==contraseña.value) {

    window.location.href="administración.html"
    
  }else{
    usuario.value="";
    contraseña.value="";
  }

  }})