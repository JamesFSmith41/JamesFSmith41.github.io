import './App.css';
import  Navbar  from './Navbar/Navbar'
import ProjectSection from './ProjectSection/ProjectSection';
import { BoxDemo } from './Three.js/BoxDemo'
import { Suspense } from "react";
import React, { useState, useRef} from 'react'
import { ChromePicker, SketchPicker } from 'react-color';
import { Canvas } from '@react-three/fiber'
import { Skills } from './Skills/Skills'

function App() {
  let [bgColor, setColor] = useState("orange")
  let [colorMenu, setColorMenu] = useState(false)
  return (
    <div className="bg-main-background w-screen h-screen ">
      <Navbar/>
      <div className=' min-h-screen min-w-screen w-screen h-screen absolute  flex flex-col justify-start items-start z-0 object-left '>
          <BoxDemo color={bgColor}/>
        </div>
      <div className='w-screen h-screen'>
      
        <div className="mt-10 ml-5">
          <h1 className="text-text-color font-poppins text-2xl font-bold p-3">Full-Stack Software Engineer </h1>
        </div>
        <div className='flex flex-row justify-between w-full z-1'>
          <div className="ml-5 w-3/4 rounded-md h-fit bg-main-background border-b-6 border-main-shadow drop-shadow-lg shadow-main-shadow p-2">
            <h1 className="text-text-color font-poppins text-xl font-bold p-3">About</h1>
            <p className="text-text-color font-poppins text-lg p-3">
            Hello! I'm James Smith, a passionate software engineer with a keen interest in creating and working on software. 
            I studied at Washington State University where I received a Bachelors in Software Engineering and a Minor in Mathematics.  
            </p>
          </div>
          <div className='w-full h-full flex flex-row justify-end mr-20'>
            <Skills/>
          </div>
        </div>
        <div className="w-screen flex justify-start ml-5">
          
          <div className="p-3 flex flex-col justify-evenly items-center w-fit h-fit mt-10 rounded-md bg-main-background border-b-6 border-main-shadow drop-shadow-lg shadow-main-shadow">
          <div className="p-3 flex flex-row  h-fit justify-center rounded-md bg-main-background border-b-6 border-main-shadow drop-shadow-lg shadow-main-shadow text-text-color font-poppins text-md font-bold hover:cursor-pointer hover:bg-main-hover"
            onClick={() => setColorMenu(!colorMenu)}
          >
            {colorMenu ? "Close Color Menu" :"Open Color Menu" } 
          </div>

            <div className={colorMenu ? 'visible h-full drop-shadow-lg shadow-main-shadow mt-5' : ' invisible h-0'}>
            <ChromePicker 
              color={bgColor}
              onChange={(color) =>
                setColor((color.hex))} 
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
