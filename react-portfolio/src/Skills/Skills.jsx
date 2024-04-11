import React from "react";
import { languages, frameworks, backends } from "../Definitions/skillData"; 

function Langauges() {

    return 
}
export function Skills() {
    return(
        <div className="flex flex-row w-fit h-auto justify-between rounded-md bg-main-background border-b-6 border-main-shadow drop-shadow-lg shadow-main-shadow z-10">
            <div className="flex flex-col w-auto h-fit items-left justify-start  p-1 rounded-sm mx-5">
            <p className="text-text-color font-poppins text-lg font-bold">Languages</p>
                <ul>
                {
                    languages.map((language) =>(
                        <li key={language}>
                            <p className="text-text-color font-poppins text-md font-500 hover:bg-main-hover p-1 rounded-sm">{language}</p>

                        </li>
                    ))
                }
                </ul>
            </div>
            <div className="flex flex-col w-auto h-fit items-left justify-start   p-1 rounded-sm mx-5">
            <p className="text-text-color font-poppins text-lg font-bold ">Frameworks</p>
                <ul>
                {
                    frameworks.map((frameworks) =>(
                        <li key={frameworks}>
                            <p className="text-text-color font-poppins text-md font-500 hover:bg-main-hover p-1 rounded-sm">{frameworks}</p>

                        </li>
                    ))
                }
                </ul>
            </div>
            <div className="flex flex-col w-auto h-fit items-left justify-start  p-1 rounded-sm mx-5">
            <p className="text-text-color font-poppins text-lg font-bold cursor-default">Backends</p>
                <ul>
                {
                    backends.map((backends) =>(
                        <li key={backends}>
                            <p className="text-text-color font-poppins text-md font-500 hover:bg-main-hover cursor-default p-1 rounded-sm">{backends}</p>

                        </li>
                    ))
                }
                </ul>
            </div>
           
        </div>

    )
}