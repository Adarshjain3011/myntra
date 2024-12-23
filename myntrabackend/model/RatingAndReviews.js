const mongoose = require('mongoose');

const ratingAndReviewsSchema = new  mongoose.Schema({

        user:{

            type:mongoose.Schema.Types.ObjectId,

            ref:"User",

            required:true,

        },
        product:{

            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required:true,

        },
        rating:{
            
            type:Number,
            required:true,

        },

        review:{

            type:String,
            required:true,

        }


    })

module.exports = mongoose.model("RatingAndReviews",ratingAndReviewsSchema);