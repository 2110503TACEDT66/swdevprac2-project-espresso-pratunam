import Banner from "@/components/banner";
import TopMenu from "@/components/topmenu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <TopMenu></TopMenu>
      <Banner/>
    </main>
  );
}
