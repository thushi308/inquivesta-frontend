import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedEvents from "@/components/sections/FeaturedEvents";
import EventsCTA from "@/components/sections/EventsCTA";
import Sponsors from "@/components/sections/Sponsors";
import WaveDivider from "@/components/ui/WaveDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WaveDivider from="board" to="paper" />

      <About />
      <WaveDivider from="paper" to="board" />

      <FeaturedEvents />
      <WaveDivider from="board" to="paper" />

      <EventsCTA />
      <Sponsors />
      <WaveDivider from="paper" to="board" />
    </>
  );
}
