import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import { DoubleSide } from 'three'
//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.y += delta))
  // Return view, these are regular three.js elements expressed in JSX


  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

 function handleHover() {
    setHover(true)
 }
 function handleOut() {
    setHover(false)
 }


  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => handleHover()}
      onPointerOut={(event) => handleOut()}
      >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'red'} side={DoubleSide} />
    </mesh>
  )
}

function Plane(props) {
  
  return (
    <mesh 
    {...props}
    >
    <planeGeometry args={[1,1]} />
    <meshStandardMaterial  />
    </mesh>
  )
}
function Arch() {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return view, these are regular three.js elements expressed in JSX


  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

 function handleHover() {
    setHover(true)
 }
 function handleOut() {
    setHover(false)
 }

 const gltf = useLoader(GLTFLoader, './arch.glb');

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => handleHover()}
      onPointerOut={(event) => handleOut()}
      >
      <primitive object={gltf.scene} scale={0.4} position-z={-2*Math.PI} position-y={-Math.PI/2 - Math.PI/4} position-x={0} rotation-x={Math.PI *2} rotation-y={Math.PI/2 - 1}/>
      <meshStandardMaterial />
    </mesh>
  )
}
export function BoxDemo(color) {
 let [lightPos, setPos] = useState(10);
 let [change, setChange] = useState(0.01)

  useEffect(() => {
    if (lightPos > 20) {
      setChange(Math.abs(change) * -1)

    }
    else if (lightPos < Math.PI) {
      setChange(Math.abs(change))

    }
   // console.log(lightPos)
    const intervalId = setInterval(() => {
      setPos(lightPos + change);
    }, 1);
    return () => clearInterval(intervalId);
    
  }, [lightPos])
    return(
        <Canvas style={{background: color.color}}   >
          <ambientLight color={color.color}intensity={Math.PI} />
          <spotLight position={[lightPos, lightPos, lightPos]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} color={color.color}/>
          <pointLight position={[-lightPos, -lightPos, -lightPos]} decay={0} intensity={Math.PI} color={color.color}/>
          {/* <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} /> */}
          <Arch/>
          <Plane position-y={-Math.PI/2} rotation-x={-Math.PI/2} scale={22} color={color.color}/>
        </Canvas>
    )
}
  