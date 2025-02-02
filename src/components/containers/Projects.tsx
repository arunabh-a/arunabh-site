import React from 'react';
import { HoverEffect } from '../ui/card-hover';
// import { Element } from 'react-scroll';
// import FadeInWhenVisible from '../Fade-in-visible';


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
        <div className='h-screen padding-container max-container'>
            {/* <FadeInWhenVisible> */}
                <h1 className='text-6xl title relative left-20 mb-20'>Stuff I Made</h1>
            {/* </FadeInWhenVisible> */}

            <div className="max-w-6xl mx-auto px-20  mt-20">
                {/* <FadeInWhenVisible> */}
                    <HoverEffect items={project_tiles} />
                {/* </FadeInWhenVisible> */}
            </div>

            
        </div>
    );
    };

export default Projects;

