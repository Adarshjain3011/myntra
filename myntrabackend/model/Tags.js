const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({

        tagName:{

            type:String,
            required:true,
            trim:true,

        },


    })

module.exports = mongoose.model("Tags",TagSchema);

