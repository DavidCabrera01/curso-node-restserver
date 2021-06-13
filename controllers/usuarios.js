const {response} = require('express');

const usuariosGet = (req, res = response)=>{
    res.json({
        ok:true,
        msg: 'get API -controlador'
        });
}

const usuariosPost = (req, res)=>{

    const {nombre, edad} = req.body;


     res.json({ 
        ok:true,
        nombre,
        edad
    }
     );
}

const usuarioPut = (req, res)=>{
   const {id} = req.params;
     res.json({
        ok:true,
        msg: 'PUT API -controlador',
        id
     });
}

const usuarioPatch = (req,res)=>{
     res.json({
        ok:true,
        msg: 'PATCH API -controlador'
     });
}

const usuarioDelete = (req,res)=>{
     res.json({
        ok:true,
        msg: 'DELETE API -controlador'
     });
}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete,
}