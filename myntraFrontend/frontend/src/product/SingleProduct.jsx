import React, { useState } from 'react'

import { AppContext } from '../context/AppContext'

import { useContext } from 'react';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const SingleProduct = () => {




    const navigate = useNavigate();

    const { allProduct, setALLProduct, singleProductId, setSingleProductId,currentUserId,setCurrentUserId } = useContext(AppContext);

    console.log("single product ke andar ", allProduct);

    console.log("product id is ", singleProductId);

    let singleProductArray = allProduct.filter((data) => (data._id === singleProductId));

    console.log("clicked array is ", singleProductArray);

    console.log(typeof allProduct);


    let val1 = Object.values(singleProductArray);

    let val2 = Object.values(val1);

    val2[0].Images.map(data => (

        console.log("img", data)

    ));

    const [currentClickedImage, setCurrentClickedImage] = useState(val2[0].Images[0]);

    function clickImageHandler(data) {

        setCurrentClickedImage(data);

    }

    let BASE_URL = import.meta.env.VITE_BASE_URL;



    async function AddToCartHandler(id){

        // toast.success("item added to the cart successfully ");

        toast.success("item added to the cart successfully");

        let url = BASE_URL;

        url+= "add-to-cart"

        // const params = new URLSearchParams();

        // params.append('productId', id);

        // console.log("params ",params);

        // let data = await axios.get(`${BASE_URL}/${params}`,{userId :currentUserId});
        
        console.log("single product id is ",singleProductId);

        let data = await axios.post(`${url}/${id}`,{"userId":currentUserId});
        
        console.log(data);

        // axios.post()

        
    }

    async function AddToWishlistHandler(id){
        
        toast.success("item added to the wishlist  successfully");

        let url = BASE_URL;

        url +="add-to-wishlist";

        let data = await axios.post(`${url}/${id}`,{"userId":currentUserId});
        
        console.log(data);

    }

    return (

        <div className='h-[100vh] w-[100vw]'>


            {/* side images  */}


            <div className='flex w-11/12 mt-[4rem] m-auto gap-14'>


                <div className=''>


                    {


                        val2[0].Images.map((data) => (


                            <div onClick={() => clickImageHandler(data)} className='w-[150px] h-[130px] mix-blend-multiply'>

                                <img src={data} alt="" className='w-full h-full bg-cover ' />

                            </div>
                        ))
                    }

                </div>


                {/* Main image  */}
                <div className='w-[600px] h-[600px] mix-blend-multiply'>

                    <img src={currentClickedImage} alt="" className='w-full h-full bg-cover '/>

                </div>


                <div className='flex flex-col gap-7 p-7'>

                    {/* rating ko abhi avoid kar rahe hai  */}

                    {/* Name  */}

                    <h1 className='font-bold text-4xl capitalize'>{val2[0].name}</h1>

                    {/* price  */}

                    <p className='text-orange-600 font-extrabold text-xl'>{val2[0].Price} rs</p>

                    {/*  Add to cart button  */}

                    <button className='border text-xl p-3 bg-red-500 ' onClick={()=>AddToCartHandler(val2[0]._id)}>Add to Cart </button>

                    <button className='border text-xl p-3 bg-neutral-500' onClick={()=>AddToWishlistHandler(val2[0]._id)}>Add to wishlist </button>

                     product description 

                    <p> {val2[0].Description} </p>

                </div>

            </div>
            
            {/* you may also like  */}

            <div>
                
                <div>

                    <h1 className=''>You may also like </h1>     

                </div>

            </div>


        </div>
    )
}

export default SingleProduct

