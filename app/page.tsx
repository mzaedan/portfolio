import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { RecentThinking } from "@/components/sections/RecentThinking";
import { TechnicalPalette } from "@/components/sections/TechnicalPalette";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <RecentThinking />
      <TechnicalPalette />
    </>
  );
}
