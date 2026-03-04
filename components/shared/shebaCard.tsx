"use client";

import { motion } from "framer-motion";
import { TiTickOutline } from "react-icons/ti";

type Item = {
  id: number;
  title: string;
  description: string;
};

type ShebaCardProps = {
  item: Item;
  index: number;
};

export function ShebaCard({ item, index }: ShebaCardProps) {
  return (
    <motion.div
      initial={{
        x: index % 2 === 0 ? -20 : 20,
        opacity: 0,
      }}
      whileInView={{ x: 0, opacity: 1 }} // ✅ Scroll এ animate হবে
      viewport={{
        once: true, // একবারই animate হবে
        amount: 0.1, // 10% visible হলে trigger
      }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
      }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:border border-blue-400 transition duration-300"
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
  );
}