const mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({

        uniqueString:{

            type:String,

        },

        UserId:{

            type:mongoose.Schema.Types.ObjectId,

        },

        createdAt:{

            type:Date,
          
        },
        expiresIn:{

            type:Date,
        }

    })


module.exports = mongoose.model("Otp",OtpSchema);