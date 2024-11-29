
const User = require("../model/UserSchema");
const Product = require("../model/Schema");

exports.removeProductWishlist = async (req, res) => {


    try {
        
        const {userId} = req.body;

        console.log("userid is ",userId);

        const user = await User.findById(userId);

        console.log("user .wishlist ke pehle ",user);
        
        if(user.wishlist === null){

            return res.status(200).json({

                status:true,
                message:"their is no item left in the wishlist to remove "

            })
        }

        let exists = user.wishlist.find((item)=>item.productId.toString() === req.params.productId);


        if(exists){

            user.wishlist.pull({

                productId: req.params.productId,
                
            })

            // const data = await User.findByIdAndUpdate(userId, {
            //     $pull: { wishlist: req.params.productId }
            //   }, { new: true }).populate("wishlist").exec();
            
            await user.save();

            const data = await User.findById(userId).populate('wishlist').exec();
            
    
                return res.status(200).json({
    
                    status: true,
                    data: data,
                    message: "product remove from  wishlist  successfully"
    
                })

        }

        else{

            return res.status(400).json({
    
                status: false,
                message: "no such product exists in   wishlist "

            })

        }


    }

    catch (error) {

        console.log(error);
        return res.status(400).json({

            status: false,
            message: " their is somehting error while removing  wishlist product    ",

            error: error.message,

        });

    }
}

exports.AddToWishlist = async (req, res) => {

    try {
        
        const { userId } = req.body;
        
        console.log("user id is ", userId);
    
        console.log("product id is ", req.params.productId);
        
        // const user = req.params.product_id;
        
        let product = await Product.findById(req.params.productId);
        
        let user = await User.findById(userId);

        console.log("user ->",user);

        console.log("product ->",user);

        
        if (!product || !user) {
            
            
            return res.status(400).json({
                
                status: false,
                message: "product and user id not found "
                
            })
        }
        

        console.log("user is ",user);

        const wishlistItem = user.wishlist.find(item => item.productId.toString() === req.params.productId);

        // console.log("user ibfo is ", wishlistItem);
        // const wishlistItem = user;

        // const wishlistItem;

        // console.log("uer info is ", user);

        if (wishlistItem) {

            return res.status(200).json({

                status:true,

                message:"this item is alredy exists in wishlist "

            })

        }

        else {

            user.wishlist.push({

                productId: req.params.productId,
                
            })

        }

         await user.save();

        const userData = await  User.findById(userId).populate("wishlist").exec();

        return res.status(200).json({

            status:true,

            data:userData.wishlist,

            message:"add to wishlist  successfully",

        })

    }


    catch (error) {

        return res.status(400).json({

            status: false,
            message: " their is somehting error while add to wishlist  product   ",

            error: error.message,

        });

    }

}

exports.getAllWishlist = async (req, res) => {


    try {

        const userId = req.query.userId;

        console.log("userid is ",userId);

        const user = await User.findById(userId).populate("wishlist").exec();


        return res.status(200).json({

            status: true,
            wishlist: user.wishlist,
            message: "get all  add to wishlist product  successfully"

        })


    }
    catch (error) {

        return res.status(500).json({

            status: false,
            message: "error while getting add to wishlist ",
            error: error.message,
        })

    }

}


