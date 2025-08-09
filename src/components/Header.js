import React, { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education","projects", "skills", "contact"];
      const scrollPosition = window.scrollY;

      setIsScrolled(scrollPosition > 10);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Education","Projects", "Skills", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
          >
            Harsha Samarasinghe
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-sm font-medium transition-colors duration-300 
                  ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  }
                  group`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-300 
                    ${
                      activeSection === item.toLowerCase()
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                ></span>
              </a>
            ))}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t dark:border-gray-800 animate-fade-in">
            <div className="container mx-auto py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 py-2 text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                {darkMode ? (
                  <>
                    <FiSun className="w-4 h-4" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <FiMoon className="w-4 h-4" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
