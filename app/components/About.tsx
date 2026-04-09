'use client';

import { motion } from 'framer-motion';
import { Briefcase, Layers, Trophy } from 'lucide-react';

const stats = [
  { icon: Layers, label: 'Projects Built', value: '10+' },
  { icon: Trophy, label: 'Hackathons', value: '4+' },
  { icon: Briefcase, label: 'Internships', value: '4' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I&apos;m a passionate full-stack developer focused on building scalable,
            user-centric applications. I leverage modern technologies, including Agentic AI, to design intelligent systems that solve real-world problems and enhance user experiences.
          </p>
        </motion.div>

        {/* My Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I&apos;m a Computer Science graduate from the University of Delhi with a deep interest in building things that actually work from full-stack web apps to multi-agent AI systems.
            </p>
            <p>
              My journey started with the fundamentals data structures, databases, and frontend development but took a sharper turn when I discovered agentic AI. Since then, I&apos;ve been building systems where LLMs don&apos;t just respond, they reason, plan, and act whether that&apos;s a multi-agent crop advisory system, a persona-adaptive support agent, or a RAG-based document Q&A tool.
            </p>
            <p>
              Right now, I&apos;m actively looking for roles in full-stack development and agentic AI spaces where I can keep building at the intersection of robust engineering and intelligent systems. When I&apos;m not coding, you&apos;ll find me in the gym or going down rabbit holes on Edge AI and TinyML.
            </p>
          </div>
        </motion.div>

        {/* My Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            My Approach
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I approach every project with a focus on clarity, scalability, and impact. 
          I write clean, modular code, design user-first interfaces, and bring curiosity and rigor to everything I build 
          researching before I code, testing before I ship, and always looking for the cleaner solution.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}