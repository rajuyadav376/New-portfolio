import React, { useState } from 'react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Book Store",
      description: "A React-based book store with a user-friendly interface, search functionality, and shopping cart.",
      image: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20140818.png?updatedAt=1756111213529",
      demo: "https://68a77286416de400970cd790--teal-chimera-2bdd4c.netlify.app/",
      github: "https://github.com/yourusername/bookstore",
      category: "frontend",
      tags: ["React", "JavaScript", "CSS3", "API"],
      status: "completed",
      featured: true
    },
    {
      id: 2,
      title: "Login Page",
      description: "A simple login page with form validation, responsive design, and password toggle feature.",
      image: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20140921.png?updatedAt=1756111232744",
      demo: "https://login-pages-phi.vercel.app/",
      github: "https://github.com/rajuyadav376/login-Pages",
      category: "frontend",
      tags: ["React", "Form Validation", "CSS3"],
      status: "completed",
      featured: false
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio built with React & Tailwind, featuring smooth animations and dark mode.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demo: "https://your-portfolio-demo.com",
      github: "https://github.com/yourusername/portfolio",
      category: "frontend",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      status: "completed",
      featured: true
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project, index }) => {
    const isHovered = hoveredProject === project.id;
    
    return (
      <div
        className="group relative"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
        style={{
          animationDelay: `${index * 0.1}s`
        }}
      >
        {/* Floating background orbs */}
        <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
          <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/15 rounded-full blur-xl animate-pulse delay-300"></div>
        </div>

        {/* Main card */}
        <div className={`
          relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 
          border border-slate-700/50 rounded-2xl lg:rounded-3xl backdrop-blur-xl
          transition-all duration-700 ease-out
          hover:bg-gradient-to-br hover:from-slate-800/80 hover:to-slate-900/80
          hover:border-slate-600/70 hover:shadow-2xl hover:shadow-blue-500/10
          hover:-translate-y-2 transform-gpu
          ${project.featured ? 'ring-1 ring-blue-500/20' : ''}
        `}>
          {/* Status badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className={`
              px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm
              ${project.status === 'completed' 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }
            `}>
              {project.status === 'completed' ? '✓ Completed' : '🚧 In Progress'}
            </span>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30 backdrop-blur-sm">
                ⭐ Featured
              </span>
            </div>
          )}

          {/* Image container */}
          <div className="relative overflow-hidden rounded-t-2xl lg:rounded-t-3xl h-64 group-hover:h-72 transition-all duration-700">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Quick action buttons */}
            <div className={`
              absolute inset-0 flex items-center justify-center gap-4
              opacity-0 group-hover:opacity-100 transition-all duration-500
              transform translate-y-4 group-hover:translate-y-0
            `}>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg hover:scale-110 transform transition-all duration-300 backdrop-blur-sm"
                title="Live Demo"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-700/80 text-white rounded-xl shadow-lg hover:scale-110 transform transition-all duration-300 backdrop-blur-sm hover:bg-slate-600/80"
                title="View Source"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {project.title}
            </h3>
            
            <p className="text-slate-300 text-sm lg:text-base mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 rounded-lg bg-slate-700/50 text-slate-300 text-xs font-medium hover:bg-slate-600/50 hover:text-white transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                🌐 Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-slate-700/50 text-slate-300 text-center py-3 rounded-lg font-medium hover:bg-slate-600/50 hover:text-white transform hover:-translate-y-0.5 transition-all duration-300"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/40 to-purple-900/40">
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-cyan-500/6 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/2 -left-16 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
            <span className="text-2xl">🚀</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <p className="text-slate-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover my latest work and creative solutions. Each project represents a journey of 
            learning, innovation, and problem-solving.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`
                px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1
                ${activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
                }
              `}
            >
              {category.name}
              <span className="ml-2 px-2 py-1 rounded-full bg-slate-800/50 text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 translate-y-8 animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Projects Completed', value: projects.filter(p => p.status === 'completed').length, icon: '✅' },
              { label: 'Technologies Used', value: '15+', icon: '🛠️' },
              { label: 'Lines of Code', value: '50k+', icon: '💻' },
              { label: 'Coffee Consumed', value: '∞', icon: '☕' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl mb-2 group-hover:scale-110 transform transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;