"use client";

import { motion } from "framer-motion";

const ReferralText = () => {
  return (
    <motion.p
      initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
        delay: 0.8,
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        }}
      className="
  absolute z-30 hidden lg:block
  left-[48%] top-[74%]
  max-w-[850px]
  text-white text-2xl xl:text-[36px]
   leading-snug
"
    >
      Pomozte nám růst a získejte odměnu za každé úspěšné doporučení.
    </motion.p>
  );
};

export default ReferralText;