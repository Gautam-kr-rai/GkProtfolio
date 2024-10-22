
"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React from "react";
import { motion } from "framer-motion";

const SkillsPage = () => {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen relative">
      <div className="min-h-screen flex items-center justify-center">
        {/* Main Content Container */}
        <div className="relative max-w-3xl mx-auto p-8 rounded-xl shadow-2xl z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-center font-sans font-extrabold mb-12 text-gray-900 dark:text-white"
          >
            My Skills
          </motion.h1>

          {/* Skills Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Languages */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Languages
              </h2>
              <p className="text-gray-700 dark:text-gray-400 text-lg">
                C++ | C | Python | JavaScript | HTML | CSS
              </p>
            </motion.div>

            {/* Frameworks & Libraries */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Frameworks & Libraries
              </h2>
              <p className="text-gray-700 dark:text-gray-400 text-lg">
                React.js | Node.js | Next.js
              </p>
            </motion.div>

            {/* Database Management */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Database Management
              </h2>
              <p className="text-gray-700 dark:text-gray-400 text-lg">
                MongoDB | MySQL
              </p>
            </motion.div>

            {/* Developer Tools */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Developer Tools
              </h2>
              <p className="text-gray-700 dark:text-gray-400 text-lg">
                Visual Studio Code | Git | Postman
              </p>
            </motion.div>

            {/* Core Competencies */}
            <motion.div
              className="sm:col-span-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Core Competencies
              </h2>
              <p className="text-gray-700 dark:text-gray-400 text-lg">
                Data Structures & Algorithms (DSA) | Object-Oriented Programming
                (OOP) | Database Management Systems (DBMS) | Operating Systems
                (OS)
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default SkillsPage;
