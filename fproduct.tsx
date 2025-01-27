import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegEye, FaRegStar } from "react-icons/fa";
const products = [
  {
    title:"HAVIT HV-G92 Gamepad",
    price:"$120",
    oldPrice:"$160",
    image: "/images/game.png",
    rating:"5",
    reviews:"88",
    discount: "40"

  },

  {
    title:"AK-900 Wired Keyboard",
    price:"$960",
    oldPrice:"$1160",
    image: "/images/keyboard.png",
    rating:"4",
    reviews:"75",
    discount: "35"

  },

  {
    title:"IPS LCD Gaming Monitor",
    price:"$370",
    oldPrice:"$400",
    image: "/images/ldc.png",
    rating:"4",
    reviews:"99",
    discount:"30"

  },

  {
    title:"S-Series Comfort Chair",
    price:"$375",
    oldPrice:"$400",
    image: "/images/chair.png",
    rating:"5",
    reviews:"99",
    discount:"25"

  },
];

const FProductBox = ({product} : {product: any}) => (
  <div className="relative">
  {product.discount && (
    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">
      - {product.discount}%
    </div>
  )}

  <div className="group shadow-md bg-neutral-100 w-[220px] h-[180px] flex justify-center items-center relative cursor-pointer">
   <img src={product.image} width={100} height={100} alt={product.title} />
     
    <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
    <FaRegHeart className="text-2xl text-black rounded-full p-1 bg-white"/>
    <FaRegEye className="text-2xl text-black rounded-full p-1 bg-white"/>

    </div>
    <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
      Add to cart
    </button>
  </div>
 <h1 className="font-bold font-sans pt-2">{product.title}</h1>
 <div className="flex items-center space-x-2">
  <span className="text-red-500 font-bold">{product.price}</span>
    {product.oldPrice && (
      <span className="text-grey-400 font-bold line-through">{product.oldPrice}</span>
    )}
 </div>
 <div className="flex items-center space-x-1 text-yellow-400 text-md pt-1">
  {[...Array(5)].map((_, index) => 
  index < product.rating ? (
    <FaRegStar key = {index}/>
  ):(
    <FaRegStar key={index}/>
  )
  )}
  <span className="text-grey-400 text:sm ml-1">{product.reviews}</span>

 </div>

  </div>
);

const FProduct = () => {
  return(
    <main>
      <div className="w-full flex justify-center items-center mt-10 mb-1 ">
      <div className="w-[100%]">
      <div className="flex flex-col">
      </div>
      <div className="flex flex-wrap justify-between mt-5 gap-y-5">
      {products.map((product, index) => (
        <FProductBox key={index} product={product}/>
      ))} 
      </div>

     <div className="mt-5 flex justify-center pt-10">
    <button className="bg-red-500 text-white px-6 py-2 font-bold hover:bg-red-600 transition-all duration-300">View All Products</button>
     </div>
      </div>
      </div>
    </main>
  )
}
export default FProduct;