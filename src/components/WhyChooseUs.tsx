
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'B.Tech: Delhi Technological University',
      description:
        'I am a B.Tech student in Mathematics and Computing at Delhi Technological University, where I have built a strong foundation in programming, algorithms, and software development. My academic projects have enhanced my technical skills and problem-solving abilities. I am passionate about using technology to address real-world challenges and am always eager to learn and grow as a developer.',
    },
    {
      title: 'Schooling 10+2: Goverment Boys Senior Secondary School',
      description:
        'I completed my 10+2 education with a focus on Science, studying Physics, Chemistry, and Mathematics while preparing for the JEE Mains and Advanced exams. This rigorous academic background sharpened my analytical skills and deepened my interest in technology, paving the way for my pursuit of a B.Tech in Mathematics and Computing at Delhi Technological University.',
    },
    {
      title: '10th(High-School): Sarvodya Bal Vidhyalaya',
      description:
        'I completed my high school education with a diverse curriculum, studying Science, Mathematics, Social Science, Hindi, English, and Sanskrit. This broad academic foundation helped me develop critical thinking skills and a well-rounded understanding of various subjects. My passion for Mathematics and Science guided my preparation for the JEE Mains and Advanced exams.',
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'I value a cutting-edge curriculum that incorporates the latest trends and technologies, ensuring that I stay updated with the most effective learning methods in my academic journey.',
    },
    {
      title: 'Limitless Learning ',
      description:
        'I believe in the concept of Limitless Learning, which emphasizes exploration, curiosity, and innovation in education. My approach leverages cutting-edge technology and the latest trends to create an engaging learning environment that accommodates diverse learning styles. By focusing on critical thinking and problem-solving, I aim to empower learners to pursue their passions and unlock their full potential, ensuring that education remains relevant and accessible to all',
    },
   
  ];

function WhyChooseUs() {
  return (
    
         <div>  
          <StickyScroll content={musicSchoolContent} />
        </div>
  );
  
}

export default WhyChooseUs