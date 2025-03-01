import About from "@/components/containers/About";
import { Experience } from "@/components/containers/Experience";
import Footer from "@/components/containers/Footer";
import Hero from "@/components/containers/Hero";
import Projects from "@/components/containers/Projects";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden gap-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
    </div>
  );
}
