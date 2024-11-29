import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import allImage from '../Constant/Images';
const Carosel = () => {

  return (

    <div className='h-[100vh] w-[100vw] z-20'>

        <Carousel className='w-11/12 m-auto bg-cover'

          autoPlay={true}
          infiniteLoop={true}
          interval={2000}
          showThumbs={false}
        >

          {
            allImage.map((data) => (


              <div className='h-[650px]'>

                <img src={data.image} className='bg-cover h-full w-full'></img>

              </div>


            ))
          }

        </Carousel>


      </div>
  )
}

export default Carosel

