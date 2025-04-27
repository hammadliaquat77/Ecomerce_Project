import React from 'react'
import Image1 from "../../assets/women/women.png"
import Image2 from "../../assets/women/women2.jpg"
import Image3 from "../../assets/women/women3.jpg"
import Image4 from "../../assets/women/women4.jpg"
import { FaStar } from 'react-icons/fa6'

const ProductData = [
   {
    id: 1,
    img: Image1,
    title: "Women Ethenic",
    rating: 5.0,
    color: "white",
    aosDelay: "0"
   },
   {
    id: 2,
    img: Image2,
    title: "Women Cloth's",
    rating: 4.4,
    color: "pink",
    aosDelay: "200"
   },
   {
    id: 3,
    img: Image3,
    title: "Women Weston",
    rating: 4.5,
    color: "yellow",
    aosDelay: "400"
   },
   {
    id: 4,
    img: Image4,
    title: "Goggles",
    rating: 4.0,
    color: "purple",
    aosDelay: "600"
   },
]

function Product() {
  return (
    <div className='mt-40 mb-12'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>
                    Top Selling Product for you
                </p>
            </div>
        </div>
    </div>
  )
}

export default Product