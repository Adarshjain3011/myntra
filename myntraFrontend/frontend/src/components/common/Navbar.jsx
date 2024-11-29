import React from 'react'

import { FcLikePlaceholder } from "react-icons/fc";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useContext } from 'react';
import { AppContext } from "../../context/AppContext";
import Home from '../../Pages/Home';
import Home2 from '../../Pages/Home2';

import { Navigate, useNavigate } from 'react-router-dom';


const Navbar = () => {

  const { isLoggedIn, setIsLoggedIn, singleTag, setSingleTag, allTags, specificTagCategory, setSpecificTagcategory, allCategory, setAllCategory,allCart,allWishlist,userInfo,setUserInfo } = useContext(AppContext);


    const navigate = useNavigate();
    
  

  function cartHandler(){

    navigate("/addtoCart");

  }

  function wishlistHandler(){


    navigate("/wishList");

  }

  function setTagCategory(tagId, tag) {

    // setSingleTag(tagId);

    setSingleTag(tag);

    console.log("all categories ", allCategory);

    if (tagId) {

      console.log("helllow ");

      const filteredCategories = allCategory.filter(category => category.Tags.includes(tagId));

      console.log("filter catgori", filteredCategories);

      

      setSpecificTagcategory(filteredCategories);

      console.log("specific tag category ", specificTagCategory);

    }
    else {

      setSpecificTagcategory([]); // clear filtered categories if no tag selected

    }




    // console.log()
  }


  function goToHome(){

    navigate("/");
    
  }

  function goToUserDetail(){

    navigate("/userdetail");
  }
  // console.log(isLoggedIn);

  console.log("user info details ",userInfo.image);

  return (

    <div className='bg-white w-[100vw] fixed top-0 rounded-md border z-20'>

      <div className='flex w-11/12 justify-between  h-[80px] items-baseline m-auto pt-5'>

        {/* comapny icon  */}
        <div className='font-bold'>
          <p className='font-medium text-lg'>Company name</p>
        </div>

        {/* Category section name */}
        <div className='flex gap-8 font-medium text-lg'>

          <button className='' onClick={goToHome}> Home </button>

          {

            allTags.map((data) => (

              <button className='' onMouseOver={() => setTagCategory(data._id, data.tagName)} onMouseOut={() => setSingleTag('')}>{data.tagName}</button>

              // console.log(data._id)

            ))

          }


          <button> Contact  </button>

          <button>About</button>

          {

            !isLoggedIn && <div onClick={()=>{navigate("/signup")}}>Signup </div>

          }

        </div>

        {/* search bar cart item login  */}

        <div className='flex gap-6'>

          <div className='absolute top-7 ml-2'>

            <FaSearch size={20}></FaSearch>

          </div>

          <div className='absolute top-7 ml-[14rem]'>

            <ImCross size={20}></ImCross>

          </div>

          <input type="text " placeholder='Enter your Product' className='rounded-s-md h-9 w-[250px] border-2 border-blue-900  pl-7 ' />

          {

            isLoggedIn ? (

              <div className='flex gap-7'>
                <div>
                  <div className='relative'>
                    {/* cart image  */}

                    <div className='absolute bg-red-500 rounded-full w-[20px] h-[20px] flex justify-center items-center translate-y-[-18px] left-4 text-white font-bold animate-bounce'>{allCart.length}</div>

                    <FaCartPlus size={33} onClick={cartHandler}></FaCartPlus>

                  </div>

                </div>

                <div>
                  <div className='relative'>
                    {/* wishlists image  */}
                    <div className='absolute bg-red-500 rounded-full w-[20px] h-[20px] flex justify-center items-center translate-y-[-18px] left-4 text-white font-bold animate-bounce'>{allWishlist.length}</div>
                    <FcLikePlaceholder size={33} onClick={wishlistHandler}/>
                  </div>
                </div>

                  <div className='w-[35px] h-[35px] p-1 rounded-full' onClick={goToUserDetail}>

                      <img src ={userInfo.image} alt="" className='w-full h-full bg-cover rounded-full' />

                      {/* hekkow  */}

                  </div>

              </div>

            )
              :
              (

                <div></div>

              )
          }

        </div>
      </div>


      <div className=''>

        {

          singleTag.length !== 0 && <Home2></Home2>

        }

      </div>

    </div>
  )
}

export default Navbar


