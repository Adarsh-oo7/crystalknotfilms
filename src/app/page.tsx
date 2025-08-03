import Image from "next/image";
import FluidCursor from '../components/FluidCursor';

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
  const { scene } = useGLTF('/models/nikon_d6-v4.glb');

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
    <>
    <FluidCursor />
   
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
     </>
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

<section className="relative h-screen w-full flex items-center px-8 overflow-hidden">
  {/* Blurred Background Layer */}
  <div
    className="absolute inset-0 bg-cover bg-center  "
    style={{ backgroundImage: "url('/images/smoke.png')" }}
  />

  {/* Foreground Content */}
  <div className="flex-1 z-10 text-white">
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
