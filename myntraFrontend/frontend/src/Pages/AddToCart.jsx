
// import "./CartItem.css";

import React, { useEffect, useState } from 'react'

import { AppContext } from '../context/AppContext'

import { MdDelete } from "react-icons/md";

import { FaMinus } from "react-icons/fa";

import { FaPlus } from "react-icons/fa";

import { FaRupeeSign } from "react-icons/fa";

import { useContext } from 'react'

import axios from 'axios';

import { useNavigate } from 'react-router-dom';





const AddToCart = () => {

  const { allProduct, setALLProduct, singleProductId, setSingleProductId, currentUserId, setCurrentUserId, allCart, setAllCart, } = useContext(AppContext);



  const [totalItemPrice, setTotalItemPrice] = useState('');

  let BASE_URL = import.meta.env.VITE_BASE_URL;

  console.log("add to cart ke andar ", allCart);

  console.log("all product ", allProduct);

  const cartProductArray = allProduct.filter(product => {

    return allCart.some(cartItem => cartItem.productId === product._id);

  });

  console.log("cart product array ", cartProductArray);

  // it multiply price with corresponding quantity 

  let totalPrice = allCart.map((data, index) => {

    return Number(data.quantity) * Number(cartProductArray[index].Price);

  })


  //sum all the price present in the total price array 

  let sum = 0;

  totalPrice.forEach(element => {

    sum += Number(element);

  });




  // remove cart from the cart


  async function removeCartHandler(productId) {

    let url = BASE_URL;

    url += "remove-from-cart";

    await axios.post(`${url}/${productId}`, { "userId": currentUserId }).then((data) => {

      getAllCart();

    }).catch((error) => {

      console.log(error);

    })



  }


  // get all the cart item 

  async function getAllCart() {

    let urls = BASE_URL;
    urls += "getallcart";

    console.log("hllow ");



    await axios.get(`${urls}`, { params: { userId: currentUserId } }).then((data) => {

      console.log("data is ", (data.data.cart).cart);

      setAllCart((data.data.cart).cart);


    }).catch((error) => {

      console.log("error is ", error);

    })

  }


  // add product  to the cart 

  async function addCartHandler(productId) {

    let url = BASE_URL;
    url += "add-to-cart";

    await axios.post(`${url}/${productId}`, { "userId": currentUserId }).then((data) => {



      console.log("cart item is ", allCart);

      getAllCart();


    }).catch((error) => {

      console.log("error is ", error);

    })


  }

  // remove item from cart 

  async function removeCartItem(productId) {


    console.log("remove cart ", productId);

    let url = BASE_URL;

    url += "deletecart";

    await axios.post(`${url}/${productId}`, { "userId": currentUserId }).then((data) => {

      getAllCart();

    }).catch((error) => {

      console.log(error);

    })

    console.log("sabase nneche ");



  }

  const navigate = useNavigate();

  function gotoHome() {

    navigate("/");

  }


  useEffect(() => {

    getAllCart();

  }, []);


  return (


    <div className='h-[100vh] w-[100vw] mt-[5rem]'>


      <div className='w-11/12 m-auto'>


        <h1 className='text-3xl font-serif m-3 capitalize'>Add to cart</h1>

        {/* we have two div left and right  */}

        {

          cartProductArray.length === 0 ? (

            <div className='flex flex-col gap-7 justify-center items-center'>

              <div className='flex flex-col gap-3 text-center'>

                <h2 className="text-xl font-bold">YOUR CART IS EMPTY</h2>

                <p className="text-stone-500">Add items that you like to your Cart. Review <br></br> them anytime and easily move them to the bag.</p>

              </div>

              <div className=''>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvufmum0-H6E0od4Vd37ye-zjwZpXVVfhIUByb_FVjioTNNKuTuLxEm6Csjl8oDmwJiPs&usqp=CAU" alt="" />

              </div>

              <button className ='border border-slate-500 w-[280px] text-xl text-gray-500  p-4 hover:bg-blue-600 rounded-md' onClick={gotoHome}>Continue Shopping </button>

            </div>

          ) :

            (

              <div className='flex justify-between border shadow-xl p-8 '>

                {/* left div  */}

                <div className='flex flex-col gap-2 w-[60%] '>

                  {

                    cartProductArray.map((data, index) => (



                      <div className='flex flex-col'>


                        <div className='flex gap-16 p-4 shadow-xl'>

                          {/* left section  */}

                          <div className='w-[200px] h-[150px] mix-blend-multiply'>

                            <img src={data.Images[0]} alt="" className='h-full w-full bg-cover' />

                          </div>

                          {/* right section  */}


                          {/* about product  */}

                          <div className='flex flex-col gap-4 justify-center items-center '>

                            <h1 className='capitalize text-2xl'>{data.name}</h1>

                            <div className='flex items-baseline'>

                              <p className='text-orange-400 text-xl font-bold'>{data.Price}</p>

                              <FaRupeeSign className='text-orange-400' />

                            </div>



                            <div className='flex gap-3 border p-2 bg-cyan-400 text-white'>

                              <FaMinus className='w-[30px] h-[30px]' onClick={() => removeCartHandler(allCart[index].productId)}></FaMinus>
                              {/* {

                          console.log(cartProductArray[index].quantity)
                        } */}
                              <div className='font-semibold text-2xl'>{allCart[index].quantity}</div>

                              <FaPlus className=' w-[30px] h-[30px]' onClick={() => addCartHandler(allCart[index].productId)}></FaPlus>

                            </div>

                          </div>



                        </div>
                        <div className='flex items-baseline p-3 bg-red-400  text-white rounded-md ' >

                          <MdDelete className='w-[30px] h-[30px]' />

                          <button className='text-xl' onClick={() => removeCartItem(allCart[index].productId)}>Remove </button>

                        </div>

                      </div>


                    ))

                  }

                </div>

                {/* right div  */}

                <div className='border shadow-2xl rounded-md'>

                  <div className='flex flex-col p-9 gap-5'>

                    <h1 className='capitalize text-2xl font-bold '>Price Details </h1>
                    <div className='flex justify-between'>

                      <p className='capitalize font-semibold'>Bag total</p>
                      <p className='font-semibold'>Rs 500 </p>

                    </div>

                    <div className='flex justify-between'>

                      <p className='capitalize font-semibold'>bag discount</p>
                      <p className='font-semibold'>Rs 100</p>

                    </div>

                    <div className='flex justify-between'>

                      <p className='uppercase font-semibold'>GST</p>
                      <p className='font-semibold'>Rs 100</p>

                    </div>

                    <div className='flex justify-between'>

                      <p className='font-semibold'>Coupon Discount</p>
                      <p className='font-semibold text-red-400'>Apply Coupon</p>

                    </div>

                    <div className='flex justify-between'>

                      <p className='font-semibold'>Delivery</p>
                      <p className='font-semibold'>Rs 100</p>

                    </div>

                    <div className='flex justify-between text-white'>

                      <p className='bg-green-700 p-3'>Free Delivery</p>
                      <p className='bg-slate-800 p-3'>for order above rupees 1000 </p>

                    </div>

                    <div className='flex justify-between'>

                      <p className='font-bold text-xl'>Total</p>
                      <p>Rs {sum}</p>

                    </div>


                    <button className='capitalize font-semibold text-xl text-white bg-emerald-600 p-3 rounded-md'>Place Order</button>

                  </div>
                </div>

              </div>
              
            )

        }

      </div>
    </div>
  )
}

export default AddToCart