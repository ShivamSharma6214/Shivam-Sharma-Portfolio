import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import type { Mesh } from "three";

interface WireObjectProps {
  reducedMotion: boolean;
}

function WireObject({ reducedMotion }: WireObjectProps) {
  const meshRef = useRef<Mesh | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      isPausedRef.current = document.hidden;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current || reducedMotion || isPausedRef.current) {
      return;
    }

    const cappedDelta = delta > 0.1 ? 0.016 : delta;
    const rotationPerSecond = 0.1875;
    meshRef.current.rotation.y += rotationPerSecond * cappedDelta;
  });

  return (
    <mesh ref={meshRef} scale={1.45}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#00D4FF" wireframe />
    </mesh>
  );
}

export default function HeroThreeScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="h-full w-full" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 4.4]} fov={44} />
        <WireObject reducedMotion={Boolean(reducedMotion)} />
      </Canvas>
    </div>
  );
}
