import './App.css';
import  Navbar  from './Navbar/Navbar'
import ProjectSection from './ProjectSection/ProjectSection';
import { BoxDemo } from './Three.js/BoxDemo'

function App() {
  return (
    <div className="bg-main-background w-screen h-screen ">
      <Navbar/>
      <div className='w-screen h-screen'>
      <div className='w-screen h-1/2  right-40 flex flex-col justify-start items-start z-40 absolute object-left '>
          <BoxDemo />
        </div>
        <div className="mt-10 ml-5">
          <h1 className="text-text-color font-poppins text-2xl font-bold p-3">Full-Stack Software Engineer </h1>
        </div>
        <div className='flex flex-row justify-between w-full z-1'>
          <div className="ml-5 w-3/4 rounded-md bg-main-background border-b-6 border-main-shadow drop-shadow-lg shadow-main-shadow">
            <h1 className="text-text-color font-poppins text-xl font-bold p-3">About</h1>
            <p className="text-text-color font-poppins text-lg p-3">
            Hello! I'm James Smith, a passionate software engineer with a keen interest in creating and working on software. 
            I studied at Washington State University where I received a Bachelors in Software Engineering and a Minor in Mathematics.  
            </p>
          </div>
          <div className='w-full h-full flex flex-row justify-end mr-20'>
            <ProjectSection/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
