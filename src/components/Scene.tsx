"use client";
import { Canvas } from "@react-three/fiber";
import { Edges, OrbitControls } from "@react-three/drei";
import { getTheme } from "@/lib/theme";

export default function Scene() {
  const { foreground, textBackground } = getTheme();

  return (
    <Canvas>
      <ambientLight color={"white"} intensity={1.3} />
      <mesh>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={foreground} />
        <Edges color={textBackground} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
