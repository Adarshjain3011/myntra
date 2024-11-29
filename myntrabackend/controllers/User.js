
const bcrypt = require("bcrypt");

const User = require("../model/UserSchema");

const jwt = require('jsonwebtoken');

const Otp = require("../model/Otp");

const nodemailer = require("nodemailer");

const UserVerification = require("../model/UserVerification");

const uuid = require("uuid").v4;



const sendVerificationEmail = async ({ _id, email },res) => {


    console.log("0+1");
    
    try{

        const currentUrl = "http://localhost:5000/";
    
        const uniqueString = uuid() + _id;
        
        let transporter = await nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
        
        const mailOptions = {
    
            form: `${process.env.MAIL_USER}`,
            to: `${email}`,
            subject: "good day  ",
            html: `<p> hlo verify your email address complete <b>this link is Expires in 6 hours </b> </p> 
                
                <p> <a href=${currentUrl + "user/verify/ " + _id + "/" + uniqueString}>here </a> to proceed </p>`
    
        };
    
        console.log(2);

        const hashString = await bcrypt.hash(uniqueString, 20);

        console.log(hashString);
        if(hashString){

            console.log("hashstring",hashString);
            console.log("2.1");
            const newVerification = await Otp.create({
    
                UserId: _id,
                uniqueString: hashString,
                createdAt: Date.now(),
                ExpitresIn: Date.now() + 21600000,
    
    
            })

            console.log(2.2);
            console.log("new verfication ",newVerification);

            if(newVerification){
                
                console.log("2.3");
                const just_mail = await transporter.sendMail(mailOptions);
    
                if(just_mail){
                    
                    console.log("2.4");
                    // return  res.status(200).json({
        
                    //     status: true,
                    //     data: mailOptions,
                    //     message: " mail is succesfully sent  ",
        
                    // })

                    return true;


    
                }
                else{
    
                    // return res.status(400).json({
        
                    //     status: false,
                    //     message: " just mail object is empty  ",
        
                    // })

                    return false;
    
                }
            }
            else{

                return res.status(400).json({
        
                    status: false,
                    message: " their is something error in verification    ",
    
                })

            }

        }
        else{

            return res.status(400).json({
        
                status: false,
                message: " String is not properly hashed   ",

            })

        }

    }
    
    catch(error){

        return res.status(400).json({

            status:false,
            message:"their is something error comes in  send verification email ",
            error:error.message,
        })
    }

}




exports.SignUp = async (req, res) => {


    try {



        const { name, email, createPassword, setPassword, gender, phoneNo } = req.body;
        console.log(name, email, createPassword, setPassword, gender, phoneNo);

        if (!name || !email || !createPassword || !setPassword || !gender || !phoneNo) {

            console.log("1 ");

            console.log(name, email, createPassword, setPassword, gender, phoneNo);
            
            return res.status(400).json({

                status: false,
                message: "please fill all the filed  ",

            })

        }
        else {

            console.log(2)

            if (createPassword === setPassword) {
                console.log(3)

                const exists = await User.findOne({ email: email });

                if (exists === null) {
                    console.log(4)

                    let hashedPassword = await bcrypt.hash(createPassword, 12);
                    console.log('hashed')

                    // const data = await User.create(name,email,createPassword,gender,phoneNo);
                    console.log('create');

                    const data = await User.create(
                        {
                            name: name,
                            email: email,
                            password: hashedPassword,
                            gender: gender,
                            phoneNo: phoneNo,
                            verified: false,
                            image: `https://api.dicebear.com/6.x/initials/svg?seed=${name} &backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600`
                        }
                    )

                    console.log("0");

                    if( await sendVerificationEmail(data, res)){

                        
                        if (data !== null) {
    
                            console.log(5)
    
                            return res.status(200).json({
    
                                status: true,
    
                                message: "this email is sucessfully sent and user entry successfully created in Database  ",
    
                            })
                        }
                        else {
                            console.log(6)
                            return res.status(400).json({
    
                                status: false,
    
                                message: "user entry not create ",
    
                            })
                        }
                    }

                    else{

                        return res.status(400).json({

                            status: false,
                            message: "this email is not  sent    ",
    
                        })
                    
                    }

                }
                else {
                    console.log(7)
                    return res.status(400).json({

                        status: false,
                        message: "this email is already exists in Database  ",

                    })
                }
            }
        }
    }
    catch (error) {

        return res.status(500).json({

            status: false,
            message: "sign up falied ",
            error: error.message

        })
    }

}




exports.LogIn = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {

            return res.status(400).json({

                status: false,
                message: "please fill all the filed of login form   ",

            })

        }
        else {

            const exists = await User.findOne({ email: email });

            if (exists != null) {

                const UserPassword = JSON.stringify(exists.password);

                if (bcrypt.compare(password, UserPassword)) {


                    const payload = {

                        id: exists.id,
                        email: exists.email,
                        password: exists.password,

                    }
                    const token = jwt.sign(payload, process.env.JWT_SECRET, {

                        expiresIn: "2h"

                    })

                    exists.token = token;
                    
                    const options = {

                        expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
                        httpOnly: true,

                    }

                    return res.cookie("token", token, options).status(200).json({

                        status: true,
                        message: " cookie added successfully  ",
                        data: exists,
                        token: token,

                    })

                }

                else {

                    return res.status(400).json({

                        status: false,
                        message: "password dosent match during login ",

                    })

                }

            }
            else {

                return res.status(400).json({

                    status: false,
                    message: "this email is not  exists in Database  ",

                })
            }

        }
    }
    catch (error) {

        return res.status(500).json({

            status: false,
            message: "login up falied "

        })
    }

}




// exports.AddToCart = async(req,res)=>{

//     const {product_id} = req.body;

//     if(product_id){

//         const data = await User.create({cart :product_id});

//         if(data){

//             return res.status(200).json({

//                 status:true,
//                 data:data,
//                 message:"product add to cart  successfully"

//             })
//         }
//     }
// }

// exports.getAllAdd_To_Cart = async(req,res)=>{


//     try{


//         const cart_data = await User.find();
    
    
//         if(cart_data){
    
//             return res.status(200).json({
    
//                 status:true,
//                 data:cart_data,
//                 message:"get all  add to cart product  successfully"
    
//             })
//         }
    
//         else{
    
//             return res.status(500).json({
    
//                 status:false,
//                 message:"we do not found any found any cart data  ",
//                 error:error.message,
//             })
//         }

//     }
//     catch(error){

//         return res.status(500).json({
    
//             status:false,
//             message:"error while getting add to cart ",
//             error:error.message,
//         })

//     }
    
// }


