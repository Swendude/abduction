/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { Center, Outlines, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_satelliteDish: THREE.Mesh;
    Mesh_satelliteDish_1: THREE.Mesh;
    Mesh_satelliteDish_2: THREE.Mesh;
    Mesh_satelliteDish_3: THREE.Mesh;
    Mesh_satelliteDish_4: THREE.Mesh;
  };
  materials: {
    metalDark: THREE.MeshStandardMaterial;
    dark: THREE.MeshStandardMaterial;
    _defaultMat: THREE.MeshStandardMaterial;
    metal: THREE.MeshStandardMaterial;
    metalRed: THREE.MeshStandardMaterial;
  };
};

export default function Model(
  props: JSX.IntrinsicElements["group"] & { scale?: number }
) {
  const { nodes, materials } = useGLTF("/satelliteDish.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} castShadow>
      <Center top left>
        <group position={[2, 0, 1.5]}>
          <mesh geometry={nodes.Mesh_satelliteDish.geometry} castShadow>
            <meshToonMaterial color={"#fbe980"} />
            <Outlines thickness={0.04 / (props.scale || 1)} />
          </mesh>
          <mesh geometry={nodes.Mesh_satelliteDish_1.geometry} castShadow>
            <meshToonMaterial color={"#4597cf"} />
            <Outlines thickness={0.04 / (props.scale || 1)} />
          </mesh>
          <mesh geometry={nodes.Mesh_satelliteDish_2.geometry} castShadow>
            <meshToonMaterial color={"#fbe980"} />
            <Outlines thickness={0.04 / (props.scale || 1)} />
          </mesh>
          <mesh geometry={nodes.Mesh_satelliteDish_3.geometry} castShadow>
            <meshToonMaterial color={"#fbe980"} />
            <Outlines thickness={0.04 / (props.scale || 1)} />
          </mesh>
          <mesh geometry={nodes.Mesh_satelliteDish_4.geometry} castShadow>
            <meshToonMaterial color={"#4597cf"} />
            <Outlines thickness={0.04 / (props.scale || 1)} />
          </mesh>
        </group>
      </Center>
      t
    </group>
  );
}

useGLTF.preload("/satelliteDish.glb");
