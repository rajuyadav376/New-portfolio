import React, { useState, useEffect, useRef } from 'react';
import { Star, Code, Database, Settings, Layers, Brain, Globe, Terminal, Zap, Award, TrendingUp } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  const skills = [

    { 
      name: 'React.js', 
      category: 'frontend', 
      level: 'Beginner', 
      proficiency: 95, 
       projects: 5, 
      experience: '1+ years',
      featured: true,
      icon: '⚛️',
      description: 'Advanced React patterns, hooks, context, performance optimization, and modern architectural patterns'
    },
    { 
      name: 'TypeScript', 
      category: 'frontend', 
      level: 'Beginner', 
      proficiency: 92, 
      // projects: 18,
      experience: '1+ years',
      featured: true,
      icon: '📘',
      description: 'Advanced type systems, generics, utility types, and enterprise-level TypeScript architecture'
    },
    { 
      name: 'Next.js', 
      category: 'frontend', 
      level: 'Beginner', 
      proficiency: 88, 
       projects: 1,
      experience: '1+ years',
      featured: true,
      icon: '▲',
      description: 'Full-stack React framework with SSR, SSG, API routes, and performance optimization'
    },
    { 
      name: 'Tailwind CSS', 
      category: 'frontend', 
      level: 'Beginner', 
      proficiency: 96, 
      // projects: 30,
      experience: '1+ years',
      icon: '🎨',
      description: 'Utility-first CSS framework mastery with custom design systems and component libraries'
    },
    { 
      name: 'Vue.js', 
      category: 'frontend', 
      level: 'Beginner', 
      proficiency: 82, 
      // projects: 8,
      experience: '1+ years',
      icon: '💚',
      description: 'Vue 3 composition API, Pinia state management, and modern Vue ecosystem'
    },
    
    // Backend
    { 
      name: 'Node.js', 
      category: 'backend', 
      level: 'Expert', 
      proficiency: 90, 
      projects: 20,
      experience: '4+ years',
      icon: '🟢',
      description: 'Scalable server applications, microservices, REST APIs, and real-time systems'
    },
    { 
      name: 'Python', 
      category: 'backend', 
      level: 'Advanced', 
      proficiency: 85, 
      // projects: 15,
      experience: '1+ years',
      icon: '🐍',
      description: 'Django, FastAPI, data processing, automation, and machine learning integration'
    },
    // { 
    //   name: 'GraphQL', 
    //   category: 'backend', 
    //   level: 'Advanced', 
    //   proficiency: 78, 
    //   projects: 10,
    //   experience: '2+ years',
    //   icon: '📊',
    //   description: 'Schema design, Apollo Server, federation, and real-time subscriptions'
    // },
    { 
      name: 'Express.js', 
      category: 'backend', 
      level: 'Expert', 
      proficiency: 93, 
      // projects: 22,
      experience: '1+ years',
      icon: '🚀',
      description: 'RESTful APIs, middleware architecture, authentication, and performance optimization'
    },
    
    // Database
    { 
      name: 'MongoDB', 
      category: 'database', 
      level: 'Expert', 
      proficiency: 87, 
      // projects: 16,
      experience: '1+ years',
      icon: '🍃',
      description: 'Document modeling, aggregation pipelines, indexing strategies, and Atlas deployment'
    },
    { 
      name: 'MYSQL', 
      category: 'database', 
      level: 'Beginner', 
      proficiency: 83, 
      // projects: 12,
      experience: '1+ years',
      icon: '🐘',
      description: 'Complex queries, performance tuning, stored procedures, and database optimization'
    },
    { 
      name: 'Redis', 
      category: 'database', 
      level: 'Intermediate', 
      proficiency: 75, 
      // projects: 8,
      experience: '1+ years',
      icon: '🔴',
      description: 'Caching strategies, session management, pub/sub patterns, and performance optimization'
    },
    
    // Languages
    { 
      name: 'JavaScript', 
      category: 'languages', 
      level: 'intermediate', 
      proficiency: 95, 
      // projects: 40,
      experience: '1+ years',
      featured: true,
      icon: '🟨',
      description: 'ES6+, async patterns, functional programming, and modern JavaScript ecosystem'
    },
    { 
      name: 'Java', 
      category: 'languages', 
      level: 'Intermediate', 
      proficiency: 72, 
      // projects: 6,
      experience: '1+ years',
      icon: '☕',
      description: 'Spring Boot, enterprise patterns, and object-oriented design principles'
    },
    // { 
    //   name: 'Go', 
    //   category: 'languages', 
    //   level: 'Intermediate', 
    //   proficiency: 68, 
    //   projects: 4,
    //   experience: '1+ years',
    //   icon: '🔵',
    //   description: 'Concurrent programming, microservices, and performance-critical applications'
    // },
    
    // Tools & DevOps
    { 
      name: 'Docker', 
      category: 'tools', 
      level: 'Beginner', 
      proficiency: 80, 
      // projects: 14,
      experience: '1+ years',
      icon: '🐋',
      description: 'Containerization, multi-stage builds, orchestration, and production deployment'
    },
    // { 
    //   name: 'AWS', 
    //   category: 'tools', 
    //   level: 'Advanced', 
    //   proficiency: 76, 
    //   projects: 11,
    //   experience: '2+ years',
    //   icon: '☁️',
    //   description: 'EC2, S3, Lambda, RDS, CloudFormation, and serverless architecture'
    // },
    { 
      name: 'Git', 
      category: 'tools', 
      level: 'intermediate', 
      proficiency: 94, 
      // projects: 50,
      experience: '5+ years',
      featured: true,
      icon: '🌿',
      description: 'Advanced workflows, CI/CD integration, branching strategies, and team collaboration'
    },
    // { 
    //   name: 'Kubernetes', 
    //   category: 'tools', 
    //   level: 'Intermediate', 
    //   proficiency: 65, 
    //   projects: 5,
    //   experience: '1+ years',
    //   icon: '⚙️',
    //   description: 'Container orchestration, service mesh, and cloud-native deployment patterns'
    // }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: Layers, count: skills.length },
    { id: 'frontend', name: 'Frontend', icon: Globe, count: skills.filter(s => s.category === 'frontend').length },
    { id: 'backend', name: 'Backend', icon: Terminal, count: skills.filter(s => s.category === 'backend').length },
    { id: 'database', name: 'Database', icon: Database, count: skills.filter(s => s.category === 'database').length },
    { id: 'languages', name: 'Languages', icon: Code, count: skills.filter(s => s.category === 'languages').length },
    { id: 'tools', name: 'DevOps & Tools', icon: Settings, count: skills.filter(s => s.category === 'tools').length }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getLevelColor = (level) => {
    const colors = {
      'Expert': 'text-emerald-400',
      'Advanced': 'text-blue-400',
      'Intermediate': 'text-purple-400',
      'Beginner': 'text-pink-400'
    };
    return colors[level] || colors['Beginner'];
  };

  const getLevelGradient = (level) => {
    const gradients = {
      'Expert': 'from-emerald-500 to-green-500',
      'Advanced': 'from-blue-500 to-cyan-500',
      'Intermediate': 'from-purple-500 to-pink-500',
      'Beginner': 'from-pink-500 to-red-500'
    };
    return gradients[level] || gradients['Beginner'];
  };

  const getCategoryGradient = (category) => {
    const gradients = {
      'frontend': 'from-blue-500 to-cyan-500',
      'backend': 'from-green-500 to-emerald-500',
      'database': 'from-green-600 to-teal-600',
      'languages': 'from-yellow-500 to-orange-500',
      'tools': 'from-orange-500 to-red-500'
    };
    return gradients[category] || 'from-gray-500 to-gray-600';
  };

  // Stats calculation
  const stats = {
    totalProjects: skills.reduce((sum, skill) => sum + skill.projects, 0),
    expertSkills: skills.filter(skill => skill.level === 'Expert').length,
    avgProficiency: Math.round(skills.reduce((sum, skill) => sum + skill.proficiency, 0) / skills.length)
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/40 to-purple-900/40"
    >
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-violet-500/8 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
            Crafting digital experiences with cutting-edge technologies and proven expertise
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">5+</div>
              <div className="text-sm text-slate-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{stats.expertSkills}</div>
              <div className="text-sm text-slate-400">Expert Level Skills</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{stats.avgProficiency}%</div>
              <div className="text-sm text-slate-400">Average Proficiency</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-500 transform hover:scale-105 backdrop-blur-xl ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white border border-slate-700/50'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-600/50 text-slate-400'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isVisible={isVisible}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
              getLevelColor={getLevelColor}
              getLevelGradient={getLevelGradient}
              getCategoryGradient={getCategoryGradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ 
  skill, 
  index, 
  isVisible, 
  hoveredSkill, 
  setHoveredSkill, 
  getLevelColor, 
  getLevelGradient, 
  getCategoryGradient 
}) => {
  return (
    <div
      className={`group relative transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      {/* Card */}
      <div className="relative p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl lg:rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-slate-800/80 hover:to-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl hover:shadow-blue-500/10">
        
        {/* Featured Badge */}
        {skill.featured && (
          <div className="absolute -top-3 -right-3 p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg">
            <Star className="w-4 h-4 text-white" fill="currentColor" />
          </div>
        )}

        {/* Skill Icon & Name */}
        <div className="flex items-center gap-4 mb-4">
          <div className="text-3xl">{skill.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {skill.name}
            </h3>
            <p className="text-sm text-slate-400">{skill.experience}</p>
          </div>
        </div>

        {/* Level & Stats */}
        <div className="flex justify-between items-center mb-4">
          <span className={`text-sm font-semibold ${getLevelColor(skill.level)}`}>
            {skill.level}
          </span>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Award className="w-3 h-3" />
            {skill.projects} projects
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-400">Proficiency</span>
            <span className="text-sm font-bold text-slate-300">{skill.proficiency}%</span>
          </div>
          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${getLevelGradient(skill.level)} transition-all duration-1000 ease-out relative`}
              style={{
                width: isVisible ? `${skill.proficiency}%` : '0%',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Description (on hover) */}
        {hoveredSkill === skill.name && (
          <div className="absolute inset-x-6 bottom-6 mt-4 p-4 bg-slate-900/95 backdrop-blur-sm text-white rounded-xl shadow-xl border border-slate-700/50 text-sm leading-relaxed z-20 animate-in slide-in-from-bottom duration-300">
            {skill.description}
            <div className="absolute -top-2 left-4 w-4 h-4 bg-slate-900/95 border-l border-t border-slate-700/50 transform rotate-45"></div>
          </div>
        )}

        {/* Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r ${getCategoryGradient(skill.category)} blur-xl -z-10`} 
             style={{ transform: 'scale(1.05)' }} />
      </div>
    </div>
  );
};

export default Skills;