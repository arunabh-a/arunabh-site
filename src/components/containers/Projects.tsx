import React from 'react';
import { HoverEffect } from '@/components/ui/card-hover';
import AnimatedContent from '@/components/ui/animated-content';

const Projects = () => {

        const project_tiles = [
            {
            title: "Reptiq",
            description:
                "A Money Ledger App that helps you keep track of your expenses and income.",
            link: "https://github.com/arunabh-a/Reptiq",
            },
            {
            title: "Shirclex",
            description:
                "A ThreeJS Application for rendering 3D Shirt Models with Logos and Textures.",
            link: "https://github.com/arunabh-a/Shirclex",
            },
            {
            title: "TabenSpace",
            description:
                "A Web Application for creating and managing your own Custom Tabs.",
            link: "https://github.com/arunabh-a/Tabenspace",
            },
            {
            title: "ParTable",
            description:
                "A React Application for creating Dynamic Tables with Custom Data.",
            link: "https://github.com/arunabh-a/ParTable",
            },
            {
            title: "Social-Linktree",
            description:
                "Custom-Made Social Tree for my Social Handles along with some other links.",
            link: "https://github.com/arunabh-a/My-Socials",
            },
            {
            title: "SDM",
            description:
                "A Suspect Detection Model used to analyse and flag potential suspects.",
            link: "https://github.com/hack-black-pearl/Suspect_Detection_Model",
            },
        ];

    return (
        <div className='h-screen md:padding-container max-container'>
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
                <h1 className='heading-text'>Stuff I Made</h1>
            </AnimatedContent>

            <div className="max-w-6xl mx-auto px-20  mt-20">
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
                    <HoverEffect items={project_tiles} />
                </AnimatedContent>
            </div>

            
        </div>
    );
    };

export default Projects;

