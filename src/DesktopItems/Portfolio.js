import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* navbar */}
      <div className="fixed top-[120px] right-10 sm:w-3/4 md:w-1/2 lg: bg-blue-300 text-center py-3 shadow-md z-10 rounded-lg">
        <nav className="flex justify-center space-x-6 sm:text-[15px] font-bold text-gray-800">
          <a href="#about-me" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md">About Me</a>
          <a href="#skills" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md">Skills</a>
          <a href="#projects" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md">Projects</a>
          <a href="#contact" className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md">Contact</a>
        </nav>
      </div>

      <div className="pt-28 px-4">
        {/* Animated text */}
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-800 animate-fade-in">Pirasana Ariyam</p>
          <p className="text-lg text-gray-600 mt-4 animate-fade-in">
            Hii, Welcome to my portfolio! <br />
            Continue below to know more about me.
          </p>
        </div>

  
        <section id="about-me" className="pt-28 mt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            <p className="mt-4 text-gray-600">
              I recently earned a bachelor's degree in Computer Science. I'm actively seeking opportunities while continuing to expand my skills through new technologies. Hence, this portfolio!
            </p>
          </div>
        </section>


        <section id="skills" className="pt-20 mt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
            <h4 className="text-xl font-semibold text-gray-700 mt-6">Programming Languages</h4>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <img src="skills_icons/Python.png" alt="Python" className="w-16 h-16" />
              <img src="skills_icons/Java.png" alt="Java" className="w-16 h-16" />
              <img src="skills_icons/UML.png" alt="UML" className="w-16 h-16" />
              <img src="skills_icons/HTML.png" alt="HTML" className="w-16 h-16" />
              <img src="skills_icons/CSS.png" alt="CSS" className="w-16 h-16" />
              <img src="skills_icons/JavaScript.png" alt="JavaScript" className="w-16 h-16" />
              <img src="skills_icons/React.png" alt="React" className="w-16 h-16" />
              <img src="skills_icons/TypeScript.png" alt="TypeScript" className="w-16 h-16" />
              <img src="skills_icons/SQL.png" alt="SQL" className="w-16 h-16" />
            </div>

            <h4 className="text-xl font-semibold text-gray-700 mt-10">Technologies & Tools</h4>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <img src="skills_icons/VSCode.png" alt="VSCode" className="w-16 h-16" />
              <img src="skills_icons/Git.png" alt="Git" className="w-16 h-16" />
              <img src="skills_icons/GitHub.png" alt="GitHub" className="w-16 h-16" />
              <img src="skills_icons/NodeJS.png" alt="NodeJS" className="w-16 h-16" />
              <img src="skills_icons/MongoDB.png" alt="MongoDB" className="w-16 h-16" />
              <img src="skills_icons/npm.png" alt="npm" className="w-16 h-16" />
            </div>

            <h4 className="text-xl font-semibold text-gray-700 mt-10">Proficient Languages</h4>
            <p className="mt-4 text-gray-600">English, French</p>
          </div>
        </section>

   
        <section id="projects" className="pt-28 mt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
            <p className="mt-4 text-gray-600">add projects here.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
