import Link from 'next/link';
import React from 'react';
import { Button } from './ui/movind-border';
import { Spotlight } from './ui/Spotlight';


function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      {/* Spotlight effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Content */}
      <div className="p-4 relative z-10 w-full text-center">
       
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Hey,
        </h1>
       {/* Subheading */}
<div className="mt-4 text-neutral-300 max-w-xl mx-auto space-y-4">
  {/* First Part: Short intro */}
 
  <p className="font-medium text-lg md:text-xl text-white">

    I'm Gautam, a student at <span className="font-bold text-emerald-400">DTU (2021-2025)</span>,
  </p>
  
  {/* Second Part: Detailed description */}
  <p className="font-light text-sm md:text-base leading-relaxed text-neutral-400">
    a <span className="font-medium text-white">software engineer</span> with strong problem-solving skills, specializing in creating exceptional digital experiences. With expertise in both <span className="font-medium text-white">front-end</span> and <span className="font-medium text-white">back-end development</span>, I enjoy tackling challenging projects that drive innovation and deliver high-quality results. I am passionate about contributing to dynamic projects that push the boundaries of technology and create meaningful impact.
  </p>
</div>

        {/* Resume Button */}
        <div className="mt-4">
          <a href="https://drive.google.com/file/d/1S00ftJa2MLsV-wwWXobm9bOYoeoUA94G/view?usp=drive_link">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            > 

              My Resume !
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
