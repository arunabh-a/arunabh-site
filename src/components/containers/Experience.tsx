import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import AnimatedContent from "../ui/animated-content";

export function Experience() {
  const data = [
    {
      title: "2021-22",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-normal mb-8">
            Started my journey as a Web Developer.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Joined Google Developer Student Club - LPU as a Web Team Member
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://www.freepik.com/free-photo/mom-spending-time-with-kid-beach_78594638.htm#fromView=serie&position=48&from_element=series_block"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-normal mb-8">
            Started working on some projects. 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://www.freepik.com/free-photo/mom-spending-time-with-kid-beach_78594638.htm#fromView=serie&position=48&from_element=series_block"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="font-euclid">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-normal mb-8">
            Participated in Hackathons
          </p>
          <div className="mb-8">
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://www.freepik.com/free-photo/mom-spending-time-with-kid-beach_78594638.htm#fromView=serie&position=48&from_element=series_block"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="">
        <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
        >
            <h1 className='heading-text'>Journey so far</h1>
        </AnimatedContent>
      <Timeline data={data} />
    </div>
  );
}
