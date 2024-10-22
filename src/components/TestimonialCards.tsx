'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      'Mastering C++ has empowered me to tackle complex problems with efficiency. It’s a foundational skill for any aspiring developer.',
    name: 'C++',
    title: 'Programming Language ',
  },
  {
    quote:
      'Learning Python has opened up endless possibilities for automation and data analysis. Its versatility makes it essential for modern tech applications.',
    name: 'Python',
    title: 'Programming Language for data science and automation',
  },
  {
    quote:
      'JavaScript is the backbone of web development. It allows me to create dynamic and interactive web applications that enhance user engagement.',
    name: 'JavaScript',
    title: 'Programming Language for frontend development',
  },
  {
    quote:
      'HTML and CSS are fundamental for building structured and visually appealing web pages. They form the foundation of any web project.',
    name: 'HTML & CSS',
    title: 'Markup and styling languages for web design',
  },
  {
    quote:
      'Frameworks like React.js enable me to build responsive user interfaces efficiently. They revolutionize how we approach frontend development.',
    name: 'React.js',
    title: 'Frontend framework for building user interfaces',
  },
  {
    quote:
      'Node.js has transformed my approach to backend development, allowing me to build scalable applications with JavaScript.',
    name: 'Node.js',
    title: 'Backend framework for server-side development',
  },
  {
    quote:
      'Next.js simplifies the process of building server-rendered React applications, enhancing performance and SEO. It’s an essential tool for modern web development.',
    name: 'Next.js',
    title: 'Framework for building server-rendered React apps',
  },
  {
    quote:
      'With MongoDB, I’ve learned to manage and scale databases effectively, providing flexibility for my applications.',
    name: 'MongoDB',
    title: 'NoSQL database for modern applications',
  },
  {
    quote:
      'MySQL is a powerful relational database that has deepened my understanding of structured data management and querying.',
    name: 'MySQL',
    title: 'Relational database management system',
  },
  {
    quote:
      'Using Visual Studio Code has streamlined my development process, enhancing productivity and making coding more enjoyable.',
    name: 'Visual Studio Code',
    title: 'Code editor for efficient development',
  },
  {
    quote:
      'Git is an essential tool for version control, enabling me to collaborate effectively on projects and track changes seamlessly.',
    name: 'Git',
    title: 'Version control system for collaborative coding',
  },
  {
    quote:
      'Postman has simplified API testing and development, allowing me to ensure my applications communicate effectively with external services.',
    name: 'Postman',
    title: 'API development and testing tool',
  },
  {
    quote:
      'A solid understanding of Data Structures & Algorithms (DSA) is crucial for efficient problem-solving and coding challenges.',
    name: 'Data Structures & Algorithms',
    title: 'Core competency in programming',
  },
  {
    quote:
      'Mastering Object-Oriented Programming (OOP) principles has enhanced my ability to design and structure my code effectively.',
    name: 'Object-Oriented Programming',
    title: 'Programming paradigm for code organization',
  },
  {
    quote:
      'Knowledge of Database Management Systems (DBMS) equips me with the skills to handle and manipulate data efficiently.',
    name: 'Database Management Systems',
    title: 'Essential for data handling and storage',
  },
  {
    quote:
      'Understanding Operating Systems (OS) has deepened my knowledge of how software interacts with hardware, enhancing my overall tech skills.',
    name: 'Operating Systems',
    title: 'Fundamental knowledge for tech understanding',
  },
  ];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Skill Set Unleashed: Explore My Tech Stack</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards 
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials