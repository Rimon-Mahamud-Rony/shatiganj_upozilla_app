import { DrawerScrollableContet } from "./DrawerScrollableContet";
import { Noto_Serif_Bengali } from "next/font/google";
import localFont from "next/font/local";
import { IoHome } from "react-icons/io5";
import { ImAddressBook } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
import { RiLoginBoxFill } from "react-icons/ri";


  const notoSerifBengali = Noto_Serif_Bengali({
    variable: "--font-bengali",
    subsets: ["bengali"],
    weight: ["400", "500", "600", "700"],
  });

const solaimanLipi = localFont({
  src: "../../source/font/SolaimanLipi.ttf",
  weight: "400",
  style: "normal",
});

export function Navbar() {
  
    return (
      <header className="text-gray-600 body-font bg-white/40 backdrop-blur-md">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center shadow-sm blur-in-md">
          <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
            <span
              className={`ml-3 text-3xl font-semibold text-green-700 ${solaimanLipi.className}`}
            >
              জনসেবায় শান্তিগঞ্জ
            </span>
          </a>
          <nav
            className={`md:ml-auto flex flex-wrap items-center text-sm justify-center ${solaimanLipi.className}`}
          >
            <a
              href="http://localhost:3000/"
              className="mr-5 text-gray-900 cursor-pointer hover:text-green-500"
            >
              <div className="flex flex-row gap-x-1 text-xl">
                <IoHome className="text-sm sm:text-base mt-1" />
                <p className="text-md sm:text-xl font-light">হোম</p>
              </div>
            </a>

            <a
              href="http://localhost:3000/"
              className="mr-5 text-gray-900 cursor-pointer hover:text-green-500"
            >
              <div className="flex flex-row gap-x-1 text-xl">
                <ImAddressBook className="text-sm sm:text-base mt-1" />
                <p className="text-md sm:text-xl font-light">যোগাযোগ</p>
              </div>
            </a>

            <a
              href="http://localhost:3000/"
              className="mr-5 text-gray-900 cursor-pointer hover:text-green-500"
            >
              <div className="flex flex-row gap-x-1 text-xl">
                <IoMdNotifications className="text-sm sm:text-base mt-1" />
                <p className="text-md sm:text-xl font-light">নোটিফিকেশন</p>
              </div>
            </a>

            <a
              href="http://localhost:3000/"
              className="mr-5 text-gray-900 cursor-pointer hover:text-green-500"
            >
              <div className="flex flex-row gap-x-1 text-xl">
                <RiLoginBoxFill className="text-sm sm:text-base mt-1" />
                <p className="text-md sm:text-xl font-light">ইউনিয়ন লগইন</p>
              </div>
            </a>

            <a className="inline-flex items-center text-base">
              <DrawerScrollableContet />
            </a>
          </nav>
        </div>
      </header>
    );
}