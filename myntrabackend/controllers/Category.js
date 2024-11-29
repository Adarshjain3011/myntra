const Category = require("../model/Category");
const Tags = require("../model/Tags");

exports.createCategory = async(req,res)=>{

    try{

        const {name,tagName} = req.body;

        if(name!== null && tagName!=null ){

            

                const findTag = await Tags.findOne({tagName:tagName});

                if(findTag){

                    const categoryExists = await Category.findOne({categoryName:name,Tags:findTag._id});
                    if(categoryExists){

                        return res.status(400).json({
    
                            status:false,
                            message:"category already exists  in Db ",
                        })

                    }
                    else{
    
                        const entry = await Category.create({ categoryName:name,Tags:findTag._id});

                        return res.status(200).json({
    
                            status:true,
                            data:entry,
                            message:"category entry sucessfull in Db  with respect to given tag",
                        })
                    }

                }
                else{

                    return res.status(400).json({

                        status:false,
                        message:"given tag does not exists in Db "
                    })

                }
        }
        else{

           return res.status(400).json({

                status:false,
                message:"empty category and other field "
            })
        }

    }

    catch(error){

        return res.status(200).json({

            status:true,
            message:"error in creating a Tag ",

        })
    }
}






exports.getSpecificCategory = async(req,res)=>{

    try{

        const {name,TagName} = req.body;

        if(name!== null && TagName!== null){

            const tagExists =await  Tags.findOne({tagName:TagName});

            if(tagExists){


                const exists = await  Category.findOne({categoryName:name,Tags:tagExists._id});

                if(exists){

                    return res.status(200).json({

                        status:true,
                        data:exists,
                        message:"succesfully get the category  "
        
                    })

                }
                else{

                    return res.status(400).json({

                        status:false,
                        message:"category does not exists in DatabasE  "
                    })

                }

            }
            else{

                return res.status(400).json({

                    status:false,
                    message:"this tag does not exists in DB  "

                })
            }


        }
        else{

           return res.status(400).json({

                status:false,
                message:"tag and category field may be empty  "
            })
        }

    }
    catch(error){

        return res.status(200).json({

            status:false,
            message:"error  while getting category  with respect to given tag  ",
        })

    }
}




exports.getAllSpecificTagCategory = async(req,res)=>{

    try{

        const {TagName} = req.query;

        console.log("category ke congtroller ke andar ",TagName);

        if(TagName!== null){


            const tagExists = await  Tags.findOne({tagName:TagName});

            if(tagExists){


                const exists = await  Category.find({Tags:tagExists._id});

                console.log("exists ",exists);

                if(exists){

                    return res.status(200).json({

                        status:true,
                        data:exists,
                        message:"succesfully get all the category of specific tag "
        
                    })

                }
                else{

                    return res.status(400).json({

                        status:false,
                        message:"category does not exists in DatabasE  "
                    })

                }

            }
            else{

                return res.status(400).json({

                    status:false,
                    message:"this tag does not exists in DB  "

                })
            }


        }
        else{

           return res.status(400).json({

                status:false,
                message:"tag and category field may be empty  "
            })
        }

    }
    catch(error){

        return res.status(200).json({

            status:false,
            message:"error  while getting category  with respect to given tag  ",
        })

    }
}







exports.getAllCategory = async(req,res)=>{

    try{


        const exists = await Category.find({});

        if(exists){

            return res.status(200).json({

                status:true,
                data:exists,

                message:"all category "
        
            })

        }

        else{

            return res.status(400).json({

                status:false,
                message:"category does not exists in DatabasE  "


             })

        }

    }

    catch(error){

        return res.status(200).json({

            status:false,
            message:"error  while getting all the category   ",
        })

    }
}



