"use client";

import React, { useEffect } from 'react';
// import Image from 'next/image';
import ProjectLink from "./ProjectLink";

export interface Project {
    name: string;
    img_path: string;
}

const projects: Project[] = [
    {
        name: "Project 1",
        img_path: ""
    },
    {
        name: "Project 2",
        img_path: ""
    },
    {
        name: "Project 3",
        img_path: ""
    },
    {
        name: "Project 4",
        img_path: ""
    },
];

export default function PastWorkSection(): React.ReactNode {
    const [ expandedIndex, setExpandedIndex ] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setExpandedIndex(prevExpandedIndex => (prevExpandedIndex + 1) % projects.length);
        }, 1000);

        return () => clearInterval(interval);
    })

    return (
        <section className="max-w-screen-2xl w-full mx-auto py-12 px-6"> {/* PastWork section container */}
            <div className="relative flex items-center mb-10"> {/* header container */}
                <h1 className="text-4xl font-black">Our Past Work</h1>
                <div className="absolute right-0 w-[calc(100%-350px)] rounded-full h-4 bg-primary"></div>
            </div>
            <div className={"flex w-full gap-4 h-[500px]"}>
                {projects.map((project, index) => {
                    return <ProjectLink key={crypto.randomUUID()} project={project} isExpanded={expandedIndex === index} />
                })}
            </div>
        </section>
    )
}
