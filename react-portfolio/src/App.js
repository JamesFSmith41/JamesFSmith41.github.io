import './App.css';
import  Navbar  from './Navbar/Navbar'

function App() {
  return (
    <div className="bg-gradient-to-r to-main-gradient-stop from-main-gradient-start w-screen h-screen ">
      <Navbar/>
      <div>
        <div className="mt-10 ml-5">
          <h1 className="text-text-color font-poppins text-2xl font-bold p-3">Full-Stack Software Engineer </h1>
        </div>
        <div className="ml-5 w-1/3 rounded-md bg-main-background border-b-6 border-main-shadow shadow-lg shadow-main-shadow">
          <h1 className="text-text-color font-poppins text-xl font-bold p-3">About</h1>
          <p className="text-text-color font-poppins text-lg p-3">
          Hello! I'm James Smith, a passionate software engineer with a keen interest in creating and working on software. 
          I studied at Washington State University where I received a Bachelors in Software Engineering and a Minor in Mathematics.  
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
