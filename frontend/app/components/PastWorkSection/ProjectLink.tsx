import React from 'react';
import { Project } from './PastWorkSection'

interface ProjectProps {
    project: Project;
    isExpanded: boolean;
}

export default function ProjectLink({ project, isExpanded }: ProjectProps) {
    const { name, img_path } = project;
    return (
        <button className={`h-full rounded-xl border-2 transition-all duration-500 ease-in-out ${
            isExpanded ? "w-full" : " hover:w-full w-40"
        }`}>
            <div className="relative">
                <h3>{name}</h3>
                <img className="w-full h-full" src={img_path} alt={`${name} project image`} />
            </div>
        </button>
    )
}