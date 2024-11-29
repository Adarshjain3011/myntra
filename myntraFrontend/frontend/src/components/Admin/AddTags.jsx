import React from 'react'

import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useState } from 'react'

const AddTags = () => {

  const [name,setName] = useState();

  const {setData,fetchAllproduct} = useContext(AppContext);

  function changeHandler(event){

      // let name = event.target.name;

      // let value = event.target.value;

      // console.log(event.target.name);

      setName(event.target.value);

      

  }

  function submitHadler(event){

    event.preventDefault();

    setData(name);
    
    fetchAllproduct();
    console.log(name);

  }
  
  return (

    <div className='w-[600px] bg-red-300 h-[500px] flex justify-center items-center'>

          <form onSubmit={submitHadler} className='flex flex-col gap-7'>

            <input type='text' name='tagName' onChange={changeHandler} placeholder='Set the Tag ' className='w-[350px] h-16 border border-x-cyan-400  text-xl p-4' ></input>

            <button type='submit' className='p-5 border border-x-cyan-400 text-3xl font-medium text-emerald-800'>Add Tag</button>

          </form>

    </div>
  )
}

export default AddTags