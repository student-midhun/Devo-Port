import React from 'react';
import { Code, Server, Database, Globe, Layout, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other';
};

const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'React.js', level: 85, category: 'frontend' },
  { name: 'Next.js', level: 75, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express.js', level: 80, category: 'backend' },
  { name: 'REST API', level: 85, category: 'backend' },
  { name: 'GraphQL', level: 70, category: 'backend' },
  
  // Database
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'MySQL', level: 75, category: 'database' },
  { name: 'PostgreSQL', level: 70, category: 'database' },
  
  // DevOps
  { name: 'Git/GitHub', level: 85, category: 'devops' },
  { name: 'Docker', level: 65, category: 'devops' },
  { name: 'AWS', level: 60, category: 'devops' },
  
  // Design
  { name: 'Figma', level: 70, category: 'design' },
  { name: 'UI/UX Design', level: 75, category: 'design' },
  
  // Other
  { name: 'Problem Solving', level: 85, category: 'other' },
  { name: 'Team Collaboration', level: 90, category: 'other' },
];

type SkillCategoryProps = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  delay: number;
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card hover:border-l-4 hover:border-primary-500 transition-all duration-300"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-primary-500/10 text-primary-500 dark:text-primary-300 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-light-300 dark:bg-dark-300 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary-500 dark:bg-primary-400 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const databaseSkills = skills.filter(skill => skill.category === 'database');
  const devopsSkills = skills.filter(skill => skill.category === 'devops');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const otherSkills = skills.filter(skill => skill.category === 'other');
  
  return (
    <section id="skills" className="container-section bg-light-50 dark:bg-dark-600">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-heading mx-auto">My Skills</h2>
        <p className="max-w-2xl mx-auto mt-4">
          Here's a comprehensive overview of my technical capabilities and expertise.
          These skills represent my ongoing journey in software development.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <SkillCategory 
          title="Frontend Development" 
          icon={<Layout size={24} />} 
          skills={frontendSkills}
          delay={0.1}
        />
        
        <SkillCategory 
          title="Backend Development" 
          icon={<Server size={24} />} 
          skills={backendSkills}
          delay={0.2}
        />
        
        <SkillCategory 
          title="Database" 
          icon={<Database size={24} />} 
          skills={databaseSkills}
          delay={0.3}
        />
        
        <SkillCategory 
          title="DevOps" 
          icon={<Globe size={24} />} 
          skills={devopsSkills}
          delay={0.4}
        />
        
        <SkillCategory 
          title="Design" 
          icon={<Palette size={24} />} 
          skills={designSkills}
          delay={0.5}
        />
        
        <SkillCategory 
          title="Soft Skills" 
          icon={<Code size={24} />} 
          skills={otherSkills}
          delay={0.6}
        />
      </div>
    </section>
  );
};

export default Skills;