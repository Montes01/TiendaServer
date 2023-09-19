const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');
const User = require('../models/User');
// Registra un usuario
let register = (req, res) => {
  const { id, nombre, email, contrasena } = req.body;

  let user = new User(id, nombre, email, contrasena);

  userRepository.addUser(user, (valid) => {
    if (valid) {
      res.status(200).json({
        message: "Usuario registrado con éxito",
      })
    } else {
      res.status(500).json({
        message: "Error al registrar el usuario",
      })
    }
  });

}

let verPerfilUsuario = (req, res) => {
  const usuarioId = req.query.id; 
  userRepository.obtenerInformacionU
  suario(usuarioId, (error, usuario) => {
    if (error) {
      res.status(500).json({
        message: "Error al obtener la información del usuario",
      });
    } else if (!usuario) {
      res.status(404).json({
        message: "Usuario no encontrado",
      });
    } else {
      const { id, nombre, email } = usuario; 
      let user = new User(id, nombre, email)
      res.status(200).json({
        message: "Información de perfil obtenida con éxito",
        usuario:  user , 
      });
    }
  });
};

module.exports = {
  register,
  verPerfilUsuario
}
