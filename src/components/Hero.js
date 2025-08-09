import React, { useEffect, useState, useMemo } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { fadeIn, staggerContainer,} from "../utils/animations";
import profile from "../assets/profileImage.jpg";

const Hero = () => {
  const controls = useAnimation();
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = useMemo(() => [
    "Full Stack Developer",
    "React Developer",
    "Web Developer",
    "Problem Solver"
  ], []);

  useEffect(() => {
    const text = texts[textIndex];
    const updateText = () => {
      setDisplayText(current => {
        if (isDeleting) {
          return current.slice(0, -1);
        } else {
          return text.slice(0, current.length + 1);
        }
      });
    };

    const handleTyping = () => {
      const isComplete = !isDeleting && displayText === text;
      const isDone = isDeleting && displayText === "";

      if (isComplete) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDone) {
        setIsDeleting(false);
        setTextIndex((current) => (current + 1) % texts.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 150;
    const typingTimeout = setTimeout(updateText, typingSpeed);
    handleTyping();

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, textIndex, texts]);

  useEffect(() => {
    controls.start({
      y: [0, -15, 0],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });
  }, [controls]);

  const bgVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 1.5 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    })
  };

  const profileImageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut",
          repeat: 0
        },
        scale: {
          duration: 0.3,
          ease: "easeOut"
        }
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
        url('https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=2070&auto=format&fit=crop')`,
      }}
    >
      <motion.div 
        variants={bgVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0"
      />
      
      {/* Animated particles in background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
            style={{
              width: Math.random() * 20 + 10 + 'px',
              height: Math.random() * 20 + 10 + 'px',
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0.1
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              scale: [0.5, 1, 0.5],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-20 text-center relative z-10"
      >
        <motion.div 
          variants={profileImageVariants}
          initial="hidden"
          animate="visible"
          className="relative inline-block mb-8"
        >
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
            <img
              src={profile}
              alt="Harsha Samarasinghe"
              className="w-full h-full object-cover"
            />
          </div>
  
         
        </motion.div>

        <motion.h1
          variants={fadeIn("up")}
          className="text-4xl md:text-7xl font-bold text-white mb-4 text-shadow-lg"
          style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}
        >
          Harsha Samarasinghe
        </motion.h1>
        
        <motion.h2
          variants={fadeIn("up", 0.2)}
          className="text-xl md:text-2xl font-bold text-blue-200 mb-8"
        >
          <span className="typing-text inline-block min-h-[1.5em]">
            {displayText}
            <span className="animate-blink">|</span>
          </span>
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="flex justify-center gap-6 mt-8"
        >
          {[
            { icon: FaGithub, href: "https://github.com/HarshaSamarasinghe" },
            { icon: FaLinkedin, href: "https://linkedin.com/in/harsha-samarasinghe-859805228" },
            { icon: FaFacebook, href: "https://www.facebook.com/harsha.samarasinghe.351" },
            { icon: FaInstagram, href: "https://www.instagram.com/harsha_25_samarasinghe" },
          ].map((social, index) => (
            <motion.a
              key={index}
              custom={index}
              variants={socialVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300 
                        bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* CV Download Button */}
        <motion.div 
          variants={fadeIn("up", 0.4)} 
          className="mt-12"
        >
          <motion.a
            href="/assets/HarshaSamarasingheCV.pdf"
            download
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(59, 130, 246, 0.9)",
              boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-blue-500 hover:bg-blue-600 
                      text-white rounded-full font-medium transition-all duration-300 
                      shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            <FaFileDownload className="w-5 h-5 mr-2" />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
        
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;