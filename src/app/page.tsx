"use client";
import About from "@/components/containers/About";
import { Experience } from "@/components/containers/Experience";
import Hero from "@/components/containers/Hero";
import Projects from "@/components/containers/Projects";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { Particles } from "@/components/ui/ParticlesBackground";
import Contact from "@/components/containers/Contact";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

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
        <div className="flex flex-col lg:max-container padding-container md:px-10 space-y-20">
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    </div>
  );
}
