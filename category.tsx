import { CiMobile4 } from "react-icons/ci";
 import { HiOutlineDesktopComputer } from "react-icons/hi";
 import { BsSmartwatch } from "react-icons/bs";
 import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
 import { GrGamepad } from "react-icons/gr";

function Category(){
    return(
        <div className="w-full flex justify-center items-center mt-10 mb-1">
        <div className="sm:w-full md:w-[80%]  pb-10">
        <div className="flex flex-col sm:pl[6%] md:pl-0">
        <h3 className="text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1">
         {""}
        categories
        </h3>
        <div className="flex">
        <h1 className="text-slate-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">
        {""}
        Browse By Category
        </h1>
        </div>
        </div>  
        {/** categories */}
        <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8">
        {/** Box 1 */}
        <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
        <CiMobile4 className="text-5xl font-bold" />
        <p className="text-bold">phone</p>
        </div>
        {/** Box 2 */}
        <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
        <HiOutlineDesktopComputer className="text-5xl font-bold"/>
        <p className="text-bold">computer</p>
        </div>
        {/** Boxes 3 */}
        <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
        <BsSmartwatch className="text-5xl font-bold"/>
        <p className="text-bold">smart watch</p>
        </div>
        {/** boxes 4 */}
        <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
        <CiCamera className="text-5xl font-bold"/>
        <p className="text-bold">camera</p>
        </div>
        {/** boxes 5 */}
        <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
        <CiHeadphones className="text-5xl font-bold"/>
        <p className="text-bold">headphone</p>
        </div>
        {/** boxes 6 */}
        <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
        <GrGamepad className="text-5xl font-bold"/>
        <p className="text-bold">game</p>

        </div>
        </div>
        </div>
        </div>
        

    )
}
export default Category