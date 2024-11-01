Sistema de Registro, Inicio de Sesión y Administración de Tareas/Eventos
Este proyecto es una aplicación web que permite a los usuarios registrarse, iniciar sesión y gestionar una lista de tareas y eventos. Incluye funcionalidades para añadir, editar y eliminar tareas y eventos, manteniendo persistencia de datos utilizando localStorage.

Características
=> REGISTRO DE USUARIO
Permite el registro de nuevos usuarios con nombre, nombre de usuario, correo electrónico y contraseña.
Valida que todos los campos estén completos antes de registrar al usuario.
Verifica si el nombre de usuario ya está registrado para evitar duplicados.
Los datos del usuario se almacenan en localStorage para mantener la persistencia.

=> INICIO DE SESIÓN
Permite a los usuarios iniciar sesión utilizando su nombre de usuario y contraseña registrados.
Valida las credenciales y redirige a una página de administración si el inicio de sesión es exitoso.
Muestra un mensaje de error en caso de credenciales incorrectas.

=> ADMINISTRACIÓN DE TAREAS Y EVENTOS
Los usuarios pueden crear tareas y eventos con una fecha o prioridad específica.
Se pueden editar o eliminar las tareas y eventos agregados.
La lista de tareas y eventos se muestra en la interfaz y se guarda en localStorage.

=> ESTRUCTURA DEL PROYECTO
- Registro de usuario (registro.html)
Campos: nombre, usuario, correoElectrónico, contraseña
Al hacer clic en el botón btnRegistrarse, se validan los datos y se almacenan en localStorage.

- Inicio de sesión (login.html)
Campos: usuarioRegistrado, contraseñaRegistrada
Al hacer clic en el botón ingresar, se verifica la existencia de las credenciales en localStorage.
Si las credenciales son correctas, redirige a administración.html.

- Administración de Tareas/Eventos (administración.html)
Campos: inputTareaEvento, fechaPrioridadInput
Botones para añadir tareas y eventos (btnAñadir), editar y eliminar.
Se utiliza un menú desplegable (select) para clasificar las entradas como "tarea" o "evento".
