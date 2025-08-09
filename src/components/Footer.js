const Footer = () => {

  return (
    <footer className="bg-gray-800 text-white py-8"> {/* Changed background to solid dark gray */}
      <div className="container mx-auto px-6">
       

        <div className="pt-6 border-t border-gray-700"> {/* Adjusted border color */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-center md:text-left text-gray-400"> {/* Adjusted copyright text color */}
              &copy; {new Date().getFullYear()} Harsha Samarasinghe. All rights reserved.
            </p>
            <div className="flex items-center mt-3 md:mt-0">
              <a href="#about" className="mx-2 text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="mx-2 text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="mx-2 text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="mx-2 text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;