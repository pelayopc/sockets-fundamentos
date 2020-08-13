var socket = io();
// Escuchar sucesos
socket.on("connect", function () {
  console.log("Conectado al servidor");
});
socket.on("disconnect", function () {
  console.log("Perdimos conexion con el servidor");
});
// Eviar información
socket.emit(
  "enviarMensaje",
  {
    usuario: "Fernando",
    mensaje: "Hola mundo",
  },
  function (respuesta) {
    console.log("Se disparó el callback");
    console.log("respuesta server: ", respuesta);
  }
);
socket.on("enviarMensaje", function (mensaje) {
  console.log(mensaje);
});
