const ProductRepository = require("../repositories/productRepository");
const ValidateAdmin = require('../middleware/ValidateAdmin');
const Product = require("../models/product");

let getProducts = (req, res) => {
  ProductRepository.getAllProducts((products) => {
    res.status(200).json(products);
  });
};

let addProduct = (req, res) => {
  

  let product = new Product(req.body.id, req.body.nombre, req.body.descripcion, req.body.precio, req.body.stock)


  ProductRepository.addProduct(product, () => {
    res.status(200).json({
      message: "Producto registrado correctamente",
    });
  });
};

let updateAProduct = (req, res) => {
  
  let product = new Product(req.body.id, req.body.nombre, req.body.precio)

  ProductRepository.updateProduct(product, () => {
    res.status(200).json({
      message: "Producto actualizado correctamente",
    });
  });
};

let deleteAProduct = (req, res) => {
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
