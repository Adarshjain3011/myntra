
const User = require("../model/UserSchema");

const Product = require("../model/Schema");

const {instance} = require("../config/Razorpay");

const { mailSender } = require("../utils/MailSender")

exports.capturePayment = async(req,res)=>{

    try{

        const {userId,productId} = req.body ;

        if(!userId || !productId){

            return res.status(400).json({

                success:false,
                message:"all fields are not fullfilled "

            })
        }

        

        // create an product exists or not 
        
        const productDetails = await Product.findById(productId);

        if(!productDetails){

            return res.status(400).json({

                success:false,

                message:"this product id is not exists  "

            })

            
        }

        const userExists = await User.findById(userId);

        if(!userExists){

            return res.status(400).json({

                success:false,

                message:"this user id is does not exists  "

            })

        }

        const amount = productDetails.Price;

        const currency = "INR";


        const options = {

            amount:amount*100,

            currency:currency,

            receipt:Math.random(Date.now()).toString(),

            notes:{
            
                userId,
                productId,
            }

        }

        const paymentResponse = await instance.orders.create(options);

        // initiate the payment 

        console.log(paymentResponse);

        return res.status(200).json({

            success:true,
            message:"order created successfully ",
           productPrice:productDetails.Price,
           productName:productDetails.name,
           productImage:productDetails.Images,
           orderId:paymentResponse.id,
           currency:paymentResponse.currency,
           amount:paymentResponse.amount,

        })


    }
    catch(error){

        console.log(error);

        return res.status(400).json({

            success:false,
            message:"their is somehting error while creating an order ",

            error:error.message,

        })
    }
}




// verify the Signature 

exports.verifySignature = async(req,res)=>{

    try{

        const webHookSecret = "12345678";

        const signature = req.headers["x-razorpay-signature"]; // this secret we get from Razorpay webhook secret 

        const shasum = crypto.createHmac("sha256",webHookSecret);

        shasum.update(JSON.stringify(req.body));

        const digest = shasum.digest("hex");
 
        if(signature === digest){

            console.log("payment is authorised ");

            const {userId,productId} = req.body.payload.payment.entity.notes;

            // const uuid = new mongoose
            const userPurchase = await User.findOneAndUpdate(
                
                {_id:userId},
                { $push:{

                    purchaseProduct:productId

                }},
                {new:true}
                
            )


            if(!userPurchase){

                return res.status(400).json({

                    success:false,
                    message:"this user id not found  ",
    
        
                })

            }


           // TODO : send mail to the user after purchasing the Product  

            const emailResponse = await mailSender(userPurchase.email,"Congratulations","product purchased successfully ");

            return res.status(200).json({

                success:true,
                message:"product puchased successfully ",
                userPurchase,

            })

        }

    }
    catch(error){


        console.log(error);

        return res.status(400).json({

            success:false,
            message:"their is somehting error while verify signature  ",

            error:error.message,

        })
    }
}



