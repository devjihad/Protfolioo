import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo-2418159_1280-removebg-preview.png'
const Navbar = () => {
    return (
       <div className=" bg-gray-100 text-gray-900 font-sans">
               {/* Navbar */}
               <nav className="w-full bg-white shadow ">
                 <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                  <img className='w-[70px] h-[70px]' src={logo} alt="" />
                   <ul className="flex gap-6 text-lg">
                     <Link to="/" className="hover:text-blue-600">Home</Link>
                     <Link to="/about" className="hover:text-blue-600">About</Link>
                     <Link to="/contact" className="hover:text-blue-600">Contact</Link>
                   </ul>
                 </div>
               </nav>
       
               
               
             </div>
    );
};

export default Navbar;