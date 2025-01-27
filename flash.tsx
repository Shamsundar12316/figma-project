import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FProduct from "./fproduct";


export default function Flash(){
    return(
        <div className="w-full flex justify-center items-center mt-4 mb-1 pt-20">
        <div className="sm:w-full md:w-[80%] pb-10">
        <div className="flex justify-between items-center">
        <div>
         <h3 className="text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1"> Today's</h3>
         <h1 className="text-slate-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-2">Flash Sales</h1>
        </div>

        {/** Timer */}
        <div className="w-[702px] h-[50px] relative flex">

        {/** day section */}

        <div className="left-0 top-0 absolute flex-col gap-1 inline-flex">
        <div className="w-[31px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">
        Days
        </div>
        <div className="w-[46px] h-7 text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">
        03
        </div>
        </div>

        {/** Hours Sections */}  
        <div className="w-[42px] h-[50px] left-[84px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
         <div className="w-[35px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">
         Hours
         </div>
         <div className="text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">
          23
         </div>
        </div>
        {/** Minutes Section */}

      <div className="w-[49px] h-[50px] left-[164px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
      <div className="w-[49px] text-black font-medium font-['Poppins'] leading-[18px]">
      Minutes
      </div>
       <div className="text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">
          19
         </div>
      </div>

      {/** Second section */}
        <div className="w-[51px] h-[50px] left-[251px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
      <div className="w-[52px] text-black font-medium font-['Poppins'] leading-[18px]">
      Seconds
      </div>
       <div className="text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">
          56
         </div>
      </div>
      {/** seprator section (dots 1) */}
      <div className="left-[63px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
       <div className="w-1 h-1 bg-red-500 rounded-full"></div>
      </div>

        {/** seprator section (dots 2) */}
      <div className="left-[143px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
       <div className="w-1 h-1 bg-red-500 rounded-full"></div>
      </div>

        {/** seprator section (dots 3) */}
      <div className="left-[230px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
       <div className="w-1 h-1 bg-red-500 rounded-full"></div>
      </div>
        </div>
        
        {/** Navigation Arrow */}

        <div className="flex-gap-2">
        <div className="w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
       <FaArrowLeft className="text-black"/>
        </div>
         <div className="w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
       <FaArrowRight className="text-black"/>
        </div>
        </div>
        </div>
        {/** Navigation Arrows end */}
        <div>
          <FProduct/>
        </div>




        {/** end */}
        </div>
        </div>
    )
}