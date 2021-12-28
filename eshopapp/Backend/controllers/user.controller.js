const db = require("../models");
const User = db.user;

// Create and Save a user
exports.signUp= async (req, res) => {
  // Validate request
  if (!req.body.email && !req.body.password) {
        res.status(400).send({ message: "Please provide email and password to continue." });
        return;
}
try {
const filter = { email: req.body.email };
let data = await User.findOne(filter);

if(data === null) {
//If not found , Create a User
const user = new User({
    _id: req.body._id,
    isAdmin: false,
    name: req.body.name, 
    email: req.body.email,
    password: req.body.password,
   
   
    // role: req.body.role ? req.body.role : 'user',
    // uuid: req.body.uuid,
    // accesstoken: req.body.accesstoken, 
    
});


try {
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    const insertResult = await User.create({
      email: req.body.email,
      password: hashedPwd,
    });
    res.send(insertResult);
}
catch(err) {
    res.status(500).send({
    message: err.message || "Some error occurred, please try again later."
    });
}
}
else {
//User found with same email
res.status(400).send({
    message: "Try any other email, this email is already registered!"
});
}
try {
    const schema = new mongoose.Schema({
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: "Invalid email-id format!"
            },
            required: [true, "Email required"]
        }
    });
}
catch(err) {
    res.status(500).send({
    message: err.message || "Some error occurred, Invalid input."
    });
}
try {
  if (contactNumber  == /^\d{10}$/){
    return contactNumber;
  }
  else {
      res.send(400).send({
          message: err.message || "Invalid contact number!"
      })
  }
}
catch(err) {
    res.status(500).send({
    message: err.message || "Some error occurred, Invalid details."
    });
}
} catch(err) {
    res.status(500).send({
    message: err.message || "Some error occurred, please try again later."
    });
} };


// Retrieve user using the username provided in the req parameter.
// Validate user by matching the password provided in the req parameter.
exports.login = async (req, res) => {


try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user) {
      const cmp = await bcrypt.compare(req.body.password, user.password);
      if (cmp) {
       
        res.send("Auth Successful");
      } else {
        res.send("Wrong email or password.");
      }
    } else {
      res.send("Wrong email or password.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
}; 

exports.logout = async (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(401).send({ message: "Please provide user credentials to logout." });
    return;
  }
  
try {
const id = req.body.id;
const update = { isLoggedIn: false };

let data = await User.findByIdAndUpdate(id, update);
res.send({ message: "Logged Out successfully." });
} catch(err) {
    res.status(404).send({
      message: "User Not Found - Logout failed."
    });
}
}; 

exports.adminLogin = async(req , res) => {
  try{
    if(req.body.email == "admin@upgrad.com" && req.body.password == "password")
    {
      res.send("Successful");
    } else {
      res.send("Wrong email or password.");
    }

}
 catch (error) {
  console.log(error);
  res.status(500).send("Internal Server error Occured");
}
}

exports.adminLogout = async (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(401).send({ message: "Please provide user credentials to logout." });
    return;
  }
  
try {
const id = req.body.id;
const update = { isLoggedIn: false };
let data = await User.findByIdAndUpdate(id, update);
res.send({ message: "Logged Out successfully." });
} catch(err) {
    res.status(404).send({
      message: "User Not Found - Logout failed."
    });
}
};