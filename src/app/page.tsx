import Banner from "@/components/banner";
import TopMenu from "@/components/topmenu";
import { connectToMongo } from "@/dbconfig/dbconfig";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <TopMenu></TopMenu>
      <Banner/>
    </main>
  );
}
