import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

const StudioLights = () => {
  return (
    <group name='lights'>
        <spotLight 
            position={[-2, 10, 5]}
            angle={0.15}
            decay={0}
            intensity={Math.PI * 0.2}
        />
        <spotLight 
            position={[0, -25, 10]}
            angle={0.15}
            decay={0}
            intensity={Math.PI * 0.2}
        />
        <spotLight 
            position={[0, 15, 5]}
            angle={0.15}
            decay={0.1}
            intensity={Math.PI * 1}
        />
    </group>
  )
}

export default StudioLights