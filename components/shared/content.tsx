
import { Montserrat } from "next/font/google";

import { LefttSideContent } from "./leftSideContent";
import { RightSideContent } from "./rightSideContent";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});




export function Content() {
  return (
    <div className={`w-full sm:w-11/12 px-1 sm:px-4 py-10 m-auto ${montserrat.className}`}>
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
        <LefttSideContent/>
        

        {/* <!-- ========================= -->
            <!-- Right Side: Content -->
            <!-- ========================= --> 
        */}

        <RightSideContent/>
      </div>
    </div>
  );
}
