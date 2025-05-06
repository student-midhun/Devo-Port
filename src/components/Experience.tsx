import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const experiences = [
  {
    title: "B.E. in Computer Engineering",
    company: "Mahatma Education Society's Pillai HOC College of Engineering and Technology",
    location: "Rasayani",
    date: "2023 - Present",
    description: [
      "Currently pursuing Bachelor's degree in Computer Engineering",
      "Actively participating in technical competitions and workshops",
      "Developing full-stack applications and exploring new technologies",
      "Maintaining strong academic performance"
    ],
    icon: <GraduationCap size={20} />
  },
  {
    title: "Python Development Intern",
    company: "Dcodetech",
    location: "Thane",
    date: "2022",
    description: [
      "Developed Python applications for automation and data processing",
      "Worked on real-world projects implementing Python solutions",
      "Collaborated with team members on various development tasks",
      "Gained practical experience in software development lifecycle"
    ],
    icon: <Briefcase size={20} />
  },
  {
    title: "Diploma in Computer Engineering",
    company: "Mahatma Education Society's Pillai HOC College of Engineering and Technology",
    location: "Rasayani",
    date: "2020 - 2023",
    description: [
      "Completed diploma with focus on computer engineering fundamentals",
      "Gained hands-on experience with programming and software development",
      "Participated in various technical projects and competitions",
      "Built strong foundation in computer science concepts"
    ],
    icon: <GraduationCap size={20} />
  },
  {
    title: "Primary-Secondary Education",
    company: "Atomic Energy Central School No.2",
    location: "",
    date: "2007 - 2020",
    description: [
      "Completed primary and secondary education with excellent academic record",
      "Participated in various extracurricular activities",
      "Developed strong foundation in mathematics and sciences",
      "Active member of school clubs and activities"
    ],
    icon: <GraduationCap size={20} />
  }
];

const TimelineItem = ({ experience, index }) => {
  const { darkMode } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative flex-1"
    >
      <div className={`
        p-6 rounded-lg shadow-lg
        ${darkMode ? 'bg-dark-400' : 'bg-white'}
        ${index % 2 === 0 ? 'mt-0' : 'mt-16'}
      `}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`
            p-2 rounded-full
            ${experience.icon.type === GraduationCap 
              ? 'bg-secondary-500 text-white' 
              : 'bg-primary-500 text-white'}
          `}>
            {experience.icon}
          </div>
          <h3 className="text-xl font-bold">{experience.title}</h3>
        </div>
        
        <div className="mb-3">
          <h4 className="font-semibold text-primary-500 dark:text-primary-300">
            {experience.company}
          </h4>
          <p className="text-sm flex items-center mt-1 text-dark-400 dark:text-light-300">
            <Calendar size={14} className="mr-1" />
            {experience.date} {experience.location && `| ${experience.location}`}
          </p>
        </div>
        
        <ul className="space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start text-sm">
              <span className="text-secondary-500 mr-2 mt-1">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Timeline connector */}
      {index < experiences.length - 1 && (
        <div className="absolute h-16 w-px bg-primary-500/30 left-1/2 -bottom-16"></div>
      )}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="container-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-heading mx-auto">Experience & Education</h2>
        <p className="max-w-2xl mx-auto mt-4">
          My academic journey and professional experience that have shaped my career in technology.
        </p>
      </motion.div>
      
      <div className="flex flex-col gap-16">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;