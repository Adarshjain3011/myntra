import React from 'react'
import { AppContext } from '../context/AppContext';

import { useContext } from 'react';
import Trending from '../components/Home/Trending ';
import Carosel from '../components/Carosel';
import ActualCategories from '../components/Home/ActualCategories';


const Home2 = () => {


    const {allCategory,singleTag,setSingleTag,specificTagCategory,setSpecificTagcategory} = useContext(AppContext);


  return (

    <div>
        
        
          <div className='w-[100vw] pl-[30rem]'>

              <div className='w-[700px] h-[550px] m-auto flex flex-col border absolute bg-white'>

             
                  <div className='flex justify-center items-center border-r-orange-100 text-white h-[150px] w-full border flex-col gap-2 pt-6 bg-gradient-to-r from-purple-500 to-pink-500'>

                      <h1 className='uppercase text-stone-500 font-medium'>Get up 20 % discount </h1>
                      <p className='text-center w-[450px] text-teal-800 font-semibold font'>Dont Miss oun the chance to get 20% discount on the entire assosment provided in this category </p>

                  </div>

                  <div className='flex h-[400px] w-[700px] '>

              

                      <div className='flex gap-6 w-[300px] border-r-2 flex-col m-auto pr-3 h-[400px] p-4'>

                      

                          <h2 className='text-start uppercase font-sans font-semibold'>for {singleTag} </h2>

                          <div className='flex gap-6'>

                              <div className='h-[300px] w-[180px]'>

                                  <img className='h-full w-full' src="https: scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/326659316_3016242385346644_5883941595714548442_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=1WpC7Zx62DoAX-OZ6-X&_nc_ht=scontent.fdel29-1.fna&oh=00_AfAVZkKkO2a1aJsL9A2ILvNWqsWOxWV7codCmLS6UQoYcA&oe=65814386" alt="" />

                              </div>

                              <div className='h-[300px] w-[180px]'>

                                  <img className='h-full w-full' src="https: encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxttx0baqOp6TnlR4OSoNHk8eqlRO0HywmX0R5dng-5nsdEolny8euOD4D3mrrPfPGxA&usqp=CAU" alt="" />

                              </div>

                          </div>

                      </div>

                

                      <div className='flex gap-6 flex-col p-4'>
                          <p className='text-start uppercase font-sans font-semibold'>Categories </p>
                          <div className='flex flex-wrap gap-5 w-[350px] '>

                              {
                                  specificTagCategory.map((data) => (


                                      <div className='flex border p-3 w-40 gap-5 justify-start items-center'>

                                          <div className='w-8 h-8 rounded-full '>

                                              <img src={data.image} className="w-full h-full rounded-full object-cover" alt="" />

                                          </div>

                                          <button className='text-stone-500 text-base font-medium'> {data.categoryName}</button>

                                      </div>

                                  ))
                              }
                          </div>

                      </div>

                  </div>
              </div>

              {/* <Trending></Trending> */}

          </div>
    </div>

  )

}

export default Home2