const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

        name:{

            type:String,
            required:true,
            trim:true,
        },

        Price:{

            type:Number,
            required:true,
            trim:true,
        },

        Description:{

            type:String,
            required:true,
        },
        Images:{

            type:[String],

        },
        ratingAndReviews:[{

            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReviews",

        }],

        Category:{

            type:mongoose.Schema.Types.ObjectId,
            ref:"Category",
            required:true,
        },

        Tags:{

            type:mongoose.Schema.Types.ObjectId,
            ref:"Tags",
            required:true,
        }
    })

module.exports = mongoose.model("Product",productSchema);
