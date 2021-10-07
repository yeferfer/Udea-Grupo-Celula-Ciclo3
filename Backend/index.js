//console.log("Holii Edi")
var express = require('express'); /// Importa la libreria express
const http = require('http'); ///
var app = express(); // Genera una aplicacion q es instancia de express

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) { /// Metodos HTMl (get,post,put,patch,delete). Los parametros q recibe, hacen referencia a REQuire y RESponse
  res.send('hello Edi');
});

console.log("Conectado") 

app.set("port",3002)
const server = http.createServer(app)
server.listen(3002)