'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Preload, Environment, OrbitControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import FluidCursor from '../components/FluidCursor';


gsap.registerPlugin(ScrollTrigger);

function CameraModel({
  scaleRef,
  rotationRef,
}: {
  scaleRef: React.MutableRefObject<number>;
  rotationRef: React.MutableRefObject<number>;
}) {
  const { scene } = useGLTF('/models/nikon_d6.glb');

  useFrame(() => {
    if (scene) {
      const s = scaleRef.current;
      const r = rotationRef.current;
      scene.scale.set(s, s, s);
      scene.rotation.set(0.5, r, 0); // rotating on Y-axis
    }
  });

  return <primitive object={scene} />;
}

function Services() {
  return (
    <div className="h-screen flex flex-col items-end justify-center pr-16 text-right">
      <div>
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <ul className="space-y-2 text-xl">
          <li>🎥 Wedding Films</li>
          <li>📱 Reels & Shorts</li>
          <li>🏢 Corporate Shoots</li>
          <li>✂️ Editing Services</li>
        </ul>
      </div>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <div>
        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
        <ul className="space-y-2 text-xl">
          <li>✅ Reliability</li>
          <li>🎨 Creativity</li>
          <li>⚡ Speed</li>
        </ul>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <div>
        <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-40 h-40 bg-white/10 hover:bg-white/20 transition" />
          <div className="w-40 h-40 bg-white/10 hover:bg-white/20 transition" />
          <div className="w-40 h-40 bg-white/10 hover:bg-white/20 transition" />
          <div className="w-40 h-40 bg-white/10 hover:bg-white/20 transition" />
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <div>
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <form className="flex flex-col space-y-4 w-full max-w-md">
          <input type="text" placeholder="Name" className="p-2 bg-black border border-white placeholder-white" />
          <input type="email" placeholder="Email" className="p-2 bg-black border border-white placeholder-white" />
          <textarea placeholder="Message" rows={4} className="p-2 bg-black border border-white placeholder-white" />
          <button type="submit" className="p-2 border border-white hover:bg-white hover:text-black transition">Send</button>
        </form>
      </div>
    </div>
  );
}

export default function Home() {
  const cameraRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef(2.5); // Initial scale
  const rotationRef = useRef(Math.PI / 2); // Initial rotation (90°)

  useEffect(() => {
    const camera = cameraRef.current;
    if (!camera) return;

    const sections = document.querySelectorAll('section');

    // Move camera vertically (optional: keep if needed)
    sections.forEach((section, index) => {
      if (section.id === 'why' ||section.id === 'portfolio' || section.id === 'contact') return;

      const x = index % 2 === 0 ? '10vw' : '0vw';
      const y = `${index * 100}vh`;

      gsap.to(camera, {
        scrollTrigger: {
          trigger: section,
          start: 'top right',
          end: 'bottom center',
          scrub: true,
        },
        x,
        y,
        ease: 'power2.inOut',
      });
    });

    // Animate right position to 0 on services
    gsap.to(camera, {
      scrollTrigger: {
        trigger: '#services',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
      right: '25vw',
      ease: 'power2.inOut',
    });



    // Animate scale
    const modelScale = { value: 2.5 };
    gsap.to(modelScale, {
      value: 2,
      scrollTrigger: {
        trigger: '#services',
        start: 'top center',
        end: 'top top',
        scrub: true,
      },
      onUpdate: () => {
        scaleRef.current = modelScale.value;
      },
    });

    // Animate rotation
// Rotation setup
const modelRotation = { value: Math.PI / 3 }; // 60° initially

gsap.to(modelRotation, {
  value: -Math.PI / 3, // -90° final
  scrollTrigger: {
    trigger: '#services', // Start animating as services enter view
    start: 'top bottom',  // When top of services hits bottom of viewport
    end: 'top top',       // Until top of services hits top of viewport
    scrub: true,
  },
  onUpdate: () => {
    rotationRef.current = modelRotation.value;
  },
});


 
  }, []);


  return (
    <>
      <FluidCursor />
    <main className="bg-black text-white font-sans relative">
      <div
        ref={cameraRef}
        className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[900px] md:h-[900px] lg:w-[1200px] lg:h-[1200px] right-0 sm:right-[120px] md:right-[20px] lg:right-[250px] top-50 sm:top-[120px] lg:-top-[40px] z-10 pointer-events-none"
      >
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 15 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[40, 10, 5]} intensity={1} />
          <Environment preset="city" background={false} />
          <CameraModel scaleRef={scaleRef} rotationRef={rotationRef} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Preload all />
        </Canvas>
      </div>

      <section className="h-screen w-full flex items-center px-8">
        <div className="flex-1 z-10">
          <h1 className="text-5xl font-bold leading-tight">Capture Life<br />In Motion</h1>
        </div>
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="why">
        <WhyChooseUs />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  </>
  );
}
