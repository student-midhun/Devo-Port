import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="container-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">About Me</h2>
          <div className="space-y-4 mt-6">
            <p>
              Hello! I'm Midhun Mohandas, a passionate full-stack developer and student at Pillai HOC College 
              of Engineering and Technology, Rasayani. My journey in technology started with a curiosity for 
              creating innovative solutions, and I've been continuously expanding my skills since then.
            </p>
            <p>
              Currently pursuing my B.E. in Computer Engineering, I combine my academic knowledge with 
              practical experience in full-stack development. I'm particularly interested in building 
              scalable web applications and exploring new technologies.
            </p>
            <p>
              When I'm not coding, I'm actively involved in the National Cadet Corps as a Sergeant, 
              where I've developed strong leadership and organizational skills. This unique combination 
              of technical expertise and leadership experience shapes my approach to problem-solving 
              and team collaboration.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-2 text-sm"
            >
              <ul className="space-y-2">
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-secondary-500 mr-2">▹</span> JavaScript (ES6+)
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-secondary-500 mr-2">▹</span> React.js
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-secondary-500 mr-2">▹</span> Node.js
                </motion.li>
              </ul>
              <ul className="space-y-2">
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-secondary-500 mr-2">▹</span> TypeScript
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-secondary-500 mr-2">▹</span> Express.js
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-secondary-500 mr-2">▹</span> MongoDB
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-md aspect-square rounded-lg"
        >
          <motion.div 
            className="relative h-full w-full rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Border decoration */}
            <motion.div 
              className="absolute -right-5 -bottom-5 h-full w-full border-2 border-secondary-500 rounded-lg"
              animate={{ 
                x: [0, 5, 0],
                y: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            
            {/* Image */}
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-primary-200 dark:bg-primary-600 shadow-xl">
              <img
                src="/me.jpg"
                alt="Midhun Mohandas"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Overlay for visual effect */}
              <motion.div 
                className="absolute inset-0 bg-primary-500/10 dark:bg-primary-500/20"
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;