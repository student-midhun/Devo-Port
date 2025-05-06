import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Calendar, Code, Users, Database } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Time Table Scheduler",
    description: "An intelligent system for automated academic timetable generation and management.",
    longDescription: "A sophisticated timetable scheduling system that automates the complex process of creating academic schedules. The system considers various constraints like teacher availability, classroom capacity, and subject requirements to generate optimal timetables.",
    tech: ["Python", "Algorithm Design", "Data Structures"],
    features: [
      "Automated timetable generation with conflict resolution",
      "Teacher and classroom availability management",
      "Subject and course scheduling optimization",
      "Multiple constraint handling",
      "User-friendly interface for schedule management"
    ],
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
    github: "https://github.com/student-midhun/TimetableScheduler",
    featured: true
  },
  {
    id: 2,
    title: "Neural Network OCR",
    description: "A neural network implementation for recognizing handwritten digits (0-1).",
    longDescription: "An implementation of a neural network for Optical Character Recognition (OCR) focusing on binary digit recognition (0 and 1). The project demonstrates fundamental concepts of neural networks and machine learning.",
    tech: ["Python", "Neural Networks", "Machine Learning", "NumPy"],
    features: [
      "Binary digit recognition (0-1)",
      "Custom neural network implementation",
      "Training data preprocessing",
      "Model accuracy evaluation",
      "Real-time prediction capabilities"
    ],
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    github: "https://github.com/student-midhun/Neural_Network_0_to_1_OCR",
    featured: true
  },
  {
    id: 3,
    title: "Web Chat Application",
    description: "A real-time web chat application developed during internship.",
    longDescription: "A full-featured web chat application developed as part of an internship project. The application enables real-time communication between users with features like instant messaging, user authentication, and chat history.",
    tech: ["JavaScript", "Node.js", "WebSocket", "HTML/CSS"],
    features: [
      "Real-time messaging functionality",
      "User authentication and authorization",
      "Chat history persistence",
      "Multiple chat room support",
      "Responsive design for all devices"
    ],
    image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg",
    github: "https://github.com/student-midhun/web-chat-app-intern-project",
    featured: true
  }
];

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white dark:bg-dark-400 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-dark-300 rounded-full"
            >
              <X size={24} />
            </button>
          </div>
          
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">Overview</h4>
              <p className="text-gray-600 dark:text-gray-300">{project.longDescription}</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-2">Key Features</h4>
              <ul className="list-disc list-inside space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300">{feature}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-light-200 dark:bg-dark-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
              >
                <Github size={20} />
                <span>View Source</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="relative h-64 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-dark-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute top-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-dark-500/80 text-white rounded-full hover:bg-primary-500 transition-colors duration-300"
              onClick={e => e.stopPropagation()}
            >
              <Github size={18} />
            </a>
          </div>
        </div>
        
        <div className="p-6 bg-white dark:bg-dark-400">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-dark-400 dark:text-light-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-xs font-medium bg-light-200 dark:bg-dark-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <ProjectModal project={project} onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="container-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-heading mx-auto">My Projects</h2>
        <p className="max-w-2xl mx-auto mt-4">
          A showcase of my technical projects and achievements. Click on any project to learn more.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;