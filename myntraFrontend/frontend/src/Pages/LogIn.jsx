import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

const LogIn = () => {

    // "email":"adarshjain3011@gmail.com",
    // "password":"1234"

    const { isLoggedIn, setIsLoggedIn,currentUserId,setCurrentUserId,allWishlist,setAllWishlist,
         allCart,setAllCart,currentUserImage,setCurrentUserImage ,userInfo,setUserInfo } =  useContext(AppContext);


    const [formData,setformData]  = useState({email:"" ,password:""});

    const navigate = useNavigate();

    async function submitHandler(e){

        e.preventDefault();

        if(!formData.email || !formData.password ){


            toast.error("please fill up all the require field ");


        }

        else{

            await axios.post("http://localhost:3000/api/v1/auth/login",formData).then((data)=>{

                console.log(data);

                toast.success("logged in Sucessfullly ");

                setIsLoggedIn(true);

                let val1 = Object.values(data.data);

                // let val2 = Object.values(val1);
                
                console.log("cart data of user in login ",val1);
                console.log("unique id of user ",val1[2]._id);

                setUserInfo(val1[2]);

                setCurrentUserId(val1[2]._id);

                console.log("cart data of user in login ",val1[2].cart);

                setAllCart(val1[2].cart);

                setAllWishlist(val1[2].wishlist);


                navigate("/");

            })
            
        }

    }

    function changeHandler(event){

        setformData({

            ...formData,
            [event.target.name]:event.target.value

        })

    }

  return (

    <div className ='mt-[6rem]'>

        <form onSubmit={submitHandler}>

            <input type="email" name='email' onChange={changeHandler} placeholder='Enter Your Email '/>
            
            <input type="password" name='password' onChange={changeHandler} placeholder='Enter Your Pssword '/>

            <button type='submit' className='border'>Submit </button>

        </form>

    </div>

  )
}

export default LogIn

