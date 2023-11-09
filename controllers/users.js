const { response } = require("express");

const getUsers = (req, res = response) => {
  res.json({
    msg: "get API - Controlador",
  });
};

const postUser = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "post API",
    datos: {
      nombre,
      edad,
    },
  });
};

const putUser = (req, res = response) => {
  const query = req.query;
  const id = req.params.id;

  res.json({
    msg: "put API",
    id,
    query
  });
};

const deleteUser = (req, res = response) => {
  res.json({
    msg: "delete API",
  });
};

module.exports = { getUsers, postUser, putUser, deleteUser };
