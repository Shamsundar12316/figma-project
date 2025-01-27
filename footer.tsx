import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaTwitter } from "react-icons/fa";
function Footer(){
 return(   
    <div className="bg-black text-white pt-10 px-20 font-poppins">
   <div className="container mx-auto">
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-10">
   <div>
  <h2 className="font-medium text-xl">Exclusive</h2>
  <p className="mt-4 text-zinc-200 font-light">Subscribe</p>
  <p className="mt-2 text-zinc-200 font-light">Get 10% off your first order</p>

  <div className="mt-4 relative border border-white rounded">
   <input type="email" 
   placeholder="Enter your email"
   className="bg-black text-white p-2 flex-grow outline-none rounded-lg w-full"/>
   <button type="submit" className="absolute right-0 top-0 py-2  bg-black text-white px-4 rounded-r-md hover:bg-slate-800 h-full
  flex items-center justify-center"
   >
   
   </button>
  </div>
   </div>

   {/** support section */}

   <div>
      <h2 className="font-medium text-xl">Support</h2>
      <p className="mt-4 text-zinc-200 font-light">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
      <p className="mt-4 text-zinc-200 font-light">exclusive@gmail.com</p>
      <p className="mt-4 text-zinc-200 font-light">+88015-88888-9999</p>
   </div>

 {/** Account section */}
 <div>
   <h2 className="font-medium text-xl">Account</h2>
   <ul className="mt-4 space-y-3 text-zinc-200 font-light">
   <li>My Account</li>
   <li>Login/Register</li>
   <li>Cart</li>
   <li>Wishlist</li>
   <li>Shop</li>
   </ul>
 </div>

 {/** Quick section */}

 <div>
   <h2 className="font-medium text-xl">Quick Link</h2>
   <ul className="mt-4 space-y-3 text-zinc-200 font-light">
   <li>Privacy Policy</li>
   <li>Term of use</li>
   <li>FAQ</li>
   <li>Contact</li>
   </ul>
 </div>

 {/** Download app section */}

 <div>
<h2 className="font-medium text-xl">Download App</h2>
<p className="mt-4 text-zinc-200 font-light">Save $3 with App New User only</p>
<div className="mt-4 flex items-center gap-2">
<div className="w-[100px] h-[100px]">
<img src="/images/Qrcode.png" alt="Qr code" className="w-full h-full object-contain" />
</div>
{/** section */}
<div>
  <img src="/images/google.png" alt="google app" className="w-36 h-12 object-contain"/>
  <img src="/images/app.png" alt="play app" className="w-36 h-12 object-contain"/>
</div>
</div>
{/** social media */}
<div className="flex space-x-9 mt-6">
  <a href="#" className="hover:text-grey-400">
  <FaFacebook size={24}/>
  </a>
  
  <a href="#" className="hover:text-grey-400">
  <FaTwitter size={24}/>
  </a>
  
  <a href="#" className="hover:text-grey-400">
  <FaInstagram size={24}/>
  </a>
  
  <a href="#" className="hover:text-grey-400">
  <FaLinkedin size={24}/>
  </a>

</div>

 </div>
   </div>
   {/** end */}
   </div>   
    </div>

 )

}

export default Footer