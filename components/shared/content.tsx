"use client";

import { motion } from "framer-motion";
import { TiTickOutline } from "react-icons/ti";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});
const solaimanLipi = localFont({
  src: "../../source/font/SolaimanLipi.ttf",
  weight: "400",
  style: "normal",
});

const items = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: `Item ${i + 1}`,
  description: `This is item ${i + 1}`,
}));

export function Content() {
  return (
    <div className={`w-10/12 px-1 sm:px-4 py-10 m-auto ${montserrat.className}`}>
      {/* <!-- Main Container --> */}
      <div
        className="px-8 m-auto 
              flex flex-col sm:flex-row gap-6 sm:gap-x-20"
      >
        {/* <!-- ========================= -->
                <!-- Left Side: Items Cards -->
                <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: .5 }}
          className={`mt-4 text-md sm:text-xl md:text-2xl drop-shadow-md border border-green-400 p-5 rounded-sm ${solaimanLipi.className}`}
        >
                <!-- ========================= --> */}

        <div className="w-full sm:w-5/8">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${solaimanLipi.className}`}
          >
            {/* <!-- Card 1 --> */}
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  x: index % 2 === 0 ? -300 : 300,
                  opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }} // ✅ Scroll এ animate হবে
                viewport={{
                  once: true, // একবারই animate হবে
                  amount: 0.3, // 30% visible হলে trigger
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:border border-green-300 transition duration-300"
              >
                <h3 className="text-lg font-semibold text-center py-2">
                  সেবাবক্স {item.id + 1}
                </h3>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="/images/logo.jpg"
                    alt=""
                    className="w-10 sm:w-16 h-auto rounded-full"
                  />
                </div>
                <div className="flex flex-row justify-start items-center gap-x-2">
                  <div className="p-1 text-green-500">
                    <TiTickOutline />
                  </div>
                  <div>
                    <p>সেবা সংক্রান্ত তথ্য ১</p>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center gap-x-2">
                  <div className="p-1 text-green-500">
                    <TiTickOutline />
                  </div>
                  <div>
                    <p>সেবা সংক্রান্ত তথ্য ২</p>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center gap-x-2">
                  <div className="p-1 text-green-500">
                    <TiTickOutline />
                  </div>
                  <div>
                    <p>সেবা সংক্রান্ত তথ্য ৩</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <!-- ========================= -->
                <!-- Right Side: Content -->
                <!-- ========================= --> */}

        <div className="w-full sm:w-3/8 flex flex-col justify-center bg-white p-6">
          <h2 className="text-3xl font-bold mb-4">Right Side Content</h2>

          <p className="text-gray-600 leading-relaxed">
            এখানে আপনার বিস্তারিত কন্টেন্ট থাকবে। মোবাইলে এটি নিচে থাকবে এবং বড়
            স্ক্রিনে ডান পাশে থাকবে।
          </p>

          <button
            className="mt-6 px-6 py-3 bg-blue-600 text-white 
                     rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
