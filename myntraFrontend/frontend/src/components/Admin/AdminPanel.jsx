import React, { useState } from 'react'

import AddProduct from './AddProduct';
import AddTags from './AddTags';

import AddCategory from './AddCategory';

const AdminPanel = () => {

    const [options,setOptions] = useState("Add Product");

  return (

    <div className='h-[100vh] w-[100vw] pt-[3rem]'>

        <div className='flex h-[600px] w-[1200px] justify-evenly'>

            {/* left div  */}
            <div className='flex flex-col bg-red-400 w-[350px] gap-6 pt-[2rem] justify-center items-center'>


                <button className ={'p-4 border w-72 rounded-md '+(options === "Add Product" ? "bg-violet-700 ":"bg-white")} onClick={()=>{setOptions("Add Product")}}>Add Product</button>
                <button className ={'p-4 border w-72 rounded-md '+(options === "Add Tag" ? "bg-violet-700":"bg-white")} onClick={()=>{setOptions("Add Tag")}}>Add Tag</button>
                <button className ={'p-4 border w-72 rounded-md '+(options === "Add Category" ? "bg-violet-700":"bg-white")} onClick={()=>{setOptions("Add Category")}}>Add Category</button>

            </div>


            {/* right div  */}

            <div className='w-[400px]'>

                {

                  options == "Add Tag" && <AddTags></AddTags>

                }

                {

                  options == "Add Product" && <AddProduct></AddProduct>
                  
                }

                {

                  options == "Add Category" && <AddCategory></AddCategory> 
                }


            </div>
        </div>
    </div>
  )
}

export default AdminPanel