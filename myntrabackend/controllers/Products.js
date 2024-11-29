const Product = require("../model/Schema");
const Tags = require("../model/Tags");
const { exists } = require("../model/UserSchema");
const Category = require("../model/Category");
// const Tgas = require("../model/Tags");

const cloudinary = require("cloudinary").v2;

function isFileTypeSupprted(fileType, supportedTypes) {

    return supportedTypes.includes(fileType);

}


async function uploadFileToCloudinary(file, folder) {

    const { options } = { folder };

    console.log("options", options);

    console.log("temp file path ", file.tempFilePath);

    return await cloudinary.uploader.upload(file.tempFilePath, options);

}



exports.createProducts = async (req, res) => {


    try {

        // const file = req.files.imageFile;
        const files = req.files['imageFile[]'];

        console.log("type of the file ");
        console.log(typeof files);
        console.log(" all th files at the backend ",files);
        console.log("cerate product controler ke andar ");
        const { name, price, description, category, tags } = req.body;
        
        console.log(name, price, description, category, tags)

        if (name && price && description && category && tags ) {

            console.log("1");

            console.log("file ki length 1 hai ",files.length);
            const supportedTypes = ["jpg", "jpeg", "png"];

            const imageUrl = [];

            if(files.length == 1){

                console.log("file ki length 1 hai ",files.length);
                console.log("each file at the backens side ",files[0])
                const fileType = files[0].name.split(".")[1].toLowerCase();

                if (isFileTypeSupprted(fileType, supportedTypes)) {
                    
                    console.log("3");
                    const response = await uploadFileToCloudinary(files[0], "Adarsh-ch");
                    
                    imageUrl.push(response.secure_url);

                    console.log("cloudinary upload successfull ",response);
                }

            }

            else{


                console.log(typeof files);

                for (const file of files) {     
                    
                    console.log("2");
                    console.log("each file at the backens side ",file)
                    const fileType = file.name.split(".")[1].toLowerCase();
    
                    if (isFileTypeSupprted(fileType, supportedTypes)) {
                        
                        console.log("3");
                        const response = await uploadFileToCloudinary(file, "Adarsh-ch");
                        
                        imageUrl.push(response.secure_url);
                        console.log("cloudinary upload successfull ",response);
                    }
                }

            }

                
            console.log("4");

            const tagExists = await Tags.findOne({ tagName: tags });
                        
            if(tagExists){
                            

                console.log("5");

                const categoryExists = await Category.findOne({ Tags: tagExists._id, categoryName: category });
    
                if(categoryExists){

                     console.log("6");

                    const cr = await Product.create({ name: name, Price: price, Description: description, Category: categoryExists._id, Tags: tagExists._id,Images:imageUrl });

                    console.log(" data base enrty of product details in cloud as well as in DB   ",cr );

                    if(cr){
                        
                        return res.status(200).json({
    
                            status: true,
                            data:cr,
                             message: "data base enrty of product details in cloud as well as in DB  ",
                    
                        })

                    }

                    else{

                        return res.status(400).json({
    
                            status: false,
                             message: "data base enrty of product details in DB not done  ",
                    
                        })
                    }
                }
                            
                else{
    
                    return res.status(400).json({
    
                        status: false,
                         message: "given category does not exists in DB  ",
                
                    })
    
                }

            }
             else{
    
                return res.status(400).json({
    
                status: false,
    
                message: "gievn tag for product does not exists  "
                            
                })
    
            }
    
                        
        }
        else{

            return res.status(400).json({
    
                status: false,
    
                message: " plz fill all the details for the product  "
                            
             })
        }
    

    }
    catch (error) {

        return res.status(400).json({

            status: false,

            message: "their is something error while uploading file to cloudinary  as welll  ",
            error: error.message,

        })
    }
}



exports.getAllProdct = async (req, res) => {

    try {

        const productExists = await Product.find({});

        if (productExists) {

            return res.status(200).json({

                status: true,
                data: productExists,
                message: " All product In DB "

            })

        }
        else {

            return res.status(400).json({

                status: false,
                message: " no prduct exists in DB  "

            })

        }
    }
    catch (error) {

        return res.status(400).json({

            status: false,

            message: " error facing while getting an all the products ",

        })
    }
}


exports.getProdctByID = async (req, res) => {


    try {

        const id = req.params.id;
        if (id) {

            const idProduct = await Product.findById(id);

            if (idProduct) {


                return res.status(200).json({

                    status: true,
                    data: idProduct,
                    message: " given product id successfully find in DB  "

                })

            }
            else {

                return res.status(400).json({

                    status: false,
                    message: " given product id does not exists  in DB  "

                })
            }

        }

        else {

            return res.status(400).json({

                status: false,
                message: " product id value is empty   "

            })

        }

    }
    catch (error) {

        return res.status(400).json({

            status: false,
            message: " their is something error while finding a product "

        })


    }

}

exports.getAllRelatedProduct = async (req, res) => {

    try {

        const id = req.params.id;
        console.log(id);

        console.log(1);
        if (id) {

            const idProduct = await Product.findById(id);

            if (idProduct) {



                const tag = idProduct.Tags._id;
                const category = idProduct.Category._id;

                const Tag_category = await Product.find({ Category: category, Tags: tag });

                if (Tag_category) {

                    return res.status(200).json({

                        status: true,
                        data: Tag_category,
                        message: " we successfully find all related category  "

                    })


                }
                else {

                    return res.status(400).json({

                        status: false,
                        message: " we do not find  related category of product "

                    })
                }

            }
            else {

                return res.status(400).json({

                    status: false,
                    message: " given product id does not exists  in DB  "

                })
            }

        }

        else {

            return res.status(400).json({

                status: false,
                message: " product id value is empty   "

            })

        }

    }
    catch (error) {

        return res.status(400).json({

            status: false,
            message: " their is something error while finding a Related product in DB "

        })


    }
}


















// try {


//     if (name && price && description && category && tags && file) {

//         const tagExists = await Tags.findOne({ tagName: tags });

//         console.log(1);
//         // console.log(tagExists);
//         if (tagExists) {

//             console.log(2);

//             const categoryExists = await Category.findOne({ Tags: tagExists._id, categoryName: category });

//             console.log(categoryExists);
//             if (categoryExists) {

//                 console.log(3);
//                 const cr = await Product.create({ name: name, Price: price, Description: description, Category: categoryExists._id, Tags: tagExists._id, Images: file })

//                 const supportedTypes = ["jpg", "jpeg", "png"];

//                 const fileType = file.name.split(".")[1].toLowerCase();


//             }
//             else {


//                 return res.status(400).json({

//                     status: false,
//                     message: "gievn category does not exists in DB ",

//                 })
//             }

//         }
//         else {


//             return res.status(400).json({

//                 status: false,
//                 message: "gievn tags for product  does not exists in DB "

//             })
//         }

//     }
//     else {

//         return res.status(400).json({

//             status: false,
//             message: "product details is empty "

//         })
//     }
// }
// catch (error) {

//     return res.status(400).json({

//         status: false,
//         message: "their is something erro while creating a product ",
//         error: error.message,

//     })
// }