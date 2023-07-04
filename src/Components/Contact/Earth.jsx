import React  from "react";
import {  useLoader,useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from '../../Assets/models/earth.glb';
import { useEffect } from 'react';


const Earth = () => {
    const { camera } = useThree();
    const gltf = useLoader(GLTFLoader, model);

    useEffect(() => {
        camera.lookAt(gltf.scene.position);
      }, [camera, gltf.scene.position]);

    return (
            <primitive 
                object={gltf.scene} 
                scale={2.5} 
                position-y={0} 
                rotation-y={0} 
            />
    )
}

export default Earth