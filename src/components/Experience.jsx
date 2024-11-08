import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from "react-three-fiber";


const Experience = () => {
    const boxRef = useRef()

    useFrame((state, delta) => {
        console.log(delta)
        boxRef.current.rotation.x += delta*0.2
        boxRef.current.rotation.z += delta*0.2

    })


    return (<>
        <color attach="background" args={["#818589"]} />
        <ambientLight intensity={.001} />
        <directionalLight position={[0, 0, 5]} color="green" />
        <mesh
            ref={boxRef}
            position={[0, 0, 0]}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshPhongMaterial />
        </mesh>
    </>
    )
}

export default Experience