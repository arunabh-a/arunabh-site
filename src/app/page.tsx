import About from "@/components/containers/About";
import { Experience } from "@/components/containers/Experience";
import Footer from "@/components/containers/Footer";
import Hero from "@/components/containers/Hero";
import Projects from "@/components/containers/Projects";

export default function Home() {
  return (
    <div >
        
        <Hero />
        <About />
        <Experience />
        <Projects />
    </div>
  );
}
