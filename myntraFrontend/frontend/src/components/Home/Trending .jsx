import React, { useState } from 'react'

import allImage from '../../Constant/Images'
import ActualCategories from './ActualCategories';
import Brands from './Brands';
import Arrivals from './Arrivals';

import { AppContext } from '../../context/AppContext';

import { useContext } from 'react';

import FooterSection from '../../Pages/FooterSection';

import { useNavigate } from 'react-router-dom';

import SingleProduct from "../../product/SingleProduct"

const Trending = () => {

    let obj = [

        {

            "cat": "Dressess"
        },
        {


            "cat": "skirt",

        },
        {

            "cat": "hoodie ",

        },

        {

            "cat": "pants  ",

        },

        {

            "cat": "shirt ",

        },

    ]


    const {allProduct,setALLProduct,singleProductId,setSingleProductId} = useContext(AppContext);


    const navigate = useNavigate();

    console.log("all products ",allProduct);
    console.log("hellow ");

    const [options,setOptions] = useState('Dressess');

    function clickHandler(id){

        console.log(id);
        setSingleProductId(id);

        navigate("/singleproduct");
        // console.log("product id is ",singleProductId);
    }


    return (


        <div className=' h-[100vh] flex flex-col gap-12 p-[2px] bg-[#f0f8ff] w-[100vw]'>


            <div className='h-[550px] w-11/12 flex flex-col m-auto gap-10'>

                <h1 className='text-center uppercase font-semibold text-2xl'>Trending Now  </h1>


                <div className='flex gap-6 m-auto'>

                    {

                        obj.map((data) => {

                            // return <button className='border rounded-lg p-4 ' oncl>{data.cat}</button>

                            return <button className ={'p-2 border w-[120px] rounded-full font-bold text-lg '+(options === data.cat ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white ":"bg-white")} onClick={()=>{setOptions(data.cat)}}><p className='capitalize'>{data.cat}</p></button>

                        })

                    }

                </div>

                <div className='flex overflow-x-auto gap-6 overflow-y-hidden'>

                    {

                        allProduct.map((data) => {

                            return (


                                    // console.log("hellow data is here ",data._id)
                                <div className=' flex flex-col gap-2'>

                                    <div className='h-[300px] w-[250px] mix-blend-multiply' onClick={()=>clickHandler(data._id)}>

                                        <img src={data.Images[0]} alt="" className='bg-cover h-full w-full' />

                           

                                    </div>

                                    <div className='flex justify-center items-center flex-col gap-2 h-[250px]'>

                                        <h1 className='font-bold text-xl capitalize'>{data.name} </h1>
                                        
                                        <p className='text-gray-400 font-semibold'>{data.Description}</p>
                                        
                                        <p className='text-orange-500 font-bold'>{data.Price} rs</p>

                                    </div>


                                </div>


                            )
                        })
                    }

                    {/* <ActualCategories></ActualCategories> */}

                </div>


            </div>


            <div className=' w-11/12 flex flex-col m-auto gap-16 '>


                    <ActualCategories></ActualCategories>

                    <Brands></Brands>
                    
                    <Arrivals></Arrivals>

                    <FooterSection></FooterSection>



            </div>

        </div>

    )
}

export default Trending 


