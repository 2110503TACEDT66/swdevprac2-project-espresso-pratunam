import Banner from "@/components/banner";
import RecommendSection from "@/components/recommendsection";
import TopMenu from "@/components/topmenu";

export default function Home() {
  return (
    <main className="flex flex-col">
      <TopMenu></TopMenu>
      <Banner/>
      <RecommendSection/>
    </main>
  );
}
