'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Preload, Environment, OrbitControls } from '@react-three/drei';
import { useEffect, useRef, Suspense } from 'react';
import React from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function LoadingFallback() {
  return null;
}

function ErrorFallback() {
  console.log('Model failed to load - showing transparent fallback');
  return null;
}

function CameraModel({
  scaleRef,
  rotationRef,
  modelPath,
}: {
  scaleRef: React.MutableRefObject<number>;
  rotationRef: React.MutableRefObject<number>;
  modelPath: string;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (meshRef.current && scene) {
      const s = scaleRef.current;
      const r = rotationRef.current;
      meshRef.current.scale.set(s, s, s);
      meshRef.current.rotation.set(0.5, r, 0);
    }
  });

  return <primitive ref={meshRef} object={scene} />;
}

class ModelErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('Model loading error caught by boundary:', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error boundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function SafeCameraModel({ scaleRef, rotationRef }: {
  scaleRef: React.MutableRefObject<number>;
  rotationRef: React.MutableRefObject<number>;
}) {
  const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';
  const modelPath = isProduction ? '/crystalknotfilms/models/nikon_d6.glb' : '/models/nikon_d6.glb';

  return (
    <ModelErrorBoundary fallback={<ErrorFallback />}>
      <Suspense fallback={<LoadingFallback />}>
        <CameraModel scaleRef={scaleRef} rotationRef={rotationRef} modelPath={modelPath} />
      </Suspense>
    </ModelErrorBoundary>
  );
}

function About1() {
  return (
    <div className="h-screen flex items-center justify-end pr-16 text-left">
      <div>
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-xl max-w-lg">
          We capture moments that last forever. Our team specializes in cinematic wedding films and creative storytelling.
        </p>
      </div>
    </div>
  );
}

function About2() {
  return (
    <div className="h-screen flex items-end justify-start pl-16 text-right">
      <div className="mb-20">
        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-xl max-w-lg">
          Bringing stories to life through a perfect blend of art and technology. We thrive on passion, precision, and creativity.
        </p>
      </div>
    </div>
  );
}

export default function ThreeDsection() {
  const cameraRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<number>(2.5);
  const rotationRef = useRef<number>(Math.PI / 2);

  useEffect(() => {
    const camera = cameraRef.current;
    if (!camera) return;

    const sections = document.querySelectorAll('section');
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    sections.forEach((section, index) => {
      const x = index % 2 === 0 ? '10vw' : '-10vw';
      const y = `${index * 100}vh`;

      gsap.to(camera, {
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
        x,
        y,
        ease: 'power2.inOut',
      });
    });

    const modelScale = { value: 2.5 };
    gsap.to(modelScale, {
      value: 2,
      scrollTrigger: {
        trigger: '#about1',
        start: 'top center',
        end: 'top top',
        scrub: true,
      },
      onUpdate: () => {
        scaleRef.current = modelScale.value;
      },
    });

    const modelRotation = { value: Math.PI / 3 };
    gsap.to(modelRotation, {
      value: -Math.PI / 3,
      scrollTrigger: {
        trigger: '#about1',
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
      onUpdate: () => {
        rotationRef.current = modelRotation.value;
      },
    });

    const secondRotation = { value: -Math.PI / 3 };
    gsap.to(secondRotation, {
      value: -Math.PI * 1.5,
      scrollTrigger: {
        trigger: '#about2',
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
      onUpdate: () => {
        rotationRef.current = secondRotation.value;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="bg-black text-white font-sans relative">
      <div
        ref={cameraRef}
        className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[900px] md:h-[900px] lg:w-[1200px] lg:h-[1200px] right-0 sm:right-[120px] md:right-[20px] lg:right-[250px] top-50 sm:top-[120px] lg:-top-[200px] z-10 pointer-events-none"
      >
        <Canvas 
          shadows 
          camera={{ position: [0, 0, 5], fov: 15 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false
          }}
          onCreated={({ gl }) => {
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          }}
        >
          <ambientLight intensity={0.2} />
          <directionalLight position={[40, 10, 5]} intensity={1} />
          <Environment preset="city" background={false} />
          <SafeCameraModel scaleRef={scaleRef} rotationRef={rotationRef} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Preload all />
        </Canvas>
      </div>

      <section id="about1">
        <About1 />
      </section>

      <section id="about2">
        <About2 />
      </section>
    </main>
  );
}
