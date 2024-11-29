import React from 'react'
import { BiMessageDetail } from "react-icons/bi";

import person from "../components/images/person.png";

import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

import { FaGoogle } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import firstgif from "../components/images/first-unscreen.gif";



const FooterSection = () => {

    function changeHandler(event) {

        console.log("heloow ");

    }

    return (

        <div className='mt-[10rem] mb-[5rem]'>

            <div className=' m-auto relative shadow-2xl rounded-md flex '>

                {/* we have two div upper div lower div  */}

                <div className='w-[85%] bg-[#4169E1]  m-auto flex p-5 text-white rounded-lg absolute top-[-52%] z-10 left-[2.5%]'>

                    <div className='w-[500px] h-[300px] bg-transparent'>

                        <img src={firstgif} className='h-full w-full bg-cover' />

                    </div>

                    <div className='flex flex-col gap-4 w-[40%]'>

                        <h1 className='font-semibold text-xl'>Subscribe to our newsletter to get update to  our latest collections  </h1>
                        <p className='capitalize text-gray-400'>get 20% off to our first order just by subscribing to our news letter </p>

                        <div className='relative '>


                            <input type="text" placeholder='Enter your Email' onChange={changeHandler} className='w-[383px] rounded-full p-3 text-black pl-8' />

                            <button className='border p-2 rounded-full bg-white text-black font-semibold absolute right-[17%] top-1'>Subscribe</button>
                            <BiMessageDetail className='absolute top-4 bg-black left-3' />

                        </div>

                        <p>You will be able to unsubscribe any time </p>

                    </div>

                </div>



                <div className='bg-white flex flex-col relative w-11/12 '>

                    <div className='w-[95%] flex m-auto  h-[400px] items-end  justify-between pb-14 '>

                        {/* we have total 5 section   */}

                        {/* first section  */}

                        <div className='flex flex-col w-[30%] gap-5'>


                            <div>

                                <img src="" alt="" />
                                <p className='font-extrabold text-xl'>Stay Clean </p>

                            </div>

                            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor cduihd djh pikachu</p>

                            {/* icons div  */}

                            <div className='flex gap-4'>


                                {/* for icons only  */}

                                <FaFacebook></FaFacebook>
                                <FaTwitterSquare></FaTwitterSquare>
                                <FaInstagram></FaInstagram>
                                <FaLinkedin></FaLinkedin>
                                <FaGoogle></FaGoogle>

                            </div>

                        </div>

                        {/* second section  */}

                        <div className='flex flex-col gap-4'>

                            <h1 className='font-bold text-xl'>Company</h1>
                            <p className='font-semibold'>About us </p>
                            <p className='font-semibold'>Services</p>
                            <p className='font-semibold'>Community</p>


                        </div>

                        {/* third section  */}

                        <div className='flex flex-col gap-4'>

                            <h1 className='font-bold text-xl'>Support </h1>

                            <p className='font-semibold'>Help Center </p>
                            <p className='font-semibold'>Tweet @ us</p>
                            <p className='font-semibold'>Webians</p>


                        </div>

                        {/* fourth section  */}
                        <div className='flex flex-col gap-4'>

                            <h1 className='font-bold text-xl'>Links</h1>
                            <p className='font-semibold'>Help Center </p>
                            <p className='font-semibold'>Tweet @ us</p>
                            <p className='font-semibold'>Webians</p>


                        </div>

                        {/* fifth section  */}

                        <div className='flex flex-col gap-4'>

                            <h1 className='font-bold text-xl capitalize '>contact us </h1>

                            <div className='flex items-baseline gap-2 '>

                                <FaPhone></FaPhone>

                                {/* phone no  */}
                                <p className='font-semibold'>(91) 9302292692 </p>


                            </div>
                            <div className='flex justify-center items-center gap-3'>

                                <MdEmail></MdEmail>

                                <p className='font-semibold'>adarsh@gmail.com</p>

                                {/* gamil */}


                                {/* <p>upper</p> */}

                            </div>

                            <div>hellow </div>

                        </div>
                    </div>

                    <div className=' flex p-4 justify-evenly w-full border-t-4'>

                        <div className=''>

                           <p className='font-semibold'> @ Copyright by CodeUI ,All Rights Reversed </p>

                        </div>

                        <div className='flex gap-5 font-semibold'>

                            <p>Privacy Policy </p>
                            <p>Terms of Use </p>
                            <p>Legal </p>
                            <p>Sitemap</p>

                        </div>

                    </div>
                </div>

                {/* </div> */}

            </div>
        </div>

    )
}

export default FooterSection