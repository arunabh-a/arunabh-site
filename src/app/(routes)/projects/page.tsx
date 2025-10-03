import ProjectCard from '@/components/custom/ProjectCard'
import React from 'react'
import { PROJECTS_CONTENT } from '@/lib/constants'
const Page = () => {
    return (
        <div className='max-w-5xl flex flex-col items-center p-5 mx-auto'>
            <div className='grid grid-cols-2 gap-6 w-full'>
                {PROJECTS_CONTENT.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        name={project.name} 
                        description={project.description} 
                        techStack={project.techStack} 
                        imageUrl={project.imageUrl} 
                        websiteUrl={project.websiteUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default Page