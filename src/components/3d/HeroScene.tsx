"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

function Stars(props: any) {
  const ref = useRef<any>();
  // Generar posiciones iniciales
  const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotación constante suave
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;

      // Interacción con el mouse (Parallax sutil)
      // Lerp (Linear Interpolation) para suavizar el movimiento hacia la posición del mouse
      const mouseX = state.pointer.x * 0.2; // Intensidad del efecto en X
      const mouseY = state.pointer.y * 0.2; // Intensidad del efecto en Y
      
      // Movemos el grupo entero ligeramente
      ref.current.rotation.x += (mouseY - ref.current.rotation.x) * delta * 0.5;
      ref.current.rotation.y += (mouseX - ref.current.rotation.y) * delta * 0.5;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.003} // Tamaño más fino para elegancia
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
      {/* Overlay gradiente para asegurar legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
    </div>
  );
}