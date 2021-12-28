const db = require("../models");
const Product = db.product;


  
  exports.findProducts = async (req, res) => {
    try {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    let data = await Product.find(condition);
 
  res.send(data);
    } catch(err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Products."
        });
      }
  };


 
  exports.findProductsByCategory = async (req, res) => {
    try {
    const category = req.params.category;
  var condition = category ? { category: { $regex: new RegExp(category), $options: "i" } } : {};
 
    let data = await Product.find(condition);
  
  res.send(data);
    } catch(err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Product."
        });
      }
  };
  

  exports.findOneProduct = async (req, res) => {
    try {
    const id = req.params.id;
    let data = await Product.findById(id);
   
    if (!data)
        res.status(404).send({ message: "Not found Product with id " + id });
    else 
        res.send(data);
    } catch(err) {
          res.status(500).send({
            message:
              err.message || "Error retrieving Product with id=" + id });
        }
    };


  
    exports.saveProducts = async (req, res) => {
        if (!req.body.name) {
          res.status(400).send({ message: "Content can not be empty!" });
          return;}
          if(!isLogggedIn) {
            res.send("Please Login first to access this endpoint!");
          }
          else {
    try {
        const product = new Product({
            name : req.body.name,
            availableItems: req.body.availableItems,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            imageURL: req.body.imageURL,
            manufacturer: req.body.manufacturer,
            accesstoken: req.body.accesstoken   
        });
        
        let saveProduct = await product.save(); 
        res.send(saveProduct);   
      } catch (err) {
        res.status(500).send({
              message:
                err.message || "Some error occurred while saving the Products."
            });
        }
      }}


      
      exports.updateProduct = async (req, res) => {
        if (!req.body) {
          return res.status(400).send({
            message: "Data to update can not be empty!"
          });
        }
        if(!isLogggedIn) {
            res.send("Please Login first to access this endpoint!");
          }
          else {
        try {
        const id = req.params.id;
        let data = await Product.findOneAndUpdate(id, req.body, { useFindAndModify: false });
        if (!data) {
              res.status(404).send({
                message: `No Product found for ID ${id}!`
              });
            } else res.send({ message: "Product was updated successfully." });
        } catch(err) {
            res.status(500).send({
              message:
                err.message || "Error updating Product with id=" + id });
          }}
      };


      exports.deleteProduct = async (req, res) => {
        try {
      const id = req.params.id;
        let data = await Product.findOneAndDelete(id);
      
      if (!data) {
              res.status(404).send({
                message: `No Product found for ID -${id}!`
      });
        } else res.send({
                message: `Product with ID - ${id} deleted successfully!`
              });
        } catch(err) {
            res.status(500).send({
              message:
                err.message || "Could not delete the specified course" });
          }
      };