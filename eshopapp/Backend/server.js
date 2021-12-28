const express = require("express");
bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8085"
};

app.use(cors(corsOptions));


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


(async function() {
  const db = require("./models");
  let client;

  try {
   client = await db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
    console.log("Connected to the database");
 } catch (err) {
    console.log("Cannot connect to the database!", err);
    process.exit(1);
  }

})();



app.get("/", (req, res) => {
  res.json({ message: "Welcome to Eshop" });
});


require("./routes/index")(app);


const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});