const usuario=document.getElementById("usuario");
const contraseña=document.getElementById("contraseña");
const usuarioRegistrado=document.getElementById("usuarioRegistrado");
const contraseñaRegistrada=document.getElementById("contraseñaRegistrada");
const botonIngresar=document.getElementById("ingresar");




botonIngresar.addEventListener("click", function () {

let lista= JSON.parse(localStorage.getItem ("personasRegistradas")) || [];

  for (let index = 0; index < lista.length; index++) { 
  
  let usuarioIngresado=lista[index].usuario
  let contraseñaIngresada=lista[index].contraseña

  if (usuarioIngresado==usuario.value  && contraseñaIngresada==contraseña.value) {
      alert ("¡Bienvenido!");
  }else{
    alert ("No está registrado");
  }
  } 
})
