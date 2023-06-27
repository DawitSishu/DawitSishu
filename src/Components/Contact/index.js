import React from 'react';
import { Canvas } from '@react-three/fiber';
import Earth from './Earth';
import ContactForm from './ContactForm';
// import './style.css'

const index = () => {
  return (
    <div className='main'>
        <ContactForm />
        {/* <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [-4, 3, 6],
            }}
        >
            <Earth />
        </Canvas> */}
    </div>
  )
}

export default index
