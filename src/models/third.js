/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: wolkoed (https://sketchfab.com/wolkoed)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/nike-sb-charge-cnvs-46261bacdcbe4f2381edd5d1afc8df91
title: Nike SB Charge CNVS
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/raw-models/third/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 3.1]} scale={16} position={[0, -1.05, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.NikeSB_Charge002_NikeSB_Charge002_0.geometry} material={materials['NikeSB_Charge.002']} />
          <mesh geometry={nodes.NikeSB_Charge002_NikeSB_Charge002_0_1.geometry} material={materials['NikeSB_Charge.002']} />
          <mesh geometry={nodes.NikeSB_Charge002_NikeSB_Charge002_0_2.geometry} material={materials['NikeSB_Charge.002']} />
          <mesh geometry={nodes.NikeSB_Charge002_NikeSB_Charge002_0_3.geometry} material={materials['NikeSB_Charge.002']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/raw-models/third/scene.gltf')
