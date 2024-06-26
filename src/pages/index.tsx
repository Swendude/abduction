import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useRef, useState } from "react";
import {
  CameraControls,
  Grid,
  OrthographicCamera,
  Outlines,
  RoundedBox,
  Sphere,
  Stage,
  Box,
  TransformControls,
  PivotControls,
  Environment,
  Stars,
  Point,
  PointMaterial,
  Wireframe,
  Plane,
  Sky,
  GradientTexture,
  MeshWobbleMaterial,
  Center,
  Resize,
} from "@react-three/drei";
import { Group, Mesh } from "three";

import RocksLarge from "../models/RocksLarge";
import Dish from "../models/Dish";

const Player = ({ matColor }: { matColor: string }) => {
  useFrame((state, delta) => {
    boxRef.current.rotation.y += delta / 2;
  });
  const boxRef = useRef<Mesh>(null!);
  return (
    <group>
      <Box ref={boxRef} position={[0, 1, 0]} castShadow>
        <meshToonMaterial color={matColor} />
        <Outlines thickness={0.04} color={"#000000"} />
      </Box>
    </group>
  );
};

const Orbital = ({
  initialRotation = 0,
  color = "white",
  size = 1,
  distance = 10,
}: {
  initialRotation?: number;
  color?: string;
  size?: number;
  distance?: number;
}) => {
  useFrame((state, delta) => {
    if (!orbitalRef.current) return;
    orbitalRef.current.rotation.x += delta / 4;
  });

  const orbitalRef = useRef<Group>(null);
  return (
    <object3D rotation-y={Math.PI * 0.25}>
      <group ref={orbitalRef} rotation-x={initialRotation}>
        {/* Control point (center) */}
        <object3D position={[0, 0, 0]} />
        <Sphere
          args={[size]}
          material-color={color}
          position={[0, distance, 0]}
        >
          <Outlines thickness={0.04} color={"#000000"} />
          <pointLight
            intensity={Math.pow(1 + size, 7)}
            castShadow
            color={color}
          />
        </Sphere>
      </group>
    </object3D>
  );
};

export default function Home() {
  const [cubeCol, setCubeCol] = useState<string>("#ffffff");
  const [enableGrid, setEnableGrid] = useState(false);
  return (
    <main className={`flex flex-col items-center`}>
      <h1 className="text-4xl font-bold">Hello React Three Fiber!</h1>

      <div className="w-[800px] h-[800px] border border-black">
        <Canvas shadows>
          <OrthographicCamera
            makeDefault
            position={[-10, 10, 10]}
            rotation-order={"YXZ"}
            rotation-y={-Math.PI / 4}
            rotation-x={Math.atan(-1 / Math.sqrt(2))}
            left={-100}
            right={100}
            top={100}
            bottom={-100}
            zoom={13}
            near={0}
            far={100}
          />
          <CameraControls makeDefault />

          {enableGrid && <Grid position={[0, 0, 0]} args={[10, 10]} />}

          <ambientLight color="#ffffff" intensity={0.7} />

          <Orbital color="#fbe980" distance={8} size={0.8} />
          <Orbital
            color="#f4f1e6"
            size={0.3}
            distance={8}
            initialRotation={Math.PI}
          />

          <Player matColor={cubeCol} />
          <group>
            <Box
              position={[0, -1.65, 0]}
              args={[30, 30, 1]}
              rotation-x={Math.PI * -0.5}
              rotation-z={Math.PI * -0.25}
            >
              <meshStandardMaterial color={"#4597cf"}></meshStandardMaterial>
            </Box>
            <Box args={[10, 1, 10]} position={[0, -0.55, 0]} receiveShadow>
              <meshToonMaterial color={"rgb(106, 188, 106)"} />
              <Outlines thickness={0.04} color={"#000"} />
            </Box>
          </group>

          <RocksLarge position={[4, 0, 3]} scale={3} castShadow />
          <Dish position={[-3, 0, -3]} rotation-y={Math.PI * -1.5} scale={2} />
        </Canvas>
      </div>
      <input
        type="color"
        name="color"
        value={cubeCol}
        id="color"
        onChange={(e) => setCubeCol(e.currentTarget.value)}
      />
      <input
        type="button"
        value="toggle"
        onClick={(e) => setEnableGrid(!enableGrid)}
      />
    </main>
  );
}
