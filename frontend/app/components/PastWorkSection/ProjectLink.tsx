import React from 'react';
import { Project } from './PastWorkSection'
// import Image from 'next/image';

interface ProjectProps {
    project: Project;
    buttonClasses: string;
    setHoveredProjectName: (name: string | null) => void;
}

export default function ProjectLink({ project, buttonClasses, setHoveredProjectName }: ProjectProps) {
    const { name, img_path } = project;
    return (
        <button className={buttonClasses}
                onMouseEnter={() => setHoveredProjectName(name)}
                onMouseLeave={() => setHoveredProjectName(null)}
        >
            <div className="relative">
                <h3>{name}</h3>
                <img className="w-full h-full" src={img_path} alt={`${name} project image`} />
            </div>
        </button>
    )
}