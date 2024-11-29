const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

        name: {

            type: String,
            // required: true,
            trim: true,
        },

        email: {

            type: String,
            // required: true,

        },
        
        gender: {

            type: String,

        },
        phoneNo: {

            type: Number,

        },
        password: {

            type: [String],
            

        },

        image: {

            type: String,

        },

        cart: [{ productId: { type: mongoose.Schema.Types.ObjectId ,ref: "Product"}, quantity: { type: Number, default: 1 }}],

        // product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },

        wishlist: [{ productId: { type: mongoose.Schema.Types.ObjectId , ref: "Product"} }],


        verified:{

            type:Boolean

        },
        token: {

            type: String,
        },

        purchaseProduct:[{

            type:mongoose.Schema.Types.ObjectId,

            ref:"Product"
            
        }]


    })

module.exports = mongoose.model("User", userSchema);


