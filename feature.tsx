import Image from "next/image"
import React from "react"
function Feature() {
    return (
        <div className="w-full flex justify-center items-center pt-7">
            <div className="w-[80%]">
                <div className="w-full">
                    <h3 className="text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1">Feature</h3>
                    <h1 className="text-slate-800 font-bold sm:text-xl md:text-3xl lg:text-3xl pt-4">New Arrival</h1>
                </div>

                {/** left container */}
                <div className="flex sm:flex-col md:flex-row gap-x-8 gap-y-5 text-white pt-4">
                    <div className="bg-black sm:w-full md:w-[50%] relative">
                        <div className="absolute left-4 bottom-3 text-white">
                            <h1 className="sm:text-lg font-bold md:text-xl">Playstation</h1>
                            <p className="relative bottom-0 text-xs py-1">Black and White version of the PS5 coming out on sale.</p>
                             <button className="text-md font-sans underline underline-offset-8 hover:font-bold">Show Now</button>
                        </div>
                        {/** Image */}
                    <Image 
                    src={"/images/playstation.png"}
                    alt="playstation"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded"
                    />

                    </div>
                    {/** right container */}
                    <div className="flex flex-col gap-y-5">
                     <div className="bg-black relative h-full">
                    <div className="absolute left-4 bottom-3">
                    
                    <h1 className="sm:text-lg font-bold md:text-xl">Womens Collection</h1>
                            <p className="relative bottom-0 text-xs py-1">Featured women collections that give you another vibe.</p>
                             <button className="text-md font-sans underline underline-offset-8 hover:font-bold">Show Now</button>

                    </div>
                    <Image
                    src={"/images/women.png"}
                    alt="women image"
                    width={900}
                    height={300}
                    className="w-full h-full object-cover rounded"
                    />

                        </div>

                    {/** speaker */}
                    <div className="flex gap-x-5">
                    <div className="bg-black relative flex justify-center items-center w-[50%] h-full">
                    <div className="absolute left-4 bottom-3">
                    <h1 className="sm:text-sm font-bold md:text-xl"> Speakers</h1>
                    <p className="relative bottom-0 text-xs md:py-1">Amazon wireless speaker</p>
                    <button className="sm:text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold">Show Now</button>
                    </div>
                 <Image
                 src={"/images/spk.png"}
                 alt="spk image"
                 width={200}
                 height={150}
                 className="object-cover rounded"
                 />
                    </div>
                    {/** perfumes */}
                    <div className="bg-black relative flex justify-center items-center w-[50%] h-full">
                    <div className="absolute left-4 bottom-3">
                    <h1 className="sm:text-sm font-bold md:text-xl"> Perfume</h1>
                    <p className="relative bottom-0 text-xs md:py-1">GUCCI INTENSE OUD EDP</p>
                    <button className="sm:text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold">Show Now</button>
                    </div>
                 <Image
                 src={"/images/perfume.png"}
                 alt="perfume image"
                 width={200}
                 height={150}
                 className="object-cover rounded"
                 />
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feature