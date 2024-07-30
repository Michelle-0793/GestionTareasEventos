let lista=JSON.parse(localStorage.getItem ("personasRegistradas") || []);

const usuario = document.getElementById("usuarioRegistrado");
const contraseña = document.getElementById("contraseñaRegistrada");
const botonIngresar = document.getElementById("ingresar");


botonIngresar.addEventListener("click", function () {
let usuarioEncontrado = false; //hice una varable para que me ayudara a verificar un usuario ya registrado
//inicia en falso para que diga que no hay coincidencia

// Después: empieza a reccorrer la lista
for (let index = 0; index < lista.length; index++) { 
    
  let usuarioRegistrado=lista[index].Usuario;
  let contraseñaRegistrada=lista[index].Contraseña;

  
//condicional para verificar
  if (usuarioRegistrado==usuario.value  && contraseñaRegistrada==contraseña.value) {
    usuarioEncontrado = true; //si se encuentra el usario, es true y me redirecciona a administración
    window.location.href="administración.html";
    break;//cuando ya encuentre que ese usuario ya está registrado, deje de "buscar"
    
  }
  }
// otro if para invertir el true
  if (!usuarioEncontrado) {
    alert("Su usuario y/o contraseña son inorrectos")
    usuario.value = "";
    contraseña.value = ""; //valores para que los inputs se limpien
  
}
});