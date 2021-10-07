// //console.log("Holii Edi")
// var express = require('express'); /// Importa la libreria express
// const http = require('http'); ///
// var app = express(); // Genera una aplicacion q es instancia de express

// // Lines de codigo necesarias para el uso de JSON ///
// app.use(express.json()); //
// app.use(express.urlencoded({ extended: false }));

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/saludando', function (req, res) { /// Metodos HTMl (get,post,put,patch,delete). Los parametros q recibe, hacen referencia a REQuire y RESponse
//     res.send('hello Edi');
// });

// app.post('/enviar', function (req, res) { /// Metodos HTMl (get,post,put,patch,delete). Los parametros q recibe, hacen referencia a REQuire y RESponse
//     console.log(req.body)
//     const totalito = req.body.valorUnitario * req.body.cantidad;
//     res.status(200).json("Su resultado es: "+ totalito); /// Estos status code son los de HTML
// });

// console.log("Conectado")

// /// Linea para que el servidor permanezca en ESCUCHA (LISTENER) Se debe importar la libreria http///
// app.set("port", 3002)
// const server = http.createServer(app)
// server.listen(3002)



const app = require("./app");
const http = require("http");

const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
};

const port = normalizePort(process.env.PORT || "3002");
app.set("port", port);

console.log("Conectado")

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);