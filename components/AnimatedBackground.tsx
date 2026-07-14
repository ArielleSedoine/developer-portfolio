"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {

  const [particles, setParticles] = useState<
    {x:number; y:number; size:number; delay:number}[]
  >([]);


  useEffect(() => {

    const generated = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }));

    setParticles(generated);

  }, []);



  return (

    <div
      className="
        fixed
        inset-0
        -z-10
        overflow-hidden
        bg-black
      "
    >


      {/* Dynamic Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.25),transparent_40%)]
          animate-pulse
        "
      />



      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-20
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:60px_60px]
          animate-grid
        "
      />




      {/* Particles */}

      {
        particles.map((particle,index)=>(

          <span
            key={index}
            className="
              absolute
              rounded-full
              bg-blue-400/40
              blur-sm
              animate-floating
            "
            style={{
              left:`${particle.x}%`,
              top:`${particle.y}%`,
              width:`${particle.size}px`,
              height:`${particle.size}px`,
              animationDelay:`${particle.delay}s`
            }}
          />

        ))
      }



    </div>

  );
}