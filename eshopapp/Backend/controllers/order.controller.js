const db = require("../models");
const Order = db.order;

exports.createOrder = async (req, res) => {
    if (!req.body.product) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;}
      if(!isLogggedIn) {
        res.send("Please Login first to access this endpoint!");
      }
      else {
try {
    const order = new Order({
        quantity : req.body.quantity,
        addressid: req.body.addressid,
        productid: req.body.productid,
        accesstoken: req.body.accesstoken   
    });
    
    let createOrder = await order.save(); 
    res.send(createOrder);   
  } catch (err) {
    res.status(500).send({
          message:
            err.message || "Some error occurred while saving the Orders."
        });
    }
  }}