const mysql = require("mysql2");
const User = require("../models/user");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tiendavirtual",
});

db.connect();
class BuyRepository { 

    static comprarProducto(buy, callback) {
        const query =
          "INSERT INTO compras (usuario_id, producto_id, cantidad) VALUES (?, ?, ?)";
        db.query(query, [buy.usuario_id, buy.producto_id, buy.cantidad], (err, result) => {
          if (err) {
            console.error("Error al registrar la compra: " + err.message);
            callback(false);
            return false;
          } else {
            console.log("Compra realizada con éxito");
            callback(true);
            return true;
          }
        });
      }
    
    
}

module.exports = BuyRepository