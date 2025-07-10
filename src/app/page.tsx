"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='text-center py-20'
    >
      <motion.h1
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className='text-4xl md:text-6xl font-bold text-primary'
      >
        Hey, I’m Shaurya 👋
      </motion.h1>
      <p className='mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto'>
        Building real-world web apps with modern tech stack.
      </p>
      <div className='mt-8 flex justify-center gap-4'>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href='/projects'
          className='bg-primary text-white px-6 py-2 rounded-xl shadow hover:bg-primary-dark'
        >
          View Projects
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href='/contact'
          className='border border-primary text-primary px-6 py-2 rounded-xl hover:bg-primary hover:text-white'
        >
          Contact Me
        </motion.a>
      </div>
    </motion.section>
  );
}
