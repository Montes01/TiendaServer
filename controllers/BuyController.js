const BuyRepository = require("../repositories/BuyRepository");

// Realiza una compra de producto para un usuario y responde con un mensaje de éxito
let comprarProducto = (req, res) => {
    const usuarioId = req.body.usuarioId; // ID del usuario desde el cuerpo de la solicitud
    const productoId = req.body.productoId; // ID del producto desde el cuerpo de la solicitud
    const cantidad = req.body.cantidad; // Cantidad desde el cuerpo de la solicitud

    // Llama a UserRepository para realizar la compra
    BuyRepository.comprarProducto(usuarioId, productoId, cantidad, () => {
        // Envía un correo de confirmación al usuario
        const asuntoCorreo = 'Compra realizada';
        const contenidoCorreo = 'Gracias por tu compra. Detalles de la compra: ...'; // Ajusta el contenido del correo según tus necesidades

        //sendMail.enviarCorreo(usuarioId, asuntoCorreo, contenidoCorreo);

        res.status(200).json({
            message: "Compra realizada con éxito",
        });
    });
};

module.exports = {
    comprarProducto
}
