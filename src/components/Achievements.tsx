import React from 'react';
import { Award, Code, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const achievements = [
  {
    title: "InnoSpark Project Competition Finalist",
    organization: "Saraswati College, Kharghar",
    date: "2025",
    description: "Reached finals with an innovative IoT-based project, demonstrating technical expertise and problem-solving abilities.",
    icon: <Trophy size={20} />
  },
  {
    title: "Google Solution Challenge Arena",
    organization: "Google",
    date: "2025",
    description: "Participated in the prestigious Google Project Competition, developing innovative solutions for real-world challenges.",
    icon: <Trophy size={20} />
  },
  {
    title: "Ethical Hacking and IoT Certification",
    organization: "IIT Kharagpur (NPTEL)",
    date: "2024",
    description: "Completed comprehensive certification in ethical hacking and IoT technologies through NPTEL platform.",
    icon: <Award size={20} />
  },
  {
    title: "Microsoft Certifications",
    organization: "Microsoft",
    date: "2024",
    description: "Achieved certifications in Beginner Prompt Engineering and GitHub Engineering, expanding expertise in AI and version control.",
    icon: <Code size={20} />
  },
  {
    title: "Sergeant",
    organization: "National Cadet Corps (NCC)",
    date: "2015 - Present",
    description: "Serving as a Sergeant in the National Cadet Corps, developing leadership skills, discipline, and contributing to community service activities.",
    icon: <Trophy size={20} />
  }
];

const TimelineItem = ({ achievement, index }) => {
  const { darkMode } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}
    >
      <div className={`
        w-5/6 md:w-2/5 p-6 rounded-lg shadow-lg
        ${darkMode ? 'bg-dark-400' : 'bg-white'}
        transform hover:-translate-y-2 transition-transform duration-300
      `}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-full bg-accent-500 text-white">
            {achievement.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold">{achievement.title}</h3>
            <p className="text-sm text-primary-500 dark:text-primary-300">
              {achievement.organization}
            </p>
          </div>
        </div>
        
        <p className="text-sm mb-3 text-dark-400 dark:text-light-300">
          {achievement.date}
        </p>
        
        <p className="text-sm">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="container-section bg-light-50 dark:bg-dark-600">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-heading mx-auto">Achievements</h2>
        <p className="max-w-2xl mx-auto mt-4">
          Notable accomplishments and certifications in my academic and professional journey.
        </p>
      </motion.div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-primary-500/30"></div>
        
        {/* Timeline items */}
        <div className="space-y-16">
          {achievements.map((achievement, index) => (
            <TimelineItem key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;