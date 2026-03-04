import { ShebaCard } from "./shebaCard";

import localFont from "next/font/local";

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


export function LefttSideContent() {
  return (
    <div className="w-full sm:w-5/8">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${solaimanLipi.className}`}
      >
        {/* <!-- Card --> */}
        {items.map((item, index) => (
          <ShebaCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
