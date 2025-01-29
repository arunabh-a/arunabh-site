import About from "@/components/containers/About";
// import Contact from "@/components/containers/Contact";
import Hero from "@/components/containers/Hero";
import Projects from "@/components/containers/Projects";

export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Projects />
        {/* <Contact /> */}
    </div>
  );
}
