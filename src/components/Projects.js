import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import HarshaSamarasinghePortfolio from "../assets/HarshaSamarasinghePortfolio.png";
import ScholaHub from "../assets/ScholaHub.png";
import SportsZaga from "../assets/SportsZaga.png";
//import GoCeylon from "../assets/GoCeylon.png";
import SavendraGardens from "../assets/SavendraGardens.png";


const projects = [
  {
    title: "Savendra Garden",
    description:
      "Savendra Garden is a Hotel reservation management system with all user functionalities and Admin controlls.",
    image: SavendraGardens,
    github: "https://github.com/HarshaSamarasinghe/Hotel-Reservation-Management-System",
    demo: "#",
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP', 'XAMPP'],
  },
  {
    title: "Portfolio Website",
    description:
      "A simple, responsive portfolio website built with React and Tailwind CSS, featuring dark and light mode, contact form with email service and my location on map.",
    image: HarshaSamarasinghePortfolio,
    github: "https://github.com/HarshaSamarasinghe/Harsha-Samarasinghe-Portfolio",
    demo: "https://harshasamarasinghe.github.io/",
    tags: ["React", "Tailwind CSS", "EmailJS", "Responsive Design"],
  },
  {
    title: "ScholaHub",
    description:
      "ScholaHub is an Online School Information Management System for handling all the functionalities of students and teachers.",
    image: ScholaHub,
    github: "https://github.com/HarshaSamarasinghe/ScholaHub",
    demo: "#",
    tags: ['JSP', 'CSS', 'JavaScript', 'MySQL', 'Java', 'Tomcat 10.1'],
  },
  {
    title: "SportsZaga",
    description:
      "This web application is designed and developed to manage sports equipments.",
    image: SportsZaga,
    github: "https://github.com/HarshaSamarasinghe/SportsZaga",
    demo: "#",
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  // {
  //   title: "GoCeylon",
  //   description:
  //     "GoCeylon is a responsive vehicle rental web app built with NEXT.js, Express, Node.js, and MongoDB. It helps tourists explore Sri Lanka by booking vehicles easily near popular destinations. Includes secure login, admin management, reviews, and mobile-first design for a smooth rental experience. Still Ongoing!",
  //   image: GoCeylon,
  //   github: "https://github.com/HarshaSamarasinghe/GoCeylon",
  //   demo: "#",
  //   tags: ["Next.js", "Express", "MongoDB", "Node.js", "Shadcn-UI"],
  // },
  
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects to show my skills in web
            development, design, and problem-solving.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ 
                scale: 1.02, // More subtle scale
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" // Simpler shadow
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600 transition-all duration-300" // Adjusted rounding and shadow
            >
              <div className="relative overflow-hidden h-52">
                <motion.img
                  animate={{ 
                    scale: hoveredIndex === index ? 1.05 : 1, // More subtle image scale
                    filter: hoveredIndex === index ? "brightness(0.8)" : "brightness(1)" // Less aggressive brightness
                  }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4" // Simplified background overlay
                >
                  <motion.a
                    whileHover={{ scale: 1.1 }} // Removed rotate
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-200 shadow-md" // Adjusted padding and shadow
                  >
                    <FaGithub className="w-5 h-5 text-gray-700" /> 
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }} // Removed rotate
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-200 shadow-md" // Adjusted padding and shadow
                  >
                    <FaExternalLinkAlt className="w-5 h-5 text-gray-700" />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-6">
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-2xl font-bold text-gray-800 dark:text-white mb-3"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed"
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + tagIndex * 0.05, duration: 0.3 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium transition-all duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} // Reduced y offset
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }} // Adjusted delay and duration
                  className="flex justify-start items-center space-x-4 mt-4" // Align to start, add spacing
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }} // Removed x-axis movement
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 flex items-center text-sm font-medium" // Adjusted colors and font size
                  >
                   
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }} // Removed x-axis movement
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-200 flex items-center text-sm font-medium" // Adjusted colors and font size
                  >
                    
                  </motion.a>
                </motion.div>
              </div>
              {/* Removed Gradient border animation */}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }} 
          className="text-center mt-12" 
        >
          <a 
            href="https://github.com/HarshaSamarasinghe" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300 transform hover:scale-103" 
          >
            See More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;