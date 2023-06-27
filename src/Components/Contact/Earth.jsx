import React, { useRef } from "react";
import { useFrame, useLoader,useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from '../../Assets/models/earth.glb';
import { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';


const Earth = () => {
    const { camera } = useThree();
    const gltf = useLoader(GLTFLoader, model);
    const groupRef = useRef();

    useEffect(() => {
        camera.lookAt(gltf.scene.position);
      }, [camera, gltf.scene.position]);

    return (
        <>
            <primitive 
                object={gltf.scene} 
                scale={2.5} 
                position-y={0} 
                rotation-y={0} 
            />
            <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
             />
        </>
    )
}

export default Earth