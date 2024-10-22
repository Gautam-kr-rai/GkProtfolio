'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'E-Commerce Website',
      description:
        'A fully functional e-commerce platform that includes product listings, shopping cart functionality, and secure payment processing.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'PDF  Summarizer',
      description:
        'A PDF reader application that utilizes machine learning for document summarization and information retrieval.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'AI-Powered Chatbot',
      description:
        'A chatbot application developed with the MERN stack, designed to improve user engagement and support on websites.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Real-time chat application',
      description:
        'Built a real-time messaging application with Socket.io, Node.js, and Express.js for seamless, interactive communication',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Recent Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Level Up My Skills</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars