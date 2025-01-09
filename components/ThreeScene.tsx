"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useMemo } from "react";

function OrganicCore({ color = "lime" }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
    }),
    [color]
  );

  useFrame((state) => {
    timeRef.current += 0.03;
    if (coreRef.current) {
      uniforms.uTime.value = timeRef.current; // Pass time to shader
    }
  });

  return (
    <mesh ref={coreRef}>
      <sphereGeometry args={[2, 128, 128]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;

          // A classic Perlin noise function for smooth organic movement
          float noise(vec3 position) {
            return sin(position.x * 10.0 + uTime) * 0.2 +
                   cos(position.y * 10.0 + uTime) * 0.2 +
                   sin(position.z * 10.0 + uTime) * 0.2;
          }

          varying vec3 vNormal;
          void main() {
            // Displace vertices using noise
            vec3 displacedPosition = position + normal * noise(position);

            vNormal = normal;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 uColor;

          varying vec3 vNormal;
          void main() {
            // Light and color blending for soft glow effect
            vec3 light = normalize(vec3(0.5, 0.5, 1.0));
            float intensity = pow(max(dot(light, vNormal), 0.0), 2.0);

            gl_FragColor = vec4(uColor * intensity, 1.0);
          }
        `}
        wireframe={false}
      />
    </mesh>
  );
}

function ParticleStream() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.01; // Move particles downward
        if (positions[i + 1] < -5) positions[i + 1] = 5; // Reset position
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const particleCount = 1500;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = Math.random() * 10 - 5;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={particleCount}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="white" // Fainter, English color name
        transparent
        opacity={0.2} // Fainter particles
      />
    </points>
  );
}

function HoloRings() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringsRef.current) {
      const time = state.clock.getElapsedTime();
      ringsRef.current.rotation.y = time * 0.3; // Rotate rings
    }
  });

  return (
    <group ref={ringsRef}>
      {["aqua", "magenta", "blue"].map((color, index) => (
        <mesh key={index} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.8 + index * 0.7, 1.9 + index * 0.7, 64]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="h-full w-full absolute top-0 left-0 -z-10">
      <Canvas>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={2} color="white" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="cyan" />

        {/* Scene Elements */}
        {/* <OrganicCore color="navy-blue" /> Use English color names here */}
        <HoloRings />
        <ParticleStream />

        {/* Interaction */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
