const express = require('express');
const router = express.Router();
const tipoUsuarioController = require('../controllers/tipoUsuarioController');

// Rutas para tipos de usuario
router.post('/', tipoUsuarioController.crearTipoUsuario);
router.get('/', tipoUsuarioController.obtenerTiposUsuario);
router.put('/:id', tipoUsuarioController.actualizarTipoUsuario);
router.delete('/:id', tipoUsuarioController.eliminarTipoUsuario);

module.exports = router;