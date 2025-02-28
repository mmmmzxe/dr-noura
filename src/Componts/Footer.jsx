import React from "react";
import { useTranslation } from "react-i18next";

import logo from "../assets/logo.png"; // ضع مسار الشعار هنا

export default function Footer() {


  return (
    <footer className="w-full border-t py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-16 mb-2" />
          <h6 className="text-sm">Dr.Noura fouad</h6>
          <p className="text-sm text-gray-700">Plastic & Aesthetic Surgeon</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap gap-3 md:gap-0 justify-start md:justify-between w-full md:w-2/3 text-center md:text-left mt-4 md:mt-0">
          <div className="md:w-1/3 w-full">
            <p className="font-semibold text-gray-800">Services</p>
            <a href="#" className="text-sm text-gray-600 hover:underline block">3D Analysis</a>
            <a href="#" className="text-sm text-gray-600 hover:underline block">Academy</a>
            <a href="#" className="text-sm text-gray-600 hover:underline block">Contact</a>
          </div>

          <div className="md:w-1/3 w-full">
            <p className="font-semibold text-gray-800">Follow Us</p>
            <a href="#" className="text-sm text-gray-600 hover:underline block">Instagram</a>
            <a href="#" className="text-sm text-gray-600 hover:underline block">LinkedIn</a>
          </div>

          <div className="md:w-1/3 w-full">
            <p className="font-semibold text-gray-800">Legal</p>
            <a href="#" className="text-sm text-gray-600 hover:underline block">Impressum</a>
            <a href="#" className="text-sm text-gray-600 hover:underline block">Datenschutzerklärung</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
