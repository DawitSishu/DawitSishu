import React from 'react'
import { Canvas, } from '@react-three/fiber';
import './style.css';
import CoderModel from './Coder';
import { Typography } from '@mui/material';



const index = () => {
  return (
      <div className='main'>
        <div className='model-container'>
          <Canvas camera={{ position: [2, -2, 2], fov: 45 }} shadows alpha>
            <CoderModel  />
          </Canvas>
        </div>
        <div className='content'>
           <Typography>hi</Typography>
        </div>
      </div>
  )
}

export default index