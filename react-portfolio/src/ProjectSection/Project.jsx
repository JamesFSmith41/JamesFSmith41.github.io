import React from "react";

export function Project(project) {
    const projectDetails = project.project
    return(
        <div className="flex flex-row justify-between hover:bg-hover cursor-pointer p-1 rounded-sm">
            <p className="text-text-color font-poppins text-md font-500">{projectDetails.name}</p>
            <p className="text-text-color font-poppins text-md font-300">{projectDetails.langauge}</p>
        </div>

    )
}