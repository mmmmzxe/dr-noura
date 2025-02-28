import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BiLogoInstagram, BiSolidPhone } from "react-icons/bi";
import { BsSnapchat, BsTiktok, BsWhatsapp } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dr from "../assets/hero.jpg";

const ProfileSection = () => {
  const { t } = useTranslation();
  
  // التحكم في الأنيميشن عند التمرير
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="flex flex-col md:flex-row container items-center justify-center min-h-screen p-6">
      {/* صورة البروفايل مع تأثير دخول */}
      <motion.div 
        ref={ref} 
        className="md:w-1/2 w-full flex"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } }
        }}
      >
        <img src={dr} alt="Profile" className="object-contain max-h-[600px] w-full rounded" />
      </motion.div>

      {/* النصوص مع تأثير دخول */}
      <motion.div 
        ref={ref} 
        className="md:w-1/2 w-full text-center md:text-left mt-6 md:mt-0 md:pl-10"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } }
        }}
      >
        <p className="text-gray-800 text-lg leading-relaxed">{t("profile.description")}</p>
        <h2 className="mt-4 text-4xl text-black font-signature">{t("profile.doctor_name")}</h2>
      </motion.div>

      {/* أيقونات التواصل الاجتماعي مع تأثير النبض */}
      <motion.div 
        className="fixed left-4 top-1/3 z-50 flex flex-col gap-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
      >
        {[
          { href: "https://wa.me/201128618227", icon: <BsWhatsapp /> },
          { href: "https://maps.app.goo.gl/o22XcRD8MouJAcY36", icon: <IoLocationOutline /> },
          { href: "https://www.instagram.com/dr.noura.fouad", icon: <BiLogoInstagram /> },
          { href: "https://snapchat.com/t/ym1vuJyz", icon: <BsSnapchat /> },
          { href: "https://www.tiktok.com/@dr.noura.fouad", icon: <BsTiktok /> },
        ].map(({ href, icon }, index) => (
          <motion.a
            key={index}
            href={href}
            className="text-black text-2xl"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default ProfileSection;
