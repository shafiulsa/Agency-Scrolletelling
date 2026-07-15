
import { useGLTF } from "@react-three/drei";
import React from "react";

export function Monitor(props) {
  const { nodes, materials } = useGLTF("/models/Monitor.glb");

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.iMac.geometry} material={materials.Mat} />
    </group>
  );
}

useGLTF.preload("/models/Monitor.glb");
