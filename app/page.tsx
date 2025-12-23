import CTA from "@/components/CTA/CTA";
import Hero from "@/components/Hero/Hero";
import LatestTools from "@/components/LatestTools/LatestTools";
import TopAITools from "@/components/TopAITools/TopAITools";


export default function Home() {
  return (
    <main>
      <Hero />
      <LatestTools />
      <TopAITools />
      <CTA />
    </main>
  );
}
