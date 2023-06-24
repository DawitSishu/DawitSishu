import { Canvas, useLoader,useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from '../../Assets/models/coder.glb';
import { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';

export default function Scene() {
  const { camera } = useThree();
  const gltf = useLoader(GLTFLoader, model);

  useEffect(() => {
    camera.lookAt(gltf.scene.position);
  }, [camera, gltf.scene.position]);

  return (
    <>
      <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
      <ambientLight intensity={0.3} />
      <primitive
        object={gltf.scene}
        position={[0, 0, 0]}
        rotation={[0.5, -3.5 * Math.PI, -1 * Math.PI]} 
        // rotation={[0.8, -3.5 * Math.PI, -0.9 * Math.PI]} 
        // scale={[0.14, 0.14, 0.14]}
        receiveShadow
      />
      <OrbitControls />
    </>
  );
}