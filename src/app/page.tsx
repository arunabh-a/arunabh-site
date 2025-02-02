import About from "@/components/containers/About";
// import Contact from "@/components/containers/Contact";
import Hero from "@/components/containers/Hero";
import Projects from "@/components/containers/Projects";
import { ShootingStars } from "@/components/ui/shooting-star-bg";

export default function Home() {
  return (
    <div >
        <Hero />
        <About />
        {/* <Projects /> */}
        {/* <Contact /> */}
        <ShootingStars />
        {/* <StarsBackground /> */}
    </div>
  );
}
