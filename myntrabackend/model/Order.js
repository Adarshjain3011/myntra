const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    amount:{

        type:Number,

    },

    current:{

        type:String,

    },

    receipt:{

        type:String
    },

    notes:{

        type:Object,

    }
})

module.exports = mongoose.model("order",OrderSchema);


