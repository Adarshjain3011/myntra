const mongoose = require('mongoose');

const reviewSchema =

    new mongoose.Schema({

        user:{

            type:String,
            required:true,

        },
        product:{

            type:String,
            required:true,

        },
        Message:{
            
            type:String,
        
        },

    })


module.exports = mongoose.model("Reviews",reviewSchema);