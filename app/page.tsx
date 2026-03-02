import Image from "next/image";
import { Navbar } from "@/components/shared/navbar";
import { Banner } from "@/components/shared/banner";
import { Content } from "@/components/shared/content";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Content/>
    </div>
  );
}
