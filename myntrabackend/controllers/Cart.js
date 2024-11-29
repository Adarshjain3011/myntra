
const User = require("../model/UserSchema");
const Product = require("../model/Schema");
const { response } = require("express");

exports.removeCart = async (req, res) => {



    try {

        console.log("1");

        // console.log(req.user.id);

        const { userId } = req.body;

        console.log("userid is ", userId);

        let product = await Product.findById(req.params.productId);

        let user = await User.findById(userId);

        if(!product || !user ){


            return response.status(400).json({

                status:false,
                message:"product and user id not found "

            })
        }


        const cartItem = user.cart.find(item => item.productId.toString() === req.params.productId);


        if(cartItem.quantity == 1){


            return res.status(200).json({

                status:true,
                data:1,
                message:"not quantity left of cart "

            })
        }
        if(cartItem){

            cartItem.quantity -= 1;

        }

        const data = await user.save();

        const userData = await User.findById(userId).populate("cart").exec();


        return res.status(200).json({

            status:true,
            data:userData.cart,
            message:"cart quantity decreased successfully "

        })



    }

    catch (error) {

        console.log(error);
        return res.status(400).json({

            status: false,
            message: " their is somehting error while removing  cart   ",

            error: error.message,

        });

    }
}

exports.DeleteCart = async(req,res)=>{
    
    
    try{
        
        const { userId } = req.body;

        console.log("user id is  ",userId);
        
        console.log("product id is ",req.params.productId);

        let user = await User.findById(userId);

        let product = await Product.findById(req.params.productId);

        if(! user || ! product){

            return res.status(400).json({

                status:false,
                
                message:"error in userId and ProductId "

            })
        }

        console.log("before deletion of cart item ",user);

        const data = await User.findByIdAndUpdate(
            userId,
            { $pull: { cart: { productId: req.params.productId } } },

            { new: true }).populate("cart").exec();

        console.log("after deleting whole cart user data is ",data);

        return res.status(200).json({

            status:true,

            data:data.cart,

            message:"cart deleted successfully "

        })

    }
    catch(error){


    }
}


exports.AddToCart = async (req, res) => {


    try {

        const { userId } = req.body;

        
        // const user = req.params.product_id;
        
        let product = await Product.findById(req.params.productId);
        
        let user = await User.findById(userId);
        
        if (!product || !user) {
            
            
            return res.status(400).json({
                
                status: false,
                message: "product and user id not found "
                
            })
        }
        
        console.log("user id is ", userId);

        console.log("product id is ", req.params.productId);

        console.log("user is ",user);

        const cartItem = user.cart.find(item => item.productId.toString() === req.params.productId);

        // console.log("user ibfo is ", cartItem);
        // const cartItem = user;

        // const cartItem;

        // console.log("uer info is ", user);

        if (cartItem) {

            cartItem.quantity += 1;

        }

        else {

            user.cart.push({

                productId: req.params.productId,
                quantity: 1,
            })

        }

        const data = await user.save();


        console.log("after upadation its quantity is ", data);

        const userData = await  User.findById(userId).populate("cart").exec();

        return res.status(200).json({

            status:true,

            data:userData.cart,

            message:"add to cart successfully",

        })

    }


    catch (error) {

        return res.status(400).json({

            status: false,
            message: " their is somehting error while add to cart product   ",

            error: error.message,

        });

    }

}

exports.getAllAdd_To_Cart = async (req, res) => {


    try {

        const userId = req.query.userId;

        console.log("user id is ",userId);

        const user = await User.findById(userId).populate('cart').exec();

        console.log("get all add to cart at backend ",user);

        return res.status(200).json({

            status: true,
            cart: user,
            message: "get all  add to cart product  successfully"

        })

    }
    catch (error) {

        return res.status(500).json({

            status: false,
            message: "error while getting add to cart ",
            error: error.message,
        })

    }

}















            // console.log("user id ", req.user.id);

            // const userData = await User.findByIdAndUpdate(userId, {

                //     $push: { cart: {productId: req.params.productId ,quantity:1}  }

                // }, { new: true });

                // console.log("user ", userData);

                // if (userData) {

                    //     return res.status(200).json({

                        //         status: true,
                        //         data: userData.cart,
                        //         quantity:cartItem.quantity,
                        //         message: "product add to cart  successfully"

                        //     });

                        // }

                        // else {

                            //     return res.status(400).json({

                                //         status: false,
                                //         message: "product not  add to cart",

                                //         error: error.message,

                                //     });

                                // }
                            //}













                            
        // const user = await User.findByIdAndUpdate(userId, {
        //     $pull: { cart: req.params.productId }
        // }, { new: true });


        // if (user) {

        //     return res.status(200).json({

        //         status: true,
        //         data: user.cart,
        //         message: "product remove from  cart  successfully"

        //     })
        // }

        // else {

        //     return res.status(400).json({

        //         status: false,
        //         message: "product not  remove from  cart"

        //     })
        // }