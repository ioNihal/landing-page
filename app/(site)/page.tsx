import About from "@/components/About/About";

import CTA from "@/components/CTA/CTA";
import Hero from "@/components/Hero/Hero";
import LatestTools from "@/components/LatestTools/LatestTools";
import LazySection from "@/components/LazySection";
import TopAITools from "@/components/TopAITools/TopAITools";
import TrendingTopics from "@/components/TrendingTopics/TrendingTopics";
import dynamic from "next/dynamic";


const LogoCloud = dynamic(() => import("@/components/LogoCloud"), {
  loading: () => <div className="h-32" />,
});

const AgenticAITools = dynamic(
  () => import("@/components/AgenticAITools/AgenticAITools"),
  {
    loading: () => <div className="h-64" />,
  }
);

export default function Home() {
  return (
    <>
      <Hero />
      <LatestTools />
      <TopAITools />
      <CTA />
      <TrendingTopics />
      <LazySection>
        <LogoCloud />
      </LazySection>

      <LazySection>
        <AgenticAITools />
      </LazySection>
      <About />
    </>
  );
}
