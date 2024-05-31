const catchError = require('../utils/catchError');
const Usuarios = require('../models/Usuarios');

const getAll = catchError(async(req, res) => {
    const usuarios = await Usuarios.findAll();
    return res.json(usuarios)
});

const create = catchError(async(req, res) =>{
    const { first_name, last_name, email, password, birthday} = req.body;
    const usuario = await Usuarios.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        birthday: birthday
    });
    return res.status(201).json(usuario)
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const usuario = await Usuarios.findByPk(id);
    return res.json(usuario);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Usuarios.destroy({where: {id:id}});
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const {id} = req.params;
    const {first_name, last_name, email, password, birthday} = req.body;
    const usuario = await Usuarios.update({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        birthday: birthday
    }, { where: {id:id}, returning: true});
    return res.json(usuario[1][0]);
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}