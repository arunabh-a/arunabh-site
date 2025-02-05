import React from 'react'

const TechStack = () => {
  const techs = [
    'React', 'NextJS', 'ThreeJS', 'TypeScript', 'Python', 'HTML/CSS', 
    'JavaScript', 'SQL', 'NodeJS', 'ExpressJS', 'Git', 'GitHub', 
    'Linux', 'Bash Shell', 'Flutter',  'Dart', 'PostgreSQL', 'Vercel', 
    'MongoDB', 'Firebase', 'Tailwind', 'Tensorflow', 'Google Cloud'
  ];

  return (
    <div>TechStack
        <ul>
            {techs.map((tech, index) => (
                <li key={index}>{tech}</li>
            ))}
        </ul>
    </div>
  )
}

export default TechStack