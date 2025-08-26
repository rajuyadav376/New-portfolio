import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Code2, GraduationCap, Trophy, Star, ChevronDown, ChevronUp, Database, Server, Globe, Palette, Box, Layers, Target, Heart, Zap, Award, BookOpen, TrendingUp, Brain, Rocket, Coffee, Monitor, Smartphone, TabletSmartphone, Users, Calendar, MapPin, Download } from 'lucide-react';

const AboutSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, satisfaction: 0, experience: 0, passion: 0 });
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0);
  const sectionRef = useRef(null);
  const statsAnimationRef = useRef(null);

  // Device rotation effect
  const devices = useMemo(() => [
    { icon: Monitor, label: 'Desktop', color: 'from-blue-500 to-cyan-500' },
    { icon: TabletSmartphone, label: 'Tablet', color: 'from-purple-500 to-pink-500' },
    { icon: Smartphone, label: 'Mobile', color: 'from-green-500 to-emerald-500' }
  ], []);

  useEffect(() => {
    const deviceInterval = setInterval(() => {
      setCurrentDeviceIndex((prev) => (prev + 1) % devices.length);
    }, 3000);
    return () => clearInterval(deviceInterval);
  }, [devices.length]);

  // Optimized intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Optimized stats animation with RAF
  const animateStats = useCallback(() => {
    if (statsAnimationRef.current) return;

    const targets = { projects: 18, satisfaction: 99, experience: 2, passion: 100 };
    const duration = 2000;
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Enhanced easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setAnimatedStats({
        projects: Math.floor(targets.projects * easeOut),
        satisfaction: Math.floor(targets.satisfaction * easeOut),
        experience: Math.floor(targets.experience * easeOut),
        passion: Math.floor(targets.passion * easeOut)
      });

      if (progress < 1) {
        statsAnimationRef.current = requestAnimationFrame(animate);
      } else {
        statsAnimationRef.current = null;
      }
    };

    statsAnimationRef.current = requestAnimationFrame(animate);
  }, []);

  const skills = useMemo(() => [
    { name: 'React', icon: Globe, level: 95, category: 'Frontend', color: 'from-blue-500 to-cyan-500', desc: 'Advanced component architecture & hooks', projects: 12 },
    { name: 'Node.js', icon: Server, level: 90, category: 'Backend', color: 'from-green-500 to-emerald-500', desc: 'RESTful APIs & microservices', projects: 10 },
    { name: 'MongoDB', icon: Database, level: 85, category: 'Database', color: 'from-green-600 to-teal-600', desc: 'NoSQL database design & optimization', projects: 8 },
    { name: 'Express.js', icon: Layers, level: 88, category: 'Backend', color: 'from-gray-600 to-gray-800', desc: 'Middleware & routing expertise', projects: 9 },
    { name: 'Redux', icon: Box, level: 82, category: 'Frontend', color: 'from-purple-500 to-violet-600', desc: 'State management & data flow', projects: 7 },
    { name: 'Tailwind CSS', icon: Palette, level: 92, category: 'Frontend', color: 'from-cyan-500 to-blue-500', desc: 'Responsive design & utility-first CSS', projects: 15 },
    { name: 'JavaScript', icon: Code2, level: 94, category: 'Language', color: 'from-yellow-500 to-orange-500', desc: 'ES6+ features & async programming', projects: 18 },
    { name: 'TypeScript', icon: Code2, level: 78, category: 'Language', color: 'from-blue-600 to-indigo-600', desc: 'Type-safe development', projects: 5 },
    { name: 'Git', icon: Rocket, level: 86, category: 'Tools', color: 'from-orange-500 to-red-500', desc: 'Version control & collaboration', projects: 18 }
  ], []);

  const skillCategories = useMemo(() => ['All', 'Frontend', 'Backend', 'Database', 'Language', 'Tools'], []);

  const filteredSkills = useMemo(() => 
    activeSkillCategory === 'All' 
      ? skills 
      : skills.filter(skill => skill.category === activeSkillCategory),
    [skills, activeSkillCategory]
  );

  const AboutCard = ({ icon: Icon, title, children, expandable = false, cardId, gradient = "from-slate-800/60 to-slate-900/60" }) => {
    const isExpanded = expandedCard === cardId;
    
    return (
      <div className={`group relative bg-gradient-to-br ${gradient} backdrop-blur-xl border border-slate-700/50 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-800/80 hover:to-slate-900/80 hover:border-slate-600/70 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} will-change-transform`}>
        
        {/* Optimized glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="relative">
                <div className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl lg:rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110 will-change-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl lg:rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">{title}</h3>
            </div>
            {expandable && (
              <button
                onClick={() => setExpandedCard(isExpanded ? null : cardId)}
                className="self-start sm:self-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-200 hover:scale-110 group will-change-transform"
              >
                {isExpanded ? 
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 group-hover:text-white transition-colors" /> : 
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 group-hover:text-white transition-colors" />
                }
              </button>
            )}
          </div>
          
          <div className={`transition-all duration-500 ease-out overflow-hidden ${
            isExpanded ? 'max-h-[1000px] opacity-100' : expandable ? 'max-h-32 sm:max-h-40 opacity-90' : 'opacity-100'
          }`}>
            {children}
          </div>
        </div>
      </div>
    );
  };

  const SkillCard = ({ skill, index }) => {
    const isHovered = hoveredSkill === skill.name;
    
    return (
      <div 
        className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 will-change-transform ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-4'}`}
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div className={`relative overflow-hidden p-4 sm:p-5 lg:p-6 bg-gradient-to-br ${skill.color}/10 backdrop-blur-sm border border-white/10 rounded-xl lg:rounded-2xl transition-all duration-300 hover:border-white/30 hover:shadow-xl hover:shadow-blue-500/20`}>
          
          {/* Floating particles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-ping"></div>
            <div className="absolute bottom-3 right-6 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className={`p-2 bg-gradient-to-br ${skill.color} rounded-lg transition-transform duration-200 group-hover:scale-110 will-change-transform`}>
                  <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <span className="text-white font-semibold text-sm sm:text-base lg:text-lg block">{skill.name}</span>
                  <span className="text-slate-400 text-xs">{skill.projects} projects</span>
                </div>
              </div>
              <span className="text-slate-300 text-xs sm:text-sm font-medium px-2 py-1 bg-white/10 rounded-lg">
                {skill.category}
              </span>
            </div>
            
            <div className="relative mb-3">
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full relative`}
                  style={{ width: isVisible ? `${skill.level}%` : '0%', transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
              <span className="absolute -top-6 right-0 text-white font-bold text-xs sm:text-sm">
                {isVisible ? `${skill.level}%` : '0%'}
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-200">
              {skill.desc}
            </p>
          </div>
        </div>
        
        {isHovered && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-slate-900/95 backdrop-blur-sm text-white text-sm rounded-xl shadow-xl z-30 border border-slate-700 whitespace-nowrap animate-fade-up">
            {skill.level}% Proficiency • {skill.projects} Projects
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45 border-r border-b border-slate-700"></div>
          </div>
        )}
      </div>
    );
  };

  const StatCard = ({ icon: Icon, value, label, suffix = '', gradient, delay = 0, extra = '' }) => (
    <div className={`group relative transition-all duration-500 delay-${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} will-change-transform`}>
      <div className={`text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br ${gradient} rounded-2xl lg:rounded-3xl backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl h-full will-change-transform`}>
        
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          <div className="p-2 sm:p-3 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm mb-3 sm:mb-4 mx-auto w-fit group-hover:bg-white/15 transition-colors duration-200">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white mx-auto group-hover:scale-110 transition-transform duration-200 will-change-transform" />
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 tabular-nums">
            {value === 100 && suffix === '' ? '∞' : `${value}${suffix}`}
          </div>
          <div className="text-slate-300 font-medium text-xs sm:text-sm tracking-wide uppercase">
            {label}
          </div>
          {extra && (
            <div className="text-slate-400 text-xs mt-1">{extra}</div>
          )}
        </div>
        
        <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
      </div>
    </div>
  );

  const DevicePreview = ({ icon: Icon, label, isActive, color }) => (
    <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-500 transform ${
      isActive 
        ? `bg-gradient-to-r ${color}/20 text-white scale-110 shadow-lg` 
        : 'bg-slate-700/30 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300 hover:scale-105'
    } will-change-transform`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );

  return (
    <section ref={sectionRef} className="min-h-screen py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/30">
        <div className="absolute top-20 left-10 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="max-w-5xl mx-auto">
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-300 leading-relaxed mb-6 sm:mb-8">
              Passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span> crafting exceptional digital experiences with the <span className="text-purple-400 font-semibold">MERN stack</span> and modern web technologies
            </p>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Enhanced Device Preview */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
            {devices.map((device, index) => (
              <DevicePreview 
                key={device.label}
                icon={device.icon} 
                label={device.label} 
                isActive={currentDeviceIndex === index} 
                color={device.color}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
          <div className="lg:col-span-2 space-y-6 sm:space-y-8 lg:space-y-10">
            <AboutCard 
              icon={TrendingUp} 
              title="Professional Journey" 
              expandable 
              cardId="journey"
              gradient="from-slate-800/60 to-blue-900/30"
            >
              <div className="space-y-4 sm:space-y-6">
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                  With <span className="text-blue-400 font-semibold">2+ years of development experience</span>, I've successfully delivered <span className="text-purple-400 font-semibold">18+ production applications</span> using cutting-edge technologies.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <div className="text-xl font-bold text-blue-400">18+</div>
                    <div className="text-xs text-slate-400">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                    <div className="text-xl font-bold text-purple-400">99%</div>
                    <div className="text-xs text-slate-400">Success Rate</div>
                  </div>
                  <div className="text-center p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                    <div className="text-xl font-bold text-green-400">24/7</div>
                    <div className="text-xs text-slate-400">Support</div>
                  </div>
                </div>
                
                {expandedCard === 'journey' && (
                  <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                    <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-xl lg:rounded-2xl border border-blue-500/30">
                      <h4 className="text-white font-semibold text-lg sm:text-xl mb-3 flex items-center">
                        <Brain className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-400" />
                        Core Competencies:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {['Full-stack MERN development', 'Scalable architecture design', 'Modern UI/UX implementation', 'Database optimization', 'API development & integration', 'Performance optimization'].map((skill, index) => (
                          <div key={index} className="flex items-center">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-yellow-400 flex-shrink-0" />
                            <span className="text-slate-300 text-sm sm:text-base">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-xl lg:rounded-2xl border border-emerald-500/30">
                      <h4 className="text-white font-semibold text-lg sm:text-xl mb-3 flex items-center">
                        <Coffee className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-emerald-400" />
                        Development Philosophy:
                      </h4>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        I believe in writing <span className="text-emerald-400 font-medium">clean, maintainable code</span> that not only solves problems but also scales with business needs. Every project is an opportunity to learn something new and push the boundaries of what's possible.
                      </p>
                    </div>

                    {/* Timeline */}
                    <div className="p-4 sm:p-6 bg-gradient-to-r from-violet-500/15 to-fuchsia-500/15 rounded-xl lg:rounded-2xl border border-violet-500/30">
                      <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-violet-400" />
                        Career Timeline:
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center p-3 bg-violet-500/10 rounded-xl">
                          <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                          <div>
                            <div className="text-white font-medium">Full Stack Developer</div>
                            <div className="text-slate-400 text-sm">2023 - Present</div>
                          </div>
                        </div>
                        <div className="flex items-center p-3 bg-blue-500/10 rounded-xl">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          <div>
                            <div className="text-white font-medium">Frontend Developer</div>
                            <div className="text-slate-400 text-sm">2022 - 2023</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </AboutCard>

            <AboutCard 
              icon={GraduationCap} 
              title="Education & Growth" 
              expandable 
              cardId="education"
              gradient="from-slate-800/60 to-emerald-900/30"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="p-4 sm:p-6 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-xl lg:rounded-2xl border border-emerald-500/30">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-emerald-400" />
                    <h4 className="text-white font-bold text-lg sm:text-xl">B.Tech Computer Science</h4>
                  </div>
                  <div className="flex items-center space-x-4 mb-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <p className="text-emerald-300 font-semibold text-sm sm:text-base">Rai University • 2024 - 2028</p>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base">Maintaining a <span className="text-emerald-400 font-semibold">CGPA of 9.05</span> with focus on software engineering</p>
                </div>
                
                {expandedCard === 'education' && (
                  <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                    <div className="p-4 sm:p-6 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 rounded-xl lg:rounded-2xl border border-yellow-500/30">
                      <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-yellow-400" />
                        Achievements & Certifications
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center p-3 sm:p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                          <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-yellow-400 flex-shrink-0" />
                          <div>
                            <div className="text-white font-medium text-sm sm:text-base">Certificate of Tech Expo 2025</div>
                            <div className="text-slate-400 text-xs">Outstanding Innovation Award</div>
                          </div>
                        </div>
                        <div className="flex items-center p-3 sm:p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-blue-400 flex-shrink-0" />
                          <div>
                            <div className="text-white font-medium text-sm sm:text-base">Full Stack Development Specialization</div>
                            <div className="text-slate-400 text-xs">MongoDB University</div>
                          </div>
                        </div>
                        <div className="flex items-center p-3 sm:p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-green-400 flex-shrink-0" />
                          <div>
                            <div className="text-white font-medium text-sm sm:text-base">React Advanced Certification</div>
                            <div className="text-slate-400 text-xs">Meta Developer Community</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Learning Progress */}
                    <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-xl lg:rounded-2xl border border-purple-500/30">
                      <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                        <Brain className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-purple-400" />
                        Current Learning Path
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-xl">
                          <span className="text-white text-sm">Next.js 14</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <div className="w-3/4 h-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                            </div>
                            <span className="text-slate-400 text-xs">75%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-xl">
                          <span className="text-white text-sm">Docker & DevOps</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <div className="w-1/2 h-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                            </div>
                            <span className="text-slate-400 text-xs">50%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </AboutCard>
          </div>

          <div>
            <AboutCard 
              icon={Zap} 
              title="Technical Arsenal" 
              gradient="from-slate-800/60 to-purple-900/30"
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Skill Categories Filter */}
                <div className="flex flex-wrap gap-2">
                  {skillCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveSkillCategory(category)}
                      className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 will-change-transform ${
                        activeSkillCategory === category
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white hover:scale-105'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Skills Grid */}
                <div className="space-y-3 sm:space-y-4">
                  {filteredSkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>

                {/* Skills Summary */}
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-slate-300 text-sm">
                      <span className="text-purple-400 font-semibold">9 core technologies</span> mastered
                    </p>
                    <Download className="w-4 h-4 text-slate-400 hover:text-white transition-colors cursor-pointer" />
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-xs text-slate-400">
                    <span>Avg. Proficiency:</span>
                    <span className="text-pink-400 font-semibold">87%</span>
                  </div>
                </div>

                {/* Quick Actions */}
                {/* <div className="flex space-x-2">
                  <button className="flex-1 py-2 px-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 text-white text-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-200 hover:scale-105 will-change-transform">
                    View Portfolio
                  </button>
                  <button className="flex-1 py-2 px-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg border border-emerald-500/30 text-white text-sm hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-200 hover:scale-105 will-change-transform">
                    Get Resume
                  </button>
                </div> */}
              </div>
            </AboutCard>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <StatCard 
            icon={Target} 
            value={animatedStats.projects} 
            label="Projects Completed" 
            suffix="+"
            gradient="from-blue-600/20 to-cyan-600/20"
            delay={0}
            extra="Production Ready"
          />
          <StatCard 
            icon={Trophy} 
            value={animatedStats.satisfaction} 
            label="Success Rate" 
            suffix="%"
            gradient="from-emerald-600/20 to-teal-600/20"
            delay={100}
            extra="Client Satisfaction"
          />
          <StatCard 
            icon={Star} 
            value={animatedStats.experience} 
            label="Years Experience" 
            suffix="+"
            gradient="from-purple-600/20 to-violet-600/20"
            delay={200}
            extra="Continuous Growth"
          />
          <StatCard 
            icon={Heart} 
            value={animatedStats.passion} 
            label="Passion Level" 
            suffix=""
            gradient="from-pink-600/20 to-rose-600/20"
            delay={300}
            extra="Always Learning"
          />
        </div>

        {/* Enhanced Passion Quote */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="max-w-5xl mx-auto p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-lg">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                </div>
              </div>
              
              <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-slate-300 italic leading-relaxed mb-6">
                "Transforming ideas into digital reality through <span className="text-blue-400 font-semibold">innovative code</span> and <span className="text-purple-400 font-semibold">creative problem-solving</span>. Every line of code is a step towards building the future."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
              </div>
              
              <div className="text-slate-400 text-sm sm:text-base font-medium mb-6">
                — Raju Yadav, Full Stack Developer
              </div>

              {/* Call to Action */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 will-change-transform">
                  Let's Collaborate
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl text-white font-semibold border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:scale-105 will-change-transform">
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Fun Facts About Me
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 text-center group hover:scale-105 transition-all duration-300 will-change-transform">
              <Coffee className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h4 className="text-white font-semibold mb-2">Coffee Enthusiast</h4>
              <p className="text-slate-400 text-sm">500+ cups of coffee fueled my coding journey</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20 text-center group hover:scale-105 transition-all duration-300 will-change-transform">
              <Code2 className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h4 className="text-white font-semibold mb-2">Code Commits</h4>
              <p className="text-slate-400 text-sm">2000+ GitHub commits this year</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 text-center group hover:scale-105 transition-all duration-300 will-change-transform">
              <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h4 className="text-white font-semibold mb-2">Always Learning</h4>
              <p className="text-slate-400 text-sm">Currently exploring AI/ML integration</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Hardware acceleration for better performance */
        .will-change-transform {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Optimize animations for mobile */
        @media (max-width: 640px) {
          .delay-0 { animation-delay: 0ms; }
          .delay-100 { animation-delay: 100ms; }
          .delay-200 { animation-delay: 200ms; }
          .delay-300 { animation-delay: 300ms; }
          
          /* Reduce motion for performance on mobile */
          .group:hover .animate-bounce,
          .group:hover .animate-pulse {
            animation-duration: 1s;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Optimize for 60fps animations */
        * {
          box-sizing: border-box;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;

