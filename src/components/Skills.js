import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/animations";

const skillCategories = {
  "Programming Languages": [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  ],
  "Frameworks": [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    // { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    // { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
    // { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" }
  ],
  "Database": [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    // { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    // { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
  ],
  "UI Libraries": [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
    { name: "Chakra-UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chakraui/chakraui-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Framer Motion", icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" }
  ],
  "Design Tools": [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
   
  ],
  "Other Tools": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    { name: "Eclipse IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
  ]
};

const Skills = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      }
    }),
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.07)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      }
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-6"
      >
        <motion.div variants={headingVariants} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="text-black dark:text-white">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            My technical expertise and proficiency levels in various technologies and frameworks
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-col gap-6 max-w-6xl mx-auto"
        >
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <motion.div
              key={category}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white/90 dark:bg-gray-900 backdrop-blur-sm
                         rounded-xl shadow-lg dark:shadow-gray-950/50 p-8 
                         border border-gray-200/50 dark:border-gray-800
                         transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    whileHover={{ 
                      scale: 1.05,
                    }}
                    className="group flex flex-col items-center p-4 rounded-xl 
                             bg-white dark:bg-gray-800/95
                             shadow hover:shadow-lg dark:shadow-gray-950/20
                             border border-gray-100 dark:border-gray-800
                             transition-all duration-300 ease-in-out"
                  >
                    <div className="w-12 h-12 mb-3 p-2 rounded-lg 
                                  bg-gray-50 dark:bg-gray-700/80
                                  flex items-center justify-center
                                  transition-all duration-300 ease-in-out">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-8 h-8 object-contain
                                 dark:brightness-125
                                 group-hover:scale-110 
                                 transition-all duration-300 ease-in-out"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 
                                   text-center transition-colors duration-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
         
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;