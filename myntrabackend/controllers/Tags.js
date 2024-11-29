const Tags = require("../model/Tags");

exports.createTags = async(req,res)=>{

    try{

        const {name} = req.body;
        if(name!== null){

            const exists = await Tags.findOne({tagName:name});
            if(exists){
                
             
                return res.status(400).json({

                    status:false,
                    message:"tag already exists ",

                })

            }
            else{
                
                const entry = await Tags.create({tagName:name});

                if(entry){

                    return res.status(200).json({

                        status:true,
                        data:entry,
                        message:"tag entry sucessfull in Db  ",
                    })

                }
                else{

                    return res.status(400).json({

                        status:false,
                        message:"tag entry not  in Db  ",
                    })
                }
            }
        }
        else{

           return res.status(400).json({

                status:true,
                message:"empty tag "
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



exports.getTags = async(req,res)=>{

    try{

        const {name} = req.body;

        if(name!== null){

            const exists = await Tags.findOne({tagName:name});

            return res.status(200).json({

                status:true,
                data:exists,
                message:"succesfully get tag "

            })
        }
        else{

           return res.status(400).json({

                status:false,
                message:"tag is not in db "
            })
        }

    }
    catch(error){

        return res.status(200).json({

            status:true,
            message:"error in while getting a tag ",
        })

    }
}




exports.getAllTags = async(req,res)=>{

    try{

        const exists = await Tags.find({});

        if(exists){


             return res.status(200).json({
    
                status:true,
                data:exists,
                message:"succesfully get all the  tag "


            })

        }

        else{

           return res.status(400).json({

                status:false,

                message:"in db no tags are present "
            })
        }

    }

    catch(error){

        return res.status(400).json({

            status:false,
            message:error.message,
        })

    }
}