import React from "react";

export default function Navbar() {

    return(
        <div className="bg-main-background flex flex-row justify-between border-b-6 border-main-shadow drop-shadow-lg shadow-main-shadow">
            <h1 className="text-text-color font-poppins text-3xl font-bold p-3">James Smith Portfolio</h1>
            <div className="flex justify-center items-center">
                <a href="https://www.linkedin.com/in/james-smith-956700254/" className="text-text-color font-poppins text-xl p-3 mx-10 cursor-pointer hover:opacity-50">LinkedIn</a>
                <a href="https://github.com/JamesFSmith41" className="text-text-color font-poppins text-xl p-3 mx-10cursor-pointer hover:opacity-50">Github</a>
                <a className="text-text-color font-poppins text-xl p-3 mx-10 cursor-pointer hover:opacity-50">Resume</a>
            </div>            
        </div>
    )
}