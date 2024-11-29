
import React, { useContext, useState } from 'react'

import { AppContext } from '../../context/AppContext';



const AddCategory = () => {

  const { allProduct, allCategory, allTags, fetchAllproduct,setData } = useContext(AppContext);

  const [TagCat, setTagCat] = useState({ name: "", tagName: "" });


  function clickHandler(event) {

    let name = event.target.name;
    let value = event.target.value;
    console.log(value);

    setTagCat((values) => ({ ...values, [name]: value }));

  }


  async function selectHandler(event) {

    let name = event.target.name;

    let value = event.target.value;

    console.log(value);

    setTagCat((values) => ({ ...values, [name]: value }));

    console.log("value of tag ", value);

    fetchAllproduct(null, value);

    // let data = await axios.get("http://localhost:3000/api/v1/auth/getAllSpecificTagCategory", {"TagName":tag})


  }

  function submitHadler(event){

    event.preventDefault();

    console.log(TagCat);
    setData(TagCat.tagName,TagCat.name);
    
    // console.log(name);

  }

  

  return (

    <div className='bg-red-300 h-[500px] w-[600px] flex justify-center items-center'>

      <form onSubmit={submitHadler} className='flex flex-col gap-6 justify-center items-center'>

        <label>

          <select name='tagName' onChange={selectHandler} className='w-[300px] p-3 text-lg border-4 border-b-slate-900'>

            <option value="selct the tag ">Select the Tags </option>
            {
              allTags.map((data) => (

                <option value={data.tagName} className='text-slate-950'>

                  {data.tagName}

                </option>

              ))
            }

          </select>

        </label>
        <div>

          <label>

            <input type="text" name='name' required onChange={clickHandler} className='w-[350px] border-2 border-b-indigo-900 p-3 text-start text-lg' placeholder='Set the Category ' />

          </label>

        </div>

            <button type='submit ' className='border border-b-indigo-700 p-6 w-[150px]'>Add Category </button>

      </form>
    </div>
  )
}

export default AddCategory