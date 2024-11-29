const User = require('../model/UserSchema');
require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.Auth = async (req, res, next) => {
    try {

        console.log("heloww1 ");
        const token = req.cookies.token
            || req.body.token
            || req.header("Authorisation").replace("Bearer ", "");

            console.log("auth middleware ke andar ");
        if (!token) {

           return res.status(400).json(
                {
                    status: false,
                    message: "Token is not Found",
                }
            );
        }

        // verify the token
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        if (!decode) {

            return res.status(400).json(
                {
                    status: false,
                    message: "Token is not valid",
                }
            );
        }

        console.log("token descoded successfully ");
        console.log("Decoded Token : ", decode);
        req.user = decode;
        next();// 

    } catch (err) {
        
        return res.status(500).json(
            {
                status: false,
                message: "Token Verfication Failed",
                error: err,
            }
   );
    }
}


