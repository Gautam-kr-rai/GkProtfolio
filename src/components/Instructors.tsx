'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { link } from "fs";

const instructors = [
    {
      id: 1,
      name: 'Gautam kumar',
      designation: 'Linked in',
      image:
        'https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700_1280.png',
      link: 'https://www.linkedin.com/in/gautam-kumar-30b459228/'
    },
    {
      id: 2,
      name: 'gautam rai',
      designation: 'Mail',
      image:
        'https://media.istockphoto.com/id/1424809012/photo/envelope-document-icon-3d-render-concept-for-open-letter-gmail-email.jpg?s=2048x2048&w=is&k=20&c=mfU9G7kK0ZhREA47Ntg1v7W11qzqvFVdLomin542CGw=',
       link: 'mailto:gk965069@gmail.com'
    },
    {
      id: 3,
      name: 'gautam kr rai',
      designation: 'Git-hub',
      image:
        'https://cdn.pixabay.com/photo/2013/07/12/19/25/github-154769_1280.png',
       link: 'https://github.com/Gautam-kr-rai'
    },
    
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Get in touch...</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Although I am Always open for any new opportunities, my inbox is open. Whether you have a question or just want to say hi, I will try my best to get back to you!</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors