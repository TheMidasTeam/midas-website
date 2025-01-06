import React from 'react';
import {Project} from './PastWorkSection'

// import Image from 'next/image';

interface ProjectProps {
    project: Project;
    buttonClasses: string;
    setHoveredProjectName: (name: string | null) => void;
}

export default function ProjectLink({project, buttonClasses, setHoveredProjectName}: ProjectProps) {
    const {name, img_path} = project;
    return (
        <button className={buttonClasses}
                onMouseEnter={() => setHoveredProjectName(name)}
                onMouseLeave={() => setHoveredProjectName(null)}
        >
            <div className={`w-full h-full bg-no-repeat bg-top bg-[length:auto_800px]`} style={{
                backgroundImage: `url(${img_path})`,
            }}>
                <div className="bg-black bg-opacity-80 w-full h-full flex justify-center items-center px-4">
                    <h3 className="whitespace-pre-wrap">{name}</h3>
                </div>
            </div>
        </button>
    )
}