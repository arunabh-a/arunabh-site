import Hero from "@/components/custom/Hero";
import { Particles } from "@/components/ui/ParticlesBackground";
import Contact from "@/components/containers/Contact";

export default function Home() {


  return (
    <div className="flex flex-col overflow-x-hidden gap-20">
        <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color="#6B7280"
            refresh
        />

        <Hero />
    </div>
  );
}
