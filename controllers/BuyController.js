const BuyRepository = require("../repositories/BuyRepository");
const Buy = require("../models/Buy");

let comprarProducto = (req, res) => {
    const usuarioId = req.body.usuarioId; 
    const productoId = req.body.productoId; 
    const cantidad = req.body.cantidad;

    let buy = new Buy(usuarioId, productoId, cantidad);

    BuyRepository.comprarProducto(buy, (completed) => {
        if(completed){
            res.status(200).send({
                message: "Compra realizada con éxito",
            });
        } else {
            res.status(400).send({
                message: "Compra fallida",
            })
        }
    });
};

module.exports = {
    comprarProducto
}
