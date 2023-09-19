const mysql = require("mysql2");
const User = require("../models/user");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tiendavirtual",
});

db.connect();

class UserRepository {
  static addUser(user, callback) {
    const {id , nombre, email, contrasena} = user




    const query =
      "INSERT INTO usuarios (id, nombre, email, contrasena) VALUES (?, ?, ?, ?)";
    db.query(query, [id, nombre, email, contrasena], (err, result) => {
      if (err) {
        console.error("Error al registrar el usuario: " + err.message);
        callback(false)
      } else {
        console.log("Usuario registrado con éxito");
        callback(true)
      }
    });
  }


  static obtenerInformacionUsuario(usuarioId, callback) {
    const query = 'SELECT * FROM usuarios WHERE id = ?';
    db.query(query, [usuarioId], (err, result) => {
      if (err) {
        console.error('Error al obtener la información del usuario: ' + err.message);
        callback(err, null);
      } else if (result.length === 0) {
        callback(null, null);
      } else {
        const usuario = result[0]; 
        callback(null, usuario);
      }
    });
  }
}

module.exports = UserRepository;
