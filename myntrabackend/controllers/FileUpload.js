const File = require("../model/File");

const cloudinary = require("cloudinary").v2;
exports.localFileUpload = async(req,res)=>{

    try{

        // to access the files which is sent by client we have use re.file.file

        const file = req.files.file;

        
        console.log("this is file ",file);

    
        // let str = file.split(".");
        // aap ish file apne server pe kish path pe store karane chchte ho 

         // ____dirname => yah tumhari current directory ko show karta hai 

        //  console.log(file.name.split('.')[1]);
         let path = __dirname + "/files/" + Date.now() +`.${file.name.split('.')[1]}`;


         console.log("path is ",path);
         // file ko server pe ish path pe bhej do 

         file.mv(path , (error)=>{

            console.log(error);

         })

         return res.status(200).json({

            status:true,
            message:"local fileupload successfullly",
        
         })

    }
    catch(error){

        return res.status(400).json({

            status:false,
            message:"their is something error to upload files ",
            error:error.message,
         })

    }
}



function isFileTypeSupprted(fileType,supportedTypes){

    return supportedTypes.includes(fileType);

}


async function uploadFileToCloudinary(file,folder){

    const { options } = {folder};
    console.log("options",options);
    console.log("temp file path ",file.tempFilePath);
    return await cloudinary.uploader.upload(file.tempFilePath,options);

}   



exports.imageUpload = async(req,res)=>{

    try{

        const file = req.files.imageFile;

        const {name,tags,email} = req.body;
        console.log(name,tags,email);
        console.log("file ",file);

        console.log("1");
        const supportedTypes = ["jpg","jpeg","png"];
        const fileType = file.name.split(".")[1].toLowerCase();

        if(isFileTypeSupprted(fileType,supportedTypes)){

            console.log("2");
           const response = await uploadFileToCloudinary(file,"Adarsh-ch");

           if(response){

                console.log("3");

                const fileData = await File.create({

                    name:name,
                    tags:tags,
                    email:email,
                    imageUrl:response.secure_url,

                }) 

                console.log("file data ",fileData);
                return res.status(200).json({

                    status:true,
                    data:response,
                    message:"image is successfully uploaded to cloudinary as well in DB    ",
               
                })
           }

           else{

                return res.status(200).json({

                    status:false,
                    message:"image is not  uploaded to cloudinary  ",
           
                })

           }
        }
        else{

            return res.status(400).json({

                status:false,
                message:"given filetype is not supported ",
               
             })
        }
        

    }
    catch(error){

        return res.status(400).json({

            status:false,

            message:"their is something error while uploading file to cloudinary  ",
            error:error.message,

            

         })

         console.log(error);
    }
}



async function uploadVideoFileToCloudinary(file,folder){

    const { options } = {folder};
    console.log("options",options);
    console.log("temp file path ",file.tempFilePath);
    return await cloudinary.uploader.upload(file.tempFilePath,options);

}   



exports.videoUpload = async(req,res)=>{

    try{

        const file = req.files.videoFile;

        const {name,tags,email} = req.body;
        console.log(name,tags,email);
        console.log("file ",file);

        console.log("1");
        const supportedTypes = ["mp4","wkb"];
        const fileType = file.name.split(".")[1].toLowerCase();

        if(isFileTypeSupprted(fileType,supportedTypes)){

            console.log("2");
           const response = await uploadVideoFileToCloudinary(file,"Adarsh-ch");

           if(response){

                console.log("3");

                const fileData = await File.create({

                    name:name,
                    tags:tags,
                    email:email,
                    imageUrl:response.secure_url,

                }) 

                console.log("file data ",fileData);
                return res.status(200).json({

                    status:true,
                    data:response,
                    message:"image is successfully uploaded to cloudinary as well in DB    ",
               
                })
           }

           else{

                return res.status(200).json({

                    status:false,
                    message:"image is not  uploaded to cloudinary  ",
           
                })

           }
        }
        else{

            return res.status(400).json({

                status:false,
                message:"given filetype is not supported ",
               
             })
        }
        

    }
    catch(error){

        return res.status(400).json({

            status:false,

            message:"their is something error whileuploading file to cloudinary  ",
            error:error.message,

         })
    }
}



