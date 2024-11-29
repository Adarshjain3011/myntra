import React from 'react'

import { AppContext } from '../context/AppContext'

import { useContext } from 'react'

import { CiCamera } from "react-icons/ci";

const UserDetails = () => {

    const { userInfo, setUserInfo } = useContext(AppContext);

    console.log("data si s", userInfo);

    return (

        <div className='h-[100vh] w-[100vw] mt-[5rem]'>


            <div className='w-[60%] h-[770px] m-auto relative border mb-[6rem]'>

                <div className=' bg-gradient-to-r from-purple-500 to-pink-500 w-full h-[300px] flex justify-center items-center flex-col'>


                    <div className='w-[150px] h-[150px] rounded-full'>

                        <img src={userInfo.image} alt="" className='w-full h-full bg-cover rounded-full' />

                    </div>

                    <CiCamera className='w-[30px] h-[30px] translate-y-[-1rem] bg-white rounded-full p-1'></CiCamera>

                    <h1 className='text-3xl font-semibold text-white'>{userInfo.name}</h1>

                </div>

                <div className='flex'>

                    {/* left div   */}

                    <div className='flex flex-col gap-4 p-7 border border-r-neutral-300 '>

                        <p>Profile Info </p>

                        <p>My Orders</p>
                        <p>Security </p>
                        <p>Address And Details </p>
                        <p>Payment Details </p>

                        <p>Help & FAQ</p>

                    </div>

                    {/* right div  */}

                    <div className='flex flex-col gap-4 p-7  h-[450px] '>

                        <div className='flex flex-col gap-2'>

                            <h1 className='font-semibold '>Full Name </h1>

                            <input type='text' value={userInfo.name} className='border p-4 w-[600px] rounded-md'></input>

                        </div>

                        <div className='flex flex-col gap-2'>

                            <h1 className='font-semibold '>Email Address: </h1>

                            <input type='text' value={userInfo.email} className='border p-4 w-[600px] rounded-md'></input>

                        </div>

                        <div className='flex flex-col gap-2'>

                            <h1 className='font-semibold '>Birth Date: </h1>

                            <input type='date' className='border p-4 w-[600px] rounded-md'></input>

                        </div>


                        <div className='flex flex-col gap-2'>

                            <h1 className='font-semibold '>MostLy Intersed In:  </h1>

                            <label className='flex gap-3 items-baseline'>

                                <input type='radio' name='gender' value="MensWear" className='w-[20px] h-[20px]'></input>

                               <p className='text-2xl text-zinc-400'>MensWear</p>

                            </label>

                            <label className='flex gap-3 items-baseline'>
                                
                                <input type='radio' name='gender' value="WomensWear" className='w-[20px] h-[20px]'></input>

                                <p className='text-2xl text-zinc-400'>WomenWear</p>
                                

                            </label>

                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default UserDetails


