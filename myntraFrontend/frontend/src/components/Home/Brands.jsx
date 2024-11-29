import React from 'react'

import allImage from '../../Constant/Images'

import logo from "../images/Adidas-logo.png";

const Brands = () => {

    

    let pk;

    return (

        <div className=' flex flex-col gap-7'>

            <h1 className='text-center text-2xl text-gray-500 uppercase font-semibold '> Only Trusted Brands </h1>

            <div>

                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">

                        {

                            allImage.map((data) => (

                                
                                
                                <li className='h-[150px] w-[250px] mix-blend-multiply'>

                                        {


                                            pk = Object.values(data).map((ig)=>Object.values(ig)[0])

                                        }

                                        <img src={pk} alt="" className='h-full w-full bg-cover' />

                                </li>

                         
                            ))
                        }


                    </ul>

                    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll -z-10" aria-hidden="true">

                        {

                            allImage.map((data) => (

                              

                                    <li className='h-[150px] w-[250px] mix-blend-multiply' >

                                        {
                                            pk = Object.values(data).map((ig)=>Object.values(ig)[0])

                                            
                                        }
                                        <img src={pk} alt="" className='h-full w-full bg-cover' />


                                    </li>

                             
                            ))
                        }


                    </ul>


                </div>

            </div>

        </div>

    )
}

export default Brands
