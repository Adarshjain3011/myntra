const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({

        Tags:{

            type:mongoose.Schema.Types.ObjectId,
            ref:"Tags",
            required:true,

        },

        categoryName:{

            type:String,
            required:true,
        }

    })

module.exports = mongoose.model("Category",categorySchema);