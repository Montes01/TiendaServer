const ProductRepository = require("../repositories/productRepository");
const ValidateAdmin = require('../middleware/ValidateAdmin');
const Product = require("../models/product");

// Obtiene todos los productos y los devuelve como respuesta en formato JSON
let getProducts = (req, res) => {
  ProductRepository.getAllProducts((products) => {
    res.status(200).json(products);
  });
};

// Agrega un producto utilizando los datos proporcionados en el cuerpo de la solicitud y responde con un mensaje de éxito
let addProduct = (req, res) => {
  
  ValidateAdmin.njwtAuth(req,res, null)

  let product = new Product(req.body.id, req.body.nombre, req.body.precio)


  ProductRepository.addProduct(product, () => {
    res.status(200).json({
      message: "Producto registrado correctamente",
    });
  });
};

// Actualiza un producto utilizando los datos proporcionados en el cuerpo de la solicitud y responde con un mensaje de éxito
let updateAProduct = (req, res) => {
  
  let product = new Product(req.body.id, req.body.nombre, req.body.precio)
  ValidateAdmin.njwtAuth(req,res, null)
  ProductRepository.updateProduct(product, () => {
    res.status(200).json({
      message: "Producto actualizado correctamente",
    });
  });
};

// Elimina un producto utilizando el ID proporcionado en la consulta y responde con un mensaje de éxito
let deleteAProduct = (req, res) => {
  ValidateAdmin.njwtAuth(req,res, null)
  ProductRepository.deleteProduct(req.query.id, () => {
    res.status(200).json({
      message: "Producto eliminado correctamente",
    });
  });
};

module.exports = {
  getProducts,
  addProduct,
  updateAProduct,
  deleteAProduct
};
