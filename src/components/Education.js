import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const Education = () => {
  const educationData = [
    {
      id: 1,
      year: "2023 May - Present",
      institution: "Faculty of Computing, Sri Lanka Institute of Information Technology (SLIIT)",
      degree: "BSc.(Hons) in Software Engineering(Reading)",
      description: "I'm 3rd year undergraduate with hands-on experience in software development, Skilled in problem-solving and modern computing technologies, with a strong foundation in academic research and practical applications.",
      gpa: "Current GPA: 3.0"
    },
    {
      id: 2,
      year: "2020 - 2022",
      institution: "Kegalu Vidyalaya, Kegalle",
      degree: "GCE Advanced Level",
      subjects: [
        "Biology - S",
        "Physics - S",
        "Chemistry - S",
        "Genaral English - C"
      ],
      achievements: "Completed with 3 passes in the first shy."
    },
    {
      id: 3,
      year: "2008 - 2019",
      institution: "St/Bernadette's Model School, Polgahawela",
      degree: "GCE Ordinary Level",
      achievements: "Passed with 8A's and 1B."
    }
  ];

  return (
    <section id="education" className="py-12 md:py-20 bg-gradient-to-b dark:from-gray-900 dark:to-black from-gray-100 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2 
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center dark:text-white text-gray-800 mb-10 md:mb-16"
        >
          Education Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30 dark:bg-blue-500/30 bg-blue-600/50" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={fadeIn(index % 2 === 0 ? "left" : "right")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`flex items-center justify-between mb-12 md:flex-row flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-blue-600 dark:bg-blue-500 rounded-full shadow-lg" />

              {/* Content box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className={`w-full md:w-5/12 p-4 md:p-6 rounded-xl 
                           dark:bg-gradient-to-br dark:from-blue-900/40 dark:to-purple-900/40 
                           bg-gradient-to-br from-white to-blue-50
                           backdrop-blur-sm 
                           dark:border-blue-500/20 border-blue-200
                           transition-all duration-300
                           shadow-lg
                           ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
              >
                <div className="dark:text-blue-400 text-blue-600 font-semibold text-sm md:text-base mb-2">{edu.year}</div>
                <h3 className="text-lg md:text-xl font-bold dark:text-white text-gray-800 mb-2 line-clamp-2">{edu.institution}</h3>
                <h4 className="text-base md:text-lg dark:text-blue-200 text-blue-600 mb-3">{edu.degree}</h4>
                
                {edu.subjects && (
                  <div className="mb-3">
                    <p className="dark:text-gray-300 text-gray-600 mb-2 text-sm md:text-base">Subjects:</p>
                    <ul className="list-disc list-inside dark:text-gray-400 text-gray-600 text-sm md:text-base space-y-1">
                      {edu.subjects.map((subject, idx) => (
                        <li key={idx}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {edu.description && (
                  <p className="dark:text-gray-300 text-gray-600 mb-2 text-sm md:text-base line-clamp-3 md:line-clamp-none">{edu.description}</p>
                )}
                
                {edu.gpa && (
                  <p className="dark:text-green-400 text-green-600 font-semibold text-sm md:text-base">{edu.gpa}</p>
                )}
                
                {edu.achievements && (
                  <p className="dark:text-gray-300 text-gray-600 text-sm md:text-base">{edu.achievements}</p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
