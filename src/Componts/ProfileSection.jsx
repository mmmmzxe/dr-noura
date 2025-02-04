import React from "react";
import { useTranslation } from "react-i18next";
import { BiSolidPhone } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import dr from '../assets/hero.jpg';

const ProfileSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row container items-center justify-center min-h-screen p-6">
      <div className="md:w-1/2 w-full flex ">
        <img src={dr} alt="Profile" className="object-contain max-h-[600px] w-full rounded" />
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left mt-6 md:mt-0 md:pl-10">
        <p className="text-gray-800 text-lg leading-relaxed">{t("profile.description")}</p>
        <h2 className="mt-4 text-4xl text-black font-signature">{t("profile.doctor_name")}</h2>
      </div>

      <div className="fixed left-4 top-1/3 z-50 flex flex-col gap-10">
        <a href="#" className="text-black text-2xl"><BsWhatsapp/></a>
        <a href="#" className="text-black text-2xl"><IoLocationOutline/></a>
        <a href="#" className="text-black text-2xl"><BiSolidPhone/></a>
      </div>
    </div>
  );
};

export default ProfileSection;
