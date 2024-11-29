import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LogIn from './LogIn';

import { MdEmail } from "react-icons/md";

import { FaUserNurse } from "react-icons/fa";

// import querystring
const SignUp = () => {

    // const axios = require('axios');
    // const querystring = require('querystring');

    const [formData, setFormData] = useState({


        name: "",
        email: "",
        createPassword: "",
        setPassword: "",
        gender: "",
        phoneNo: "",

    })

    const navigate = useNavigate();

    //     //{

    //     "name":"Adarsh jain",
    //     "email":"adarshjain3011@gmail.com",
    //     "createPassword":"1234",
    //     "setPassword":"1234",
    //     "gender":"male",
    //     "phoneNo":"1000"
    // }

    function changeHandler(event) {

        // console.log(event.target.value);

        console.log(event.target.value);
        let value = event.target.value;

        let name = event.target.name

        // console.log(event.target.name);

        setFormData(

            {

                ...formData,

                [name]: value

            }

        );

    }


    async function submitHandler(event) {

        event.preventDefault();

        console.log("hellow ");

        //  use to chack all the required field are filled or not 

        if (!formData.name || !formData.email || !formData.gender ||

            !formData.phoneNo || !formData.createPassword || !formData.setPassword
        ) {

            console.log("3");

            console.log("form data 3", formData);
            toast.error("please fill all the required field ");



        }
        else {

            console.log("2");

            if (formData.setPassword !== formData.createPassword) {

                toast.error("password dosent match ");

            }

            else {

                console.log("form data ", formData);

                await axios.post("http://localhost:3000/api/v1/auth/signup", formData).then((data) => {

                    console.log(data);

                    toast.success("sign up successfully ");

                    navigate("/login");

                }).catch((error) => {

                    console.log("error", error);


                })


            }


        }


    }


    return (

        <div className=' h-[100vh] w-[100vw]'>


            <div className='flex'>

                {/* left side   */}
                <div className='w-[65%] h-[68%] '>

                    <img src="https://img.freepik.com/premium-vector/content-smm-manager-strategy-processes-concept-flat-vector-illustration_106788-2859.jpg" alt="" className='mix-blend-multiply w-full h-full bg-cover' />

                </div>


                {/*Right Side   */}

                <div className='flex flex-col gap-4 mt-[4rem] p-6 shadow-2xl rounded-md'>

                    <h1 className='text-3xl font-bold'>User SignUp</h1>

                    <form onSubmit={submitHandler} className='flex flex-col gap-3'>

                        <div className='relative '>

                            <FaUserNurse className='w-[30px] h-[30px] absolute top-4' />
                            <input type="text" name='name' placeholder='Enter your Name' onChange={changeHandler} className='text-xl rounded-lg p-3 w-[400px] pl-8'/>

                        </div>
                        
                        <div className='flex relative '>

                            <MdEmail className='w-[30px] h-[30px] absolute top-4'></MdEmail>

                            <input type="email" name='email' onChange={changeHandler} placeholder='Enter your Email' className='text-xl rounded-lg p-3 w-[400px] pl-8'/>

                        </div>


                        Gender:
                        <select name='gender' onChange={changeHandler} placeholder="Enter your Gender " className='text-xl rounded-lg p-3 w-[400px] '>

                            <option value="Male">Male</option>

                            <option value="Female">Female</option>

                            <option value="Others">Others</option>


                        </select>

                        <input type="text" name='phoneNo' placeholder='Enter your PhoneNumber' onChange={changeHandler} className='text-xl rounded-lg p-3 w-[400px] pl-8'/>

                        <input type='password' name='createPassword' placeholder='confirm password ' onChange={changeHandler} className='text-xl rounded-lg p-3 w-[400px] pl-8'></input>

                        <input type="password" name='setPassword' placeholder='Enter your Password ' onChange={changeHandler} className='text-xl rounded-lg p-3 w-[400px] pl-8'/>


                        <button type='submit' className='border inline-block text-white font-bold  p-3 text-2xl font-serif rounded-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  '>Submit form </button>

                        <button onClick={() => { navigate("/login") }} className=" border text-white font-bold  p-3 text-2xl font-serif rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">Go to Login </button>

                    </form>
                             
         {/* .btn-grad {
            background-image: linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            // color: #fff;
            // text-decoration: none;
          }
         

                </div>

            </div>


        </div>

    )
}

export default SignUp



