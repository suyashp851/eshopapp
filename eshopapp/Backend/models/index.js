const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");


const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.artists = require("./address.model.js")(mongoose);
db.genres = require("./order.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);
db.movies = require("./product.model.js")(mongoose);

module.exports = db;