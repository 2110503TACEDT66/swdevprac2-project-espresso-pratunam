import Banner from "@/components/banner";
import RecommendSection from "@/components/recommend";
import TopMenu from "@/components/topmenu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <TopMenu></TopMenu>
      <Banner/>
      <RecommendSection/>
    </main>
  );
}
