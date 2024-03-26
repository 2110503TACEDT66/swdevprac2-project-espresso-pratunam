import BannerPremium from "@/components/bannerpremium";
import RecommendSectionpre from "@/components/recommendsectionpre";
import TopPremium from "@/components/toppremium";

export default function Home() {
  return (
    <main className="flex flex-col">
      <TopPremium></TopPremium>
      <BannerPremium/>
      <RecommendSectionpre/>
    </main>
  );
}
