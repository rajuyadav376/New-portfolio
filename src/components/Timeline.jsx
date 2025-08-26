import React, { useState, useEffect } from 'react';
import { Calendar, Code, Briefcase, GraduationCap, Trophy, BookOpen, Laptop, Database, Globe } from 'lucide-react';

const timelineData = [
  {
    year: "2024",
    semester: "Sem 1",
    title: "B.Tech Started - Foundation",
    description: "Started my Bachelor's degree in Computer Science & Engineering. Built strong fundamentals in web development and programming.",
    category: "education",
    icon: GraduationCap,
    skills: ["HTML", "CSS", "JavaScript", "Figma", "C Programming"],
    progress: 100,
    duration: "2024 - 2028"
  },
  {
    year: "2024",
    semester: "Sem 2",
    title: "Full Stack Development",
    description: "Dove deeper into modern web development with React and backend technologies. Learned database management and server-side development.",
    category: "development",
    icon: Code,
    skills: ["React.js", "MongoDB", "Node.js", "Express.js", "NoSQL", "API Development", "Backend Development"],
    progress: 100,
    duration: "Advanced Learning Phase"
  },
  {
    year: "2024",
    semester: "Project",
    title: "First Web Development Project",
    description: "Created my first full-stack web application using the MERN stack, implementing core functionalities and modern web practices.",
    category: "project",
    icon: Laptop,
    skills: ["MERN Stack", "Full-Stack Development", "Project Management", "Git", "Deployment", "Problem Solving"],
    progress: 100,
    duration: "Portfolio Project"
  },
  {
    year: "2024",
    semester: "Sem 3",
    title: "Advanced Frameworks",
    description: "Currently learning Next.js and advanced React concepts. Focusing on modern web development frameworks and optimization.",
    category: "skill",
    icon: Trophy,
    skills: ["Next.js", "Advanced React", "SSR", "Performance Optimization", "Modern JavaScript", "Web Optimization"],
    progress: 75,
    duration: "In Progress"
  },
  {
    year: "2025-2028",
    semester: "Future",
    title: "Career Growth & Specialization",
    description: "Continuing B.Tech journey with focus on advanced computer science concepts, internships, and preparing for full-stack developer roles.",
    category: "career",
    icon: Calendar,
    skills: ["System Design", "Data Structures & Algorithms", "Microservices", "Cloud Technologies", "DevOps", "Machine Learning"],
    progress: 20,
    duration: "Upcoming Goals"
  },
];

const categoryColors = {
  education: 'from-blue-500 to-cyan-500',
  development: 'from-green-500 to-emerald-500',
  project: 'from-purple-500 to-pink-500',
  skill: 'from-yellow-500 to-orange-500',
  career: 'from-red-500 to-rose-500'
};

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showSkills, setShowSkills] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      timelineData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => new Set([...prev, index]));
        }, index * 300);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const toggleSkills = (index) => {
    setShowSkills(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/40 to-purple-900/40 relative overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-64 h-64 bg-cyan-500/6 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-violet-500/8 rounded-full blur-3xl animate-pulse delay-1500"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            My Development Journey
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            From B.Tech Computer Science fundamentals to Full-Stack MERN Development
          </p>
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-slate-700/30 rounded-full">
            <span className="text-blue-400 font-semibold">2024 - 2028 | Computer Science & Engineering</span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/30"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              const isVisible = visibleItems.has(index);
              const isHovered = hoveredItem === index;
              const skillsVisible = showSkills[index];

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Timeline Item Content */}
                  <div
                    className={`
                      w-full max-w-md lg:max-w-lg transition-all duration-700 transform
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                      ${isHovered ? 'scale-105 -translate-y-2' : 'scale-100'}
                      ${isLeft ? 'mr-8 lg:mr-16' : 'ml-8 lg:ml-16'}
                    `}
                  >
                    <div className="group relative">
                      {/* Glow Effect */}
                      <div className={`
                        absolute inset-0 bg-gradient-to-r ${categoryColors[item.category]} 
                        rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500
                      `}></div>
                      
                      {/* Main Card */}
                      <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:bg-gradient-to-br hover:from-slate-800/80 hover:to-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                        
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className={`
                            inline-flex items-center px-4 py-2 rounded-lg
                            bg-gradient-to-r ${categoryColors[item.category]} text-white shadow-lg
                            font-bold text-lg
                          `}>
                            {item.year}
                          </div>
                          <div className="text-slate-400 text-sm font-medium">
                            {item.semester}
                          </div>
                        </div>

                        {/* Duration */}
                        <div className="text-slate-500 text-sm mb-2 font-medium">
                          {item.duration}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-300 text-base lg:text-lg mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-slate-400">Progress</span>
                            <span className="text-sm font-semibold text-slate-300">{item.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-700/50 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[item.category]} transition-all duration-1000 ease-out`}
                              style={{ width: isVisible ? `${item.progress}%` : '0%' }}
                            ></div>
                          </div>
                        </div>

                        {/* Skills Toggle Button */}
                        <button
                          onClick={() => toggleSkills(index)}
                          className="flex items-center justify-between w-full px-4 py-3 bg-slate-700/30 hover:bg-slate-600/40 rounded-lg transition-colors duration-300 mb-4"
                        >
                          <span className="text-blue-400 font-semibold">
                            Show Skills ({item.skills.length})
                          </span>
                          <div className={`transform transition-transform duration-300 ${skillsVisible ? 'rotate-180' : ''}`}>
                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>

                        {/* Skills - Collapsible */}
                        <div className={`
                          overflow-hidden transition-all duration-500 ease-in-out
                          ${skillsVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                        `}>
                          <div className="space-y-3">
                            <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Learned:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {item.skills.map((skill, skillIndex) => (
                                <div
                                  key={skillIndex}
                                  className="group relative overflow-hidden"
                                >
                                  <div className={`
                                    px-3 py-2 bg-slate-700/50 rounded-lg text-sm transition-all duration-300
                                    hover:bg-gradient-to-r hover:${categoryColors[item.category]} hover:text-white
                                    border border-slate-600/30 hover:border-transparent
                                    cursor-default transform hover:scale-105
                                  `}>
                                    <span className="relative z-10">{skill}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Central Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`
                      relative group cursor-pointer transition-transform duration-500
                      ${isHovered ? 'scale-125' : 'scale-100'}
                    `}>
                      {/* Icon Glow */}
                      <div className={`
                        absolute inset-0 bg-gradient-to-r ${categoryColors[item.category]} 
                        rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      `}></div>
                      
                      {/* Icon Container */}
                      <div className={`
                        relative p-4 bg-gradient-to-br ${categoryColors[item.category]} 
                        rounded-2xl shadow-lg transition-all duration-500
                        group-hover:shadow-2xl border-2 border-white/20
                      `}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Connection Line to Central Line */}
                  <div className={`
                    absolute top-1/2 ${isLeft ? 'right-8 lg:right-16' : 'left-8 lg:left-16'} 
                    w-8 lg:w-16 h-0.5 bg-gradient-to-r ${categoryColors[item.category]} 
                    transform -translate-y-1/2 opacity-60
                  `}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-slate-700/30 rounded-full">
            <span className="text-slate-300 text-lg font-medium">Journey continues with B.Tech CSE...</span>
          </div>
        </div>
      </div>
    </div>
  );
}