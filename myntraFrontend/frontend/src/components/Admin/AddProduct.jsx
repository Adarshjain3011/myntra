import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';

const AddProduct = () => {

    const [files, setFile] = useState([]);

    const [formData, setformData] = useState({ name: "", price: "", description: "", category: "", tags: "" });

    const {allProduct,allCategory,allTags,fetchAllproduct} = useContext(AppContext);

    function clickHandler(event) {

        // setformData({...prev, [name]: value});
        let name = event.target.name;
        let value = event.target.value;
        console.log("files is here ",value);
        setformData((values) => ({ ...values, [name]: value }));

        // console.log("select tag ke liye ",event);
        

    }

    // function fileHandler(event) {

    //     setFile(event.target.files);

    //     console.log(file);

    // }

    function fileUploadHandler(event){

        const filess = document.getElementById('fileInput').files;

        console.log("files are ",files);

        setFile(filess);


        // for (const file of files) {
        //     console.log(`File name: ${file.name}`);
        //     console.log(`File size: ${file.size}`);
        //     console.log(`File type: ${file.type}`);
        // }

    }

    async function selectHandler(event){

        let name = event.target.name;
        let value = event.target.value;
        console.log(value);
        setformData((values) => ({ ...values, [name]: value }));

        console.log("value of tag ",value);

        fetchAllproduct(null,value);

        // let data = await axios.get("http://localhost:3000/api/v1/auth/getAllSpecificTagCategory", {"TagName":tag})


    }


    async function submitHandler(event) {

        event.preventDefault();

        console.log(" whole form data", formData);

        let BASE_URL = import.meta.env.VITE_BASE_URL;

        const forms = new FormData();

        forms.append('name', formData.name);

        forms.append('price', formData.price);

        forms.append('description', formData.description);

        forms.append('category', formData.category);

        forms.append('tags', formData.tags);

        for (const file of files) {

            forms.append('imageFile[]', file, file.name);
        
             // Example with optional filename
             
          }

        // forms.append('imageFile', file[0]);

        
        const allData = forms.getAll('imageFile');

        console.log("all data", allData);


        //    await Push_Data(forms); 

        await axios.post("http://localhost:3000/api/v1/auth/createProducts", forms).then((data) => {

            console.log(data);

        }).catch((error) => {history

            console.log("error", error);

        })

    }

    return (

        <div className=''>

            <div className='h-[600px] w-[750px]  bg-slate-600 flex gap-6 pr-5 '>

                <form onSubmit={submitHandler} className='gap-5 flex flex-col m-auto'>

                    <div className='flex w-[100%] bg-amber-500  h-[200px] gap-3 justify-center items-center'>

                        <label className='w-[300px] flex flex-col'>

                            {/* Add Product File  */}

                            <input multiple type='file' name ='file' id='fileInput' required onChange={fileUploadHandler} className='w-[300px] text-center'></input>
                            
                        </label>

                    </div>

                    <div className='flex justify-between gap-8'>

                        <div>

                            <label>

                                <input type="text" name='name' required onChange={clickHandler} className='w-[350px] border-2 border-b-indigo-900 p-3 text-start text-lg' placeholder='Product Name' />

                            </label>

                        </div>

                        <div>

                            <label>

                                <input type="text" name='price' required onChange={clickHandler} className='w-[300px] border-2 border-b-indigo-900 p-3 text-start text-lg' placeholder='Product Price' />

                            </label>

                        </div>

                    </div>

                    <div className='flex justify-between'>

                        <label> 

                            <select name ='tags' onChange={selectHandler} className='w-[300px] p-3 text-lg border-4 border-b-slate-900'>

                                <option value="selct the tag ">Select the Tags </option>
                                {
                                    allTags.map((data)=>(


                                        // console.log(data)
                                        <option value={data.tagName} className='text-slate-950'>

                                            {data.tagName}
                                        {/* <input type="text" name='category' required  placeholder ='Product  category' className='w-[300px] p-3 text-lg border-4 border-b-slate-900'/> */}

                                        </option>

                                    ))
                                }

                            </select>

                            {/* <input type="text" name='tags' required onChange={clickHandler} placeholder='Product  Tags' className='w-[300px] p-3 text-lg border-4 border-b-slate-900 '/> */}

                        </label>

                        <label> 

                            <select name ='category' onChange = {clickHandler} className='w-[300px] p-3 text-lg border-4 border-b-slate-900'>

                            <option value="selct the Category ">Select the Category </option>

                                {
                                    
                                    allCategory.map((data)=>(


                                        // console.log(data)
                                        <option value={data.categoryName} className='text-slate-950'>

                                            {data.categoryName}
                                        {/* <input type="text" name='category' required  placeholder ='Product  category' className='w-[300px] p-3 text-lg border-4 border-b-slate-900'/> */}

                                        </option>

                                    ))
                                }

                            </select>


                        </label>


                    </div>

                    <div className='w-full'>

                        <label> 

                            <input type="text" name='description' required onChange={clickHandler} placeholder='Product Description ' className='w-full text-lg h-[150px] text-center' />

                        </label>

                    </div>


                    <button type='submit' className='border border-r-slate-900 text-white w-64 text-center p-3 text-lg translate-x-[200px] mb-3'>Sumbmit Product </button>

                </form>
            </div>
        </div>
    )
}

export default AddProduct