¡Bienvenido al API Rest para un sistema TODO List!

Aquí aprenderás a instalar los componentes necesarios para hacer correr la aplicacion:

1.- Instalar NodeJS (LTS).
2.- Instalar MongoDB.
3.- Instalar el framework NestJs y la base de datos Mongoose en NodeJS
4.- Una vez en directorio de la aplicación ejecutar comando 'npm install' y/o 'npm update'.
5.- Ejecutar aplicación (en modo desarrollo) mediante comando 'npm run dev'.

Esta aplicacion tiene las siguientes funcionalidades:

1.- Obtener listado de tareas y su estado. (Metodo: GET, Ruta: http://localhost:3000/tarea)
2.- Agregar tarea. (Metodo: POST, Ruta: http://localhost:3000/tarea, Body: datos de la tarea)
3.- Marcar tarea como resuelta. (Metodo: PUT, Ruta: http://localhost:3000/tarea/updateEstado/:nombre, Parametro: nombre de la tarea)
