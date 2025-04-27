import React from 'react'
import BannerImg from "../../assets/banner.jpg"
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'


function Banner() {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
       <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
         <div data-aos="zoom-in">
            <img src={BannerImg} alt="Banner_img" className='max-w-[400px] h-[350px] w-full object-cover mx-auto'/>
         </div>
         <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>
                Winter Sale upto 50% upto off
            </h1>
            <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, inventore voluptate ut perspiciatis laboriosam porro officia cupiditate distinctio culpa id sequi natus quae cumque voluptatem nemo, magni eos modi quaerat odio commodi.
            </p>
            <div className='flex flex-row gap-4'>
                <div data-aos="fade-up" className='flex items-center gap-4'>
                    <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                    <p>Quality Product</p>
                </div>
                <div data-aos="fade-up" className='flex items-center gap-4'>
                    <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                    <p>Fast Delivery</p>
                </div>
                <div data-aos="fade-up" className='flex items-center gap-4'>
                    <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                    <p>EasyPayment Method</p>
                </div>
                <div data-aos="fade-up" className='flex items-center gap-4'>
                    <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                    <p>Get Offer</p>
                </div>
            </div>
         </div>
        </div>
       </div>
    </div>
  )
}

export default Banner