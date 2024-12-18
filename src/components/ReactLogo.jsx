/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
Title: React logo
*/
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/react.glb');
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(cubeRef.current.rotation, {
      y: hovered ? '+=2' : `+=${Math.PI * 2}`,
      x: hovered ? '+=2' : `-=${Math.PI * 2}`,
      duration: 2.5,
      stagger: {
        each: 0.15,
      },
    });

    return () => tl.kill(); // Cleanup on unmount
  }, [hovered]);

  return (
    <Float floatIntensity={1}>
      <group
        ref={cubeRef}
        position={[8, 8, 0]}
        scale={0.3}
        {...props}
        dispose={null}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.592, 0.592, 0.527]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('/models/react.glb');

export default ReactLogo;
