import React from 'react';
import './styles/Projects.css';
import Carousel from '../components/carousel/carousel';
import { HoverEffect } from '../components/ui/card-hover';
import { Element } from 'react-scroll';
import FadeInWhenVisible from '../components/Fade-in-visible';


const Projects = () => {

        const project_tiles = [
            {
            title: "Reptiq",
            description:
                "A Money Ledger App that helps you keep track of your expenses and income. Made with FLutter.",
            link: "https://github.com/arunabh-a/Reptiq",
            },
            {
            title: "Shirclex",
            description:
                "A ThreeJS Application for rendering 3D Shirt Models with Logos and Textures.",
            link: "https://github.com/arunabh-a/Shirclex",
            },
            {
            title: "FitnestX-UI",
            description:
                "A Fitness-based Meal Planner and Diet Mobile app UI. Made using Flutter.",
            link: "https://github.com/arunabh-a/FitnestX-UI",
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
            title: "100-Days-of-Python",
            description:
                "A 100 Days of Code Challenge for Python. Contains all the code and projects I made during the challenge.",
            link: "https://github.com/arunabh-a/100-Days-of-Python",
            },
        ];

    return (
        <Element name = "projects">
        <div className='mb-20'>
            <FadeInWhenVisible>
                <h1 className='text-6xl title relative left-20 mb-20'>Stuff I Made</h1>
            </FadeInWhenVisible>
            {/* <Carousel /> */}
            <div className="max-w-6xl mx-auto px-20  mt-20">
                <FadeInWhenVisible>
                    <HoverEffect items={project_tiles} />
                </FadeInWhenVisible>
            </div>

            
        </div>
        </Element>
    );
    };

export default Projects;

