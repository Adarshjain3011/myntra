
const RatingAndReviews = require("../model/RatingAndReviews");

const User = require("../model/UserSchema");

const Product = require("../model/Schema");

exports.createRate_and_Review = async(req,res)=>{

    try{

        // get the data 

        const {userId,productId,rating,review} = req.body;

        // validate the data 

        if(!userId || !productId || !rating || !review){


            return res.status(400).json({

                success:false,
                message:"all fields are not fullfilled  ",
    
              
    
    
            })
        }

        const userExists = await User.findById(userId);

        if(!userExists){

            return res.status(400).json({

                success:false,
                message:"this userid is not exists  ",

            })
        }

        // check user is already give the rating if yes then return othewise create rating 

        const alreadyRated = await RatingAndReviews.findOne({

            user:userId,
            product:productId,

        })

        if(alreadyRated){

            return res.status(403).json({

                success:true,
                message:"user already reviewed the product "

            })
        }

        // if no 

        const productDetails = await Product.findById(productId);

        if(!productDetails){

            return res.status(400).json({

                success:false,
                message:"this productid is not exists  ",

            })

        }

        // create rate and reviews 

        const Rate_and_Review = await RatingAndReviews.create({

            user:userId,
            product:productId,

            rating:rating,

            review:review,

        })

        if(!Rate_and_Review){

            return res.status(400).json({

                success:false,
                message:"Rate and review is not exists ",

            })

        }

        // add rate and reviews to the Product 

        const addRate_and_review = await Product.findOneAndUpdate({_id:productId},{

            $push:{

                ratingAndReviews:Rate_and_Review._id,

            }
        },{new:true});


        return res.status(200).json({

            success:true,
            message:"rate and review created and addedd to the product succssfully ",

            addRate_and_review

        })




    }

    catch(error){

        console.log(error);

        return res.status(400).json({

            success:false,
            message:"their is somthing error while creating rate and reviews ",

            error:error.message,


        })
    }
}






exports.getAverageRating = async (req, res) => {
    try {
            //get course ID
            const {productId} = req.body;
            //calculate avg rating

            const result = await RatingAndReviews.aggregate([
                {
                    $match:{
                        product: new mongoose.Types.ObjectId(productId),
                    },
                },
                {
                    $group:{
                        _id:null,
                        averageRating: { $avg: "$rating"},
                    }
                }
            ])

            //return rating
            if(result.length > 0) {

                return res.status(200).json({
                    success:true,
                    averageRating: result[0].averageRating,
                })

            }
            
            //if no rating/Review exist
            return res.status(200).json({
                success:true,
                message:'Average Rating is 0, no ratings given till now',
                averageRating:0,
            })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}



// get all rating to the specific product 

exports.getAllProductRating = async(req,res)=>{


    try{

        const {productId} = req.body;

        if(!productId){

            return res.status(400).json({

                success:false,
                message:"this prodctid is not exists  ",

            })

        }

        const productDetails = await RatingAndReviews.find({product:productId}).sort({rating:"desc"}).populate("user").exec();

        return res.status(200).json({

            success:true,
            message:"get All Product Rating successfully ",

            productDetails
        })
    }
    catch(error){

        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
        
    }
}