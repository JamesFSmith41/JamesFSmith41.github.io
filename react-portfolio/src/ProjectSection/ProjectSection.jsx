import React from "react";
import { Project } from './Project'
function ProjectSection() {
    const project = {
        name: "Test Name",
        langauge: "C#"
    }
    return(
        <div className="w-1/4 h-56 drop-shadow-lg bg-main-background rounded-md p-3 px-5">
            <h1 className="text-center text-text-color font-poppins text-xl font-bold">Projects</h1>
            <Project project={project}/>
        </div>
    )
}

export default ProjectSection;