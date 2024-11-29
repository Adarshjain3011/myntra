import React, { useEffect, useState } from 'react'

import { AppContext } from '../context/AppContext'

import { useContext } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const WishList = () => {

  const { allWishlist, setAllWishlist, currentUserId, setCurrentUserId, allProduct } = useContext(AppContext);

  // const [wishlistItem, setWishlistItem] = useState([]);

  console.log("all product data ", allProduct);

  let BASE_URL = import.meta.env.VITE_BASE_URL;

  // var wishlistProductArray;

  const wishlistProductArray = allProduct.filter(product => {

    return allWishlist.some(wishItem => wishItem.productId === product._id);

  });

  console.log("wishlist item is ", wishlistProductArray);

  async function getAllWishlistData() {


    let url = BASE_URL;

    url += "getallwishlist";

    await axios.get(url, { params: { "userId": currentUserId } }).then((data) => {

      console.log("all user wishlist data is ", data.data.wishlist);

      setAllWishlist(data.data.wishlist);


      // setWishlistItem(wishlistProductArray);


    }).catch((error) => {

      console.log("error occur while fetching wishlist data ".error);

    })



  }

  async function removeWishlistItem(productId) {

    console.log("prpduct id is ", productId);

    let url = BASE_URL;

    url += "remove-from-wishlist";

    axios.post(`${url}/${productId}`, { "userId": currentUserId }).then((data) => {

      console.log("data is ", data);

      getAllWishlistData();


    }).catch((error) => {

      console.log("error is ", error);

    })

  }

  const navigate = useNavigate();


  function goToHome() {

    navigate("/");

  }

  useEffect(() => {

    getAllWishlistData();

  }, []);


  return (


    <div className='h-[100vh] w-[100vw] mt-[5rem]'>

      <div className='w-11/12 m-auto'>

        <h1 className='text-3xl font-serif m-4'>

          wishList

        </h1>

        {

          wishlistProductArray.length === 0 ?

            (

              <div className='flex flex-col gap-7 justify-center items-center'>

                <div className='flex flex-col gap-3 text-center'>

                  <h2 className="text-xl font-bold uppercase">YOUR wishList  IS EMPTY</h2>

                  <p className="text-stone-500">Add items that you like to your Wishlist. Review <br></br> them anytime and easily move them to the bag.</p>

                </div>

                <div className=''>

                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvufmum0-H6E0od4Vd37ye-zjwZpXVVfhIUByb_FVjioTNNKuTuLxEm6Csjl8oDmwJiPs&usqp=CAU" alt="" />

                </div>

                <button className='border border-slate-500 w-[280px] text-xl text-gray-500  p-4 hover:bg-blue-600 rounded-md' onClick={goToHome}>Continue Shopping </button>

              </div>

            )

            :

            (

              <div className='flex flex-wrap gap-4'>

                {

                  wishlistProductArray.map((data) => (

                    <div className='flex flex-col border w-[250px] h-[400px] justify-evenly p-4 shadow-2xl rounded-md '>


                      <div className='mix-blend-multiply h-[150px] w-[200px]'>

                        <img src={data.Images[0]} className='h-full w-full bg-cover'></img>

                      </div>

                      <h1 className='text-2xl font-semibold capitalize'>{data.name}</h1>

                      <p className='text-2xl text-orange-600 font-bold'>{data.Price} Rs</p>

                      <button className='border bg-red-500 p-3 rounded-md text-white font-bold text-2xl' onClick={() => removeWishlistItem(data._id)}>Remove Item </button>

                    </div>

                  ))

                }

              </div>

            )
        }

      </div>

    </div>
  )
}

export default WishList