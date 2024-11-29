const express = require("express");
const app = express();
require("dotenv").config();
const authRoute = require("./routes/Route.js");
const cookie = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const Razorpay = require('razorpay');  

app.use(express.json());

app.use(cookie());

app.use(cors());



// its is bascically used to upload files on the server 

app.use(fileUpload({

    useTempFiles : true,
    tempFileDir : '/tmp/'
    
}));

exports.instance = new Razorpay({

    key_id: process.env.RAZORPAY_API_KEY,

    key_secret: process.env.RAZORPAY_SECRET_KEY ,

})



const dbConnect = require("./config/Database");
dbConnect();
const cloundConnect = require("./config/Cloudinary"); // it is used to upload files on the cloudinary 
cloundConnect();

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{

    console.log("app listen at this port ",PORT);

})


 app.use("/api/v1/auth",authRoute);

app.get("/",(req,res)=>{

    res.send("<h1>helow bro</h1>");


})




