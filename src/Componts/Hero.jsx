import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FaceJourney = () => {
  // التحكم في الأنيميشن بناءً على التمرير
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* صورة الخلفية مع تأثير دخول عند التمرير */}
      <motion.img
        ref={ref}
        src="https://img.freepik.com/free-photo/woman-morning-with-black-white-effect_23-2147656965.jpg"
        alt="Face Close-up"
        className="absolute w-full h-full object-cover brightness-90"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { scale: 1.2, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
        }}
      />

      {/* تأثير التدرج */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>

      {/* النصوص مع تأثيرات عند التمرير */}
      <motion.div
        ref={ref}
        className="absolute left-14 bottom-32 text-left max-w-md"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
        }}
      >
        <motion.h1
          className="text-4xl font-bold text-black"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
          }}
        >
          Journey of the Face<sup>®</sup>
        </motion.h1>

        <motion.p
          className="mt-4 text-black text-lg"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.7 } },
          }}
        >
          Life is a journey. We change over the years. We cannot stop the time, even if we wanted. But the clock all leave inconspicuously slightly slower ticking?
        </motion.p>

        <motion.a
          href="#"
          className="mt-6 inline-block text-black font-bold underline"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.9 } },
          }}
          whileHover={{ scale: 1.1, x: 5 }}
        >
          MORE →
        </motion.a>
      </motion.div>
    </div>
  );
};

export default FaceJourney;
