import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="h-screen flex items-center bg-gradient-to-br from-light-50 to-light-200 dark:from-dark-500 dark:to-dark-600 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-300/10 dark:bg-primary-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-secondary-300/10 dark:bg-secondary-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.8, 0.5, 0.8]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.p 
            variants={item}
            className="text-primary-500 dark:text-primary-300 font-mono mb-4"
          >
            Hello, my name is
          </motion.p>
          
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Midhun Mohandas.
          </motion.h1>
          
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-dark-400 dark:text-light-300 mb-6"
          >
            I build things for the web.
          </motion.h2>
          
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-dark-400 dark:text-light-400 max-w-2xl mb-8"
          >
            I'm a full-stack developer specializing in building exceptional digital experiences. 
            Currently focused on creating accessible, human-centered products.
          </motion.p>
          
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4"
          >
            <motion.a 
              href="#contact" 
              className="button-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a 
              href="#projects" 
              className="button-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex space-x-6 mt-12"
          >
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-400 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-300 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/midhun-mohandas-684a07283" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-400 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-300 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="mailto:contact@example.com" 
              className="text-dark-400 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-300 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <span className="text-dark-400 dark:text-light-300 text-sm mb-2">Scroll Down</span>
        <motion.div 
          animate={{ 
            y: [0, 8, 0],
            opacity: [1, 0.5, 1]
          }} 
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDown size={20} className="text-primary-500 dark:text-primary-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;