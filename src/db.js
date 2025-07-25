const mongoose = require("mongoose");
const dotenv = require("dotenv");

mongoose.connect(process.env.DB_URI);

module.exports = mongoose;
