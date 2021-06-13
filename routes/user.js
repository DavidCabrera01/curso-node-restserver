const {Router} = require('express');
const { usuariosGet, usuarioPut, usuariosPost, usuarioPatch, usuarioDelete } = require('../controllers/usuarios');
const router = Router();


router.get('/', usuariosGet);

router.put('/:id', usuarioPut);

router.post('/', usuariosPost);

router.patch('/', usuarioPatch);


router.delete('/', usuarioDelete);

module.exports = router;