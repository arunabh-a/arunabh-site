"use client";
import About from "@/components/containers/About";
import { Experience } from "@/components/containers/Experience";
import Hero from "@/components/containers/Hero";
import Projects from "@/components/containers/Projects";
import { useEffect, useState } from "react";
import Loading from "./loading";

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
            
        <Hero />
        <div className=" max-container padding-container md:px-10">
            <About />
            {/* <Experience /> */}
            <Projects />
        </div>
    </div>
  );
}
