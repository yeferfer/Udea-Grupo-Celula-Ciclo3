const Usuarios = require('../models/mUsuarios');

exports.getUsuarios =  (req,res) => {
    Usuarios.find().then((usuarioResult) => {
        res.status(200).json(usuarioResult);
    })
}