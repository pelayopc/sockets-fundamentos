const { io } = require("../server");

io.on("connection", (client) => {
  console.log("Usuario conectado " + client);

  client.emit("enviarMensaje", {
    usuario: "Administrador",
    mensaje: "Bienvenido a la plataforma",
  });

  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
  //escuchar cliente
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);

    client.broadcast.emit("enviarMensaje", data);

    // if (mensaje.usuario) {
    //   callback({
    //     resp: "Todo bien",
    //   });
    // } else {
    //   callback({
    //     resp: "Todo mal",
    //   });
    // }
  });
});
