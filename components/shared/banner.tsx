"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

const solaimanLipi = localFont({
  src: "../../source/font/SolaimanLipi.ttf",
  weight: "400",
  style: "normal",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export function Banner() {
  return (
    <div
      className="
            relative w-full min-h-[60vh] sm:min-h-[75vh] md:min-h-[80vh]
    bg-[url('/images/shantiganj_banner.jpg')]
    bg-cover bg-center bg-no-repeat
    flex items-center justify-center mt-20 sm:mt-0"
    >
      {/* <!-- Dark Overlay --> */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>

      {/* <!-- Content --> */}
      <div
        className="relative z-10 flex flex-col items-center justify-center 
              text-center text-white px-4 sm:px-8"
          >
              <motion.h1
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: .3 }}
                  className={`text-xl sm:text-2xl md:text-4xl  drop-shadow-lg p-5 text-white ${montserrat.className}`}
        >
          Welcome to Shantiganj, the place, where you can find the beauty of
          nature.....
        </motion.h1>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: .3 }}
          className={`mt-4 text-md sm:text-xl md:text-2xl drop-shadow-md border border-green-400 p-5 rounded-sm ${solaimanLipi.className}`}
        >
          সুন্দর ও শান্ত পরিবেশে আপনাকে স্বাগতম
        </motion.div>

        <button className="mt-6 px-6 py-3 border border-green-500 bg-green-700 hover:bg-green-500 rounded-sm transition duration-300 cursor-pointer">
          Explore More
        </button>
      </div>
    </div>
  );
}
