import React from 'react'
import logo from '../assets/logo.png';

import { MdMenu } from "react-icons/md";
import Button from "../locales/Button";
export default function Nav() {
  return (
    <div className="fixed bg-gradient-to-t z-50  to-[#ffffffee] top-0 py-2  flex items-center space-x-4 w-full justify-between">
      <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center  flex-col space-x-4">
       <img
        src={logo}
        alt="Logo"
        className="w-20 h-20 object-cover rounded-full"></img>
        <h6 className="text-sm">Dr.Noura fouad</h6>
       </div>
       <div className="flex  items-center gap-10">
      <Button/>
        <div>
        <button className="px-2 py-1 border bg-[#dfdcd4]  text-black text-[14px] hover:bg-white hover:border-[#dfdcd4] transition transform duration-500 ">BOOK AN APPOINTMENT</button>

        </div>
<div><MdMenu size={40}></MdMenu></div>
       </div>
      </div>
       
      </div>
  )
}
