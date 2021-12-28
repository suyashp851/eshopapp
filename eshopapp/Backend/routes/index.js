module.exports = app => {
    const product = require("../controllers/product.controller.js");

    const order = require("../controllers/order.controller");
    
      var router = require("express").Router();

      router.get("/products", product.findProducts);

      router.get("/products/categories" , product.findProductsByCategory);

      router.get("/products/:id" , product.findOneProduct);

      router.post("/products" , product.saveProducts);

      router.put("/products/:id" , product.updateProduct);

      router.delete("/products/:id" , product.deleteProduct);

      router.post("/orders" , order.createOrder);      
}