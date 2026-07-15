import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Sparkles({ count = 800 }) {
  const points = useRef();

  // Create random positions, speeds, and noise for movement
  const [positions, speeds, noise] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const nse = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Distribute particles across a wide 3D space
      pos[i * 3] = (Math.random() - 0.5) * 35;     // X: spread wide
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15; // Y: height range
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80; // Z: along the scroll corridor

      // Individual float speed
      spd[i] = 0.05 + Math.random() * 0.15;

      // Unique noise seeds for smooth trigonometric movements
      nse[i * 3] = Math.random() * 100;
      nse[i * 3 + 1] = Math.random() * 100;
      nse[i * 3 + 2] = Math.random() * 100;
    }
    return [pos, spd, nse];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!points.current) return;

    const positionAttribute = points.current.geometry.attributes.position;
    const array = positionAttribute.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const speed = speeds[i];

      // Add gentle drift/wave motion using sine and cosine waves
      array[i3] += Math.sin(time * speed + noise[i3]) * 0.003;
      array[i3 + 1] += Math.cos(time * speed + noise[i3 + 1]) * 0.003;
      
      // Slow forward drift along the Z-axis
      array[i3 + 2] += speed * 0.02;

      // Reset particle position if it goes too far forward or backward
      if (array[i3 + 2] > 40) {
        array[i3 + 2] = -40;
      }
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#60a5fa"
        sizeAttenuation
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
