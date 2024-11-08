import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from "@react-three/fiber";
import * as THREE from 'three'
import Experience from './components/Experience'

export default function App() {
  return (
    <Canvas
      onCreated={({ gl }) => { gl.toneMapping = THREE.NoToneMapping }}
      shadows={true}
      camera={{
        fov: 25,
        near: 0.1,
        far: 100,
        position: [0, 0, 12]
      }}
    >
      <Experience />

    </Canvas>
  );
}