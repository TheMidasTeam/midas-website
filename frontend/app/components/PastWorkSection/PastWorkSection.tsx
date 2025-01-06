"use client";

import React, { useState, useEffect } from 'react';
import ProjectLink from "./ProjectLink";

export interface Project {
    name: string;
    img_path: string;
}

const projects: Project[] = [
    {
        name: "Piano\nOrganization",
        img_path: "/images/projects/piano-org.png"
    },
    {
        name: "Whittier\nDental",
        img_path: "/images/projects/dentist-whittier.png"
    },
    {
        name: "Photo\nBooth",
        img_path: "/images/projects/photo-booth.png"
    },
    {
        name: "Influencer\nMarketing",
        img_path: "/images/projects/influencer-marketing.png"
    },
];

export default function PastWorkSection(): React.ReactNode {
    const [expandedIndex, setExpandedIndex] = React.useState(0);
    //
    const [hoveredProjectName, setHoveredProjectName] = useState<string | null>(null); // Index of the hovered element

    useEffect(() => {
        const interval = setInterval(() => {
            setExpandedIndex(prevExpandedIndex => (prevExpandedIndex + 1) % projects.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="max-w-screen-2xl w-full mx-auto py-12 px-6"> {/* PastWork section container */}
            <div className="relative flex items-center mb-10"> {/* header container */}
                <h1 className="text-4xl font-black">Our Past Work</h1>
                <div className="absolute right-0 w-[calc(100%-350px)] rounded-full h-4 bg-primary"></div>
            </div>
            <div className={"flex w-full gap-4 h-[500px]"}>
                {projects.map((project, index) => {
                    const isExpanded = expandedIndex === index;
                    const isHovered = hoveredProjectName === project.name;
                    const buttonClasses = `
                        h-full rounded-xl transition-all duration-500 ease-in-out overflow-hidden
                        ${isHovered
                            ? "w-full" // Hovered element expands
                            : isExpanded && hoveredProjectName === null
                                ? "w-full" // Expanded when no hover
                                : "w-80" // Contracted for all other cases
                        }`;
                    return <ProjectLink
                        key={project.name}
                        project={project}
                        buttonClasses={buttonClasses}
                        setHoveredProjectName={setHoveredProjectName}
                    />
                })}
            </div>
        </section>
    )
}
