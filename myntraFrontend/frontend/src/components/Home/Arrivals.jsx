import React from 'react'
import delivery from "../images/freedelivery.png"
import returnbox from "../images/return-box (2).png"

import customer from "../images/customer.png"

const Arrivals = () => {

    return (

        <div className=' flex flex-col justify-evenly h-[1000px] w-11/12 m-auto '>

            <div className=' overflow-x-hidden flex flex-col gap-3 h-[700px]'>

                <div className='flex gap-3'>

                    <div className='bg-red-600 h-10 w-4'></div>
                    <p>featured </p>


                </div>


                {/* big div  */}

                <div className='flex gap-9 flex-col'>

                    <h1 className='text-2xl font-bold'>New Arrivals </h1>

                    {/* main div  */}

                    <div className='flex gap-5'>


                        <div className='flex flex-col h-[550px] text-white relative'>

                            <div className='h-[520px] w-[550px]'>

                                <img src="https://images.unsplash.com/photo-1619362200717-f5edb5cc0e43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVsZWN0cm9uaWMlMjBkZXZpY2V8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-full bg-cover' />


                            </div>

                            <div className='flex flex-col absolute gap-4 bottom-14 left-6'>


                                <p className='text-xl font-semibold '>PlayStation 5</p>


                                <p className='text-gray-350 capitalize'>this is a very seamless earphone you will <br></br>get great experience from it  </p>

                                <div>

                                    <a href="#" className='text-gray-450 font-bold underline border-dotted'>Shop Now </a>

                                    <div></div>

                                </div>

                            </div>

                        </div>

                        {/* small div  */}

                        {/* 1 div and 2 div  */}


                        <div className='flex flex-col gap-5'>



                            <div className='flex flex-col relative'>


                                <div className='w-[617px] h-[250px]'>

                                    <img src="https://images.unsplash.com/photo-1584845744038-9bf3c7927ed2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3Ryb25pYyUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='w-full h-full bg-cover' />

                                </div>

                                <div className='flex flex-col absolute gap-4 text-white bottom-6 left-6'>


                                    <p className='text-xl font-semibold '>PlayStation 5</p>


                                    <p className='text-gray-350 capitalize'>this is a very seamless earphone you will <br></br>get great experience from it  </p>

                                    <div>

                                        <a href="#" className='text-gray-450 font-bold'>Shop Now </a>

                                        <div></div>

                                    </div>

                                </div>


                            </div>



                            {/* two divs  */}

                            <div className='flex gap-4 text-white'>

                                <div className='flex flex-col relative '>


                                    <div className='w-[300px] h-[250px]'>

                                        <img src="https://images.unsplash.com/photo-1619362200717-f5edb5cc0e43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVsZWN0cm9uaWMlMjBkZXZpY2V8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-full' />

                                    </div>


                                    <div className='flex flex-col absolute gap-4 bottom-4 left-3'>


                                        <p className='text-xl font-semibold '>PlayStation 5</p>


                                        <p className='text-gray-350 capitalize'>this is a very seamless earphone  <br></br>get great experience.  </p>

                                        <div>

                                            <a href="#" className='text-gray-450 font-bold'>Shop Now </a>

                                            <div></div>

                                        </div>

                                    </div>

                                </div>


                                <div className='flex flex-col relative '>


                                    <div className='w-[300px] h-[250px]'>

                                        <img src="https://images.unsplash.com/photo-1601814924251-9caa27faf3f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVsZWN0cm9uaWMlMjBkZXZpY2V8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-full' />

                                    </div>


                                    <div className='flex flex-col absolute gap-4 bottom-4 left-3'>


                                        <p className='text-xl font-semibold '>PlayStation 5</p>


                                        <p className='text-gray-350 capitalize'>this is a very seamless earphone  <br></br>get great experience.  </p>

                                        <div>

                                            <a href="#" className='text-gray-450 font-bold'>Shop Now </a>

                                            <div></div>

                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* delivery customer and money gaurentee block -----> */}

            <div className='flex  justify-between w-[980px]  m-auto'>

                {/* delivery block  */}
                <div>

                    <div className='flex flex-col justify-center items-center gap-4'>

                        <div className='h-[70px] w-[70px] rounded-full animate-bounce'>

                            <img src={delivery} alt="" className='h-full w-full bg-cover' />

                        </div>

                        <div>


                            <p className='uppercase text-lg font-bold'>free and fast delivery </p>

                            <p className='text-gray-400'>free delivery without extra effort </p>

                        </div>

                    </div>

                </div>

                {/* customer  block  */}

                <div className='flex flex-col justify-center items-center gap-4'>

                    <div className='h-[70px] w-[70px] rounded-full animate-bounce'>

                        <img src={customer} alt="" className='h-full w-full bg-cover' />

                    </div>

                    <div>

                        <p className='uppercase text-lg font-bold'>free and fast delivery </p>

                        <p className='text-gray-400 capitalize'>free delivery without extra effort </p>

                    </div>


                </div>

                {/* Money gaurentee block   */}

                <div className='flex flex-col justify-center items-center gap-4'>

                    <div className='h-[60px] w-[60px] rounded-full animate-bounce'>

                        <img src={returnbox} alt="" className='h-full w-full bg-cover ' />

                    </div>

                    <div>

                        <p className='uppercase text-lg font-bold'>free and fast delivery </p>

                        <p className='text-gray-400 capitalize'>free delivery without extra effort </p>

                    </div>


                </div>

            </div>


        </div>
    )
}

export default Arrivals