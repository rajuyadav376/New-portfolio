import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Full Stack Developer',
    'React Developer',
    'Node.js Engineer',
    'UI/UX Enthusiast'
  ];

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  const handleDownloadResume = () => {
    // In a real app, this would trigger a resume download
    console.log('Downloading resume...');
    alert('Resume download functionality would be implemented here');
  };

  const handleViewProjects = () => {
    // Smooth scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/rajuyadav376', 
      label: 'GitHub',
      hoverColor: 'hover:text-gray-900 dark:hover:text-white'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/raju-yadav-76a541320/', 
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-600'
    },
    { 
      icon: Mail, 
      href: 'rajuyadav973760@gmail.com', 
      label: 'Email',
      hoverColor: 'hover:text-red-500'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className={`flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Left Column - Text Content */}
          <div className="flex-1 text-center md:text-left space-y-8">
            {/* Animated Role Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold backdrop-blur-sm transition-all duration-500">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="transition-all duration-300">
                {roles[currentRole]}
              </span>
            </div>
            
            {/* Main Heading with Animation */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                <span className="block mb-2 opacity-90">Hey, I'm</span>
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient bg-300% leading-tight">
                  Raju Yadav
                </span>
              </h1>
              
              {/* Enhanced Description */}
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed font-light">
                Passionate about crafting digital experiences that blend{' '}
                <span className="text-blue-600 dark:text-blue-400 font-medium">beautiful design</span>{' '}
                with{' '}
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">robust functionality</span>.
                I transform complex challenges into elegant, user-centric solutions.
              </p>
            </div>
            
            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={handleViewProjects}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Explore My Work
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ✨
                </div>
              </button>
              
              <button 
                onClick={handleDownloadResume}
                className="group inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm hover:shadow-lg transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Get Resume
              </button>
            </div>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-6 justify-center md:justify-start pt-6">
              {socialLinks.map(({ icon: Icon, href, label, hoverColor }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 ${hoverColor} rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
            
            {/* Tech Stack Preview */}
            <div className="hidden md:flex items-center space-x-4 pt-8">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Built with:</span>
              <div className="flex space-x-3">
                {['React', 'Node.js', 'TypeScript', 'MongoDB'].map((tech, index) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Enhanced Profile Section */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Animated glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20 group-hover:opacity-30 animate-pulse blur-lg transition-opacity duration-300"></div>
              
              {/* Profile Image Container */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-full border-4 border-gradient-to-r from-blue-400 to-indigo-500 p-1 bg-gradient-to-r from-blue-400 to-indigo-500">
                  <img 
                    src="https://ik.imagekit.io/xzjipji0j/profile.jpg?updatedAt=1756100643665"
                    alt="Raju Yadav - Full Stack Developer"
                    className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating Skill Tags with Enhanced Animation */}
                {[
                  { skill: 'React', position: 'absolute -top-6 -left-12', delay: '0s' },
                  { skill: 'Node.js', position: 'absolute top-12 -right-16', delay: '0.5s' },
                  { skill: 'MongoDB', position: 'absolute -bottom-6 -right-8', delay: '1s' },
                  { skill: 'JavaScript', position: 'absolute bottom-20 -left-20', delay: '1.5s' }
                ].map(({ skill, position, delay }) => (
                  <div
                    key={skill}
                    className={`${position} animate-float`}
                    style={{ animationDelay: delay }}
                  >
                    <div className="bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 backdrop-blur-sm transform hover:scale-110 transition-all duration-300 hover:shadow-xl cursor-default">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .bg-300\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;