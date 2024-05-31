const { getAll, create, getOne, remove, update } = require('../controllers/usuarios.controller');
const express = require('express');

const usuariosRouter = express.Router();

usuariosRouter.route("/users")
		.get(getAll)
        .post(create);

usuariosRouter.route("/users/:id")
    .get(getOne)
    .delete(remove)
    .put(update)

        

module.exports = usuariosRouter;