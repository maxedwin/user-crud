const express = require('express');
const usuariosRouter = require('./usuarios.router');
const router = express.Router();

// colocar las rutas aquí
router.use(usuariosRouter);

module.exports = router;