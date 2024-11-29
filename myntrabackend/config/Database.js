const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect =() => {

    mongoose.connect("mongodb://127.0.0.1:27017/myntrabackend", {}).then(() => {

        console.log("database connected sucessfully ");

    }).catch((error) => {

        console.log("datbase not connected ");

        console.log(error);
        
    })
}

module.exports = dbConnect;