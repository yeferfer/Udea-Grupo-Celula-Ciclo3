//console.log("Holii Edi")
var express = require('express'); /// Importa la libreria express
const http = require('http'); ///
var app = express(); // Genera una aplicacion q es instancia de express

app.use(express.json()); //
app.use(express.urlencoded({ extended: false }));

// respond with "hello world" when a GET request is made to the homepage
app.get('/saludando', function (req, res) { /// Metodos HTMl (get,post,put,patch,delete). Los parametros q recibe, hacen referencia a REQuire y RESponse
    res.send('hello Edi');
});

app.post('/enviar', function (req, res) { /// Metodos HTMl (get,post,put,patch,delete). Los parametros q recibe, hacen referencia a REQuire y RESponse
    console.log(req.body)
    const totalito = req.body.valorUnitario * req.body.cantidad;
    res.status(200).json("Su resultado es: "+ totalito);
});

console.log("Conectado")

app.set("port", 3002)
const server = http.createServer(app)
server.listen(3002)
