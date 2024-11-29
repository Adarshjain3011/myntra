import React from 'react'
import secificCategoryImages from '../Constant/SpecificCategoryImages'
import { useState } from 'react'

const Temp = () => {

    const [productImage,setProductImage] = useState('');

    const [size,setSize] = useState('XL');

    function clickHandler(image){

        setProductImage(image);

    }

    function sizeHandler(siz){

        let setColor = document.querySelector(`.${siz}`);
        
        console.log(setColor);

         if(size === siz ){


            console.log("fjhf");
             setColor.style.backgroundColor = "red";

             setSize(siz);


         }
         else{

            let newColor = document.querySelector(`.${size}`);
            newColor.style.backgroundColor = "";
            setColor.style.backgroundColor = "red";
            setSize(siz);
            
         }
    

    }
    return (
        <div className='w-[100vw] '>
            {/* whole conatiner div  */}
            <div className='flex w-10/12 m-auto pt-6 gap-12'>

                {/* variteis of images in diffirent angles  */}
                <div className='flex flex-col gap-4 mt-8'>
                    
                    {
                        secificCategoryImages.map((data)=>(


                            <div className='h-[80px] w-[100px]'>

                                <img src ={data.image} alt="" onClick={()=>clickHandler(data.image)} className='h-full w-full bg-cover'/>


                            </div>

                        ))
                        
                    }

                </div>

                {/* left -----image --right - */}

                <div>


                    {/* lefthandler  */}
{/* 
                    <button>-</button> */}

                    {/* product image  */}

                    <div className='h-[550px] w-[600px] mt-8'>

                        {

                            productImage.length == 0 ?(<img src ={secificCategoryImages[0].image} alt="" />):(<img src ={productImage} alt="" className='h-full w-full bg-cover'/>)
                        }

                    </div>

                    {/* rightHandler  */}

                    {/* <button>+</button> */}

                </div>

                {/* whole product description  */}
                <div className='mt-8'>

                    {/* rating  */}

                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    {/* product name */}

                    <h1 className='text-4xl font-semibold '> V-nect dress </h1>

                    {/* product code  */}

                    <p>Product code :ndjhddij </p>

                    {/* cost of product  */}

                    <p className='font-bold text-2xl text-orange-200'>200 rs </p>

                    {/* size */}
                    <div>

                        <div>

                            <p>Size :{size}</p>

                        </div>

                        {/* diffrent size selection  */}
                        <div className='flex gap-8'>

                            <div className='xs flex border  border-orange-500 h-[40px] w-[40px] rounded-full justify-center items-center' onClick={()=>sizeHandler("xs")}>XS</div>
                            <div className='S flex border border-orange-500 h-[40px] w-[40px] rounded-full justify-center items-center' onClick={()=>sizeHandler("S")}>S</div>
                            <div className='M flex border border-orange-500 h-[40px] w-[40px] rounded-full justify-center items-center' onClick={()=>sizeHandler("M")}>M</div>
                            <div className='L flex border border-orange-500 h-[40px] w-[40px] rounded-full justify-center items-center' onClick={()=>sizeHandler("L")}>L</div>
                            <div className='XL flex border border-orange-500 h-[40px] w-[40px] rounded-full justify-center items-center' onClick={()=>sizeHandler("XL")}>XL</div>


                        </div>


                        {/* color selction  */}

                        <div>
                            <p>color</p>

                            <div>Pink </div>
                            <div>yellow </div>

                        </div>

                        {/*  add to bag Wishlist button  */}

                        <div>

                            <div>

                                <button>Add to cart </button>
                                {/* icon  */}
                            </div>

                            <div>

                                <button> WishLists </button>
                                {/* icon  */}

                            </div>

                        </div>

                        {/* product description  */}

                        <div>

                            <p>Product description </p>
                            <p></p>

                        </div>

                        {/* review section  */}

                        <div>

                            <div>Reviews(count) </div>
                            <div>+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Temp