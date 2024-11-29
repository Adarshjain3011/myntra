import React, { useState } from 'react'
import allImage from '../../Constant/Images'

import { AppContext } from '../../context/AppContext';

import { useContext } from 'react';

const ActualCategories = () => {

    // let obj = [0,1,2];


    const [click, setClick] = useState(false);

    function clickHandler() {

        setClick(!click);


    }

    const {allProduct,setALLProduct} = useContext(AppContext);

    return (

        <div className='flex flex-col gap-14 mt-16 bg-[#f0f8ff]'>


            <div className={'flex flex-col gap-10 ' + (click === true ? "h-[full] overflow-y-auto " : "h-[410px] overflow-y-hidden")}>

                <h1 className='text-center uppercase font-bold text-2xl '>Actual Categories  </h1>
                <div className='flex flex-wrap gap-6 m-auto'>

                    {

                        allProduct.map((data) => {

                            console.log("ug", data);

                            return (


                                <div className=' flex flex-col gap-4 rounded-md'>


                                    <div className='h-[250px] w-[250px] rounded-md grayscale-0 hover:grayscale mix-blend-multiply'>

                                        <img src={data.Images[0]} alt="" className='bg-cover h-full w-full'/>

                                    </div>

                                    <div className='flex justify-center items-center flex-col gap-2'>

                                        <h1 className='font-bold'>{data.Name} </h1>

                                        <p>{data.Description}</p>

                                        {/* <p>135 rs</p> */}

                                    </div>


                                </div>


                            )
                        })
                    }


                </div>


            </div>

            <div className='w-11/12 flex justify-center items-center'>


                <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[170px] p-3 text-lg font-bold rounded-lg text-white' onClick={clickHandler} >

                    {

                        click === false ? (<button className=''>Show More </button>) : (<button>Show Less</button>)

                    }

                </button>

            </div>


        </div>

    )
}

export default ActualCategories