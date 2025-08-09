import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import profileImage from "../assets/myport.jpg";

const About = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-6"
        >
          <motion.div variants={fadeIn("up")} className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
              <motion.h2
                variants={fadeIn("up")}
                className="text-5xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block"
              >
                About Me
                
              </motion.h2>
              
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-[2fr,1fr] gap-16 items-center mb-20">
              {/* Text Content */}
              <motion.div variants={fadeIn("right", 0.2)} className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hello! I'm a Software Engineering undergraduate student at Sri Lanka Institute of Information Technology (SLIIT), Malabe, Sri Lanka.
                  I'm passionate about full-stack development and building exceptional digital experiences with a
                  growing foundation in both frontend and backend technologies, I love to create scalable,
                  user-friendly applications that solve real-world problems.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently, I'm focused on expanding my knowledge and skills through hands-on projects
                  while pursuing my degree. I enjoy taking on challenging assignments 
                  and contribute to my growth as an aspiring software engineer.
                </p>

                {/* Social Links */}
                <div className="pt-4">
                  <motion.h3
                    variants={fadeIn("up")}
                    className="text-xl font-semibold text-gray-800 dark:text-white mb-4"
                  >
                    Connect With Me
                  </motion.h3>
                  <motion.div variants={fadeIn("up")} className="flex gap-5 flex-wrap">
                    {[
                      { icon: FaGithub, href: "https://github.com/HarshaSamarasinghe", label: "GitHub" },
                      { icon: FaLinkedin, href: "https://linkedin.com/in/harsha-samarasinghe-859805228", label: "LinkedIn" },
                      { icon: FaFacebook, href: "https://www.facebook.com/harsha.samarasinghe.351", label: "Facebook" },
                      { icon: FaInstagram, href: "https://www.instagram.com/harsha_25_samarasinghe", label: "Instagram" },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
                                bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 
                                text-gray-700 dark:text-gray-300 transition-all duration-300 group"
                      >
                        <social.icon className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                        <span className="font-medium">{social.label}</span>
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  
                </div>

               
              </motion.div>
            </div>

           
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
