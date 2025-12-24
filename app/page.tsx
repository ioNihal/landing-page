import AgenticAITools from "@/components/AgenticAITools/AgenticAITools";
import CTA from "@/components/CTA/CTA";
import Hero from "@/components/Hero/Hero";
import LatestTools from "@/components/LatestTools/LatestTools";
import LogoCloud from "@/components/LogoCloud";
import TopAITools from "@/components/TopAITools/TopAITools";
import TrendingTopics from "@/components/TrendingTopics";


export default function Home() {
  return (
    <main>
      <Hero />
      <LatestTools />
      <TopAITools />
      <CTA />
      <TrendingTopics />
      <LogoCloud />
      <AgenticAITools />
    </main>
  );
}
