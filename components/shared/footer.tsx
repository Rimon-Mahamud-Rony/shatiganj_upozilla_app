import { IoHome } from "react-icons/io5";
import { ImAddressBook } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
import { RiLoginBoxFill } from "react-icons/ri";

export default function Footer() {
  return (
    <main>
      <div className="h-10"></div>
      <footer className="text-gray-600  text-center py-4 fixed bottom-0 bg-white/60 backdrop-blur-md w-full">
        <div id="mobile menu" className="block sm:hidden">
          <div className="w-full px-1 flex flex-row justify-around items-center gap-x-1">
            <a
              href="http://localhost:3000/"
              className="mr-5 text-gray-900 cursor-pointer hover:text-green-500"
            >
              <div className="flex flex-row gap-x-1 text-xl">
                <IoHome className="text-xs mt-1" />
                <p className="text-sm font-light">হোম</p>
              </div>
            </a>

            <a
              href="http://localhost:3000/"
              className="mr-5 text-gray-900 cursor-pointer hover:text-green-500"
            >
              <div className="flex flex-row gap-x-1 text-xl">
                <ImAddressBook className="text-xs mt-1" />
                <p className="text-sm font-light">যোগাযোগ</p>
              </div>
            </a>

            <a
              href="http://localhost:3000/"
              className="mr-5 text-gray-900 cursor-pointer hover:text-green-500"
            >
              <div className="flex flex-row gap-x-1 text-xl">
                <IoMdNotifications className="text-xs mt-1" />
                <p className="text-sm font-light">নোটিফিকেশন</p>
              </div>
            </a>

            <a
              href="http://localhost:3000/"
              className="mr-5 text-gray-900 cursor-pointer hover:text-green-500"
            >
              <div className="flex flex-row gap-x-1 text-xl">
                <RiLoginBoxFill className="text-xs mt-1" />
                <p className="text-sm font-light">ইউনিয়ন লগইন</p>
              </div>
            </a>
          </div>
        </div>
        <div id="desktop menu" className="hidden sm:block">
          this is desktop menu
        </div>
      </footer>
    </main>
  );
}
