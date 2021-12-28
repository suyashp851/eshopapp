const db = require("../models");
const Address = db.address;


exports.create = async (req, res) => {
  // Validate request
    if (!req.body.contactNumber) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }


try {

    const address = new Address({
        accesstoken: req.body.accesstoken, 
        zipCode: req.body.zipCode,
        state: req.body.state,
        street : req.body.street,
        landmark : req.body.landmark,   
        city: req.body.city,
        contactNumber : req.body.contactNumber,
        name : req.body.name 
    });
    
    let saveAddress = await address.save(); 
    //when fail its goes to catch
    res.send(saveAddress); 
   
  } catch (err) {
    
    res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Address."
        });
  }
  exports.isLog = async (req, res) => {
    try {
       
        if (isLoggedIn) {
         
            res.send("Successful");
          } else {
            res.send("Please Login first to access this endpoint!");
          
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server error Occured");
      }
  }

  exports.isZip = async (req, res) => {
      try {
            if(typeOf(req.body.zipCode) != Number && length(req.body.zipCode) != 6 )
            {
                res.send("Invalid zip code!");
            }
            else
            {
                res.send("Valid zip code!");
            }

      }
      catch (error) {
        console.log(error);
        res.status(500).send("Internal Server error Occured");
      }
  }

  exports.iscontactNumber = async (req, res) => {
    try {
          if(length(req.body.contactNumber) != 10 )
          {
              res.send("Invalid contact number!");
          }
          else
          {
              res.send("Valid contact Number");
          }

    }
    catch (error) {
      console.log(error);
      res.status(500).send("Internal Server error");
    }
}
}