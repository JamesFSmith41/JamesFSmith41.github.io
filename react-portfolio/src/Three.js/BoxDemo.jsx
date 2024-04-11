import { createRoot } from 'react-dom/client'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
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
      <meshStandardMaterial color={hovered ? 'hotpink' : 'red'}  />
    </mesh>
  )
}
export function BoxDemo() {
 let [boxPos, setPos] = useState(10);

  useEffect(() => {
    if (boxPos > 100) {
      boxPos = -101
    }

    const intervalId = setInterval(() => {
      if (boxPos > 10) {
        setPos(-10);
      }
      else {
        setPos(boxPos + 0.01);
      }
    }, 1);
    return () => clearInterval(intervalId);
    
  }, [boxPos])

    return(
        <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[boxPos, boxPos, boxPos]} angle={0.15} penumbra={1} decay={0} intensity={4} />
        <pointLight position={[-boxPos, -boxPos, -boxPos]} decay={0} intensity={Math.PI} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
    </Canvas>
    )
}
  