import React, { useState, useEffect } from "react";
import { Award, Calendar, ExternalLink, Tag } from "lucide-react";

const certifications = [
  {
    id: "LUEBT5JUN125466",
    title: "Build a Personal Portfolio with Bootstrap 5",
    issuer: "LetsUpgrade",
    date: "10 Jun, 2025",
    category: "Web Development",
    image: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151239.png?updatedAt=1756116102675",
    link: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151239.png?updatedAt=1756116102675"
  },
  {
    id: "LUEEXLMAY1251835",
    title: "Excel Bootcamp",
    issuer: "LetsUpgrade",
    date: "9 May, 2025",
    category: "Data & Productivity",
    image: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151258.png?updatedAt=1756116102415",
    link: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151258.png?updatedAt=1756116102415"
  },
  {
    id: "LUEGAIMAY125771",
    title: "Gemini AI Clone using HTML, CSS & JavaScript",
    issuer: "LetsUpgrade",
    date: "7 Jun, 2025",
    category: "AI & Frontend",
    image: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151313.png?updatedAt=1756116102290",
    link: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151313.png?updatedAt=1756116102290"
  },
  {
    id: "LUESQLJUN125684",
    title: "SQL Bootcamp",
    issuer: "LetsUpgrade",
    date: "2 Jul, 2025",
    category: "Databases",
    image: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151652.png?updatedAt=1756116113230",
    link: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151652.png?updatedAt=1756116113230"
  },
  {
    id: "LUEPYTJUN1251164",
    title: "Zero to Python Hero: Code Smart with AI",
    issuer: "LetsUpgrade",
    date: "24 Jun, 2025",
    category: "Python & AI",
    image: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151537.png?updatedAt=1756116102691",
    link: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151537.png?updatedAt=1756116102691"
  },
  {
    id: "LUEGCJUN1251027",
    title: "Git & GitHub Bootcamp",
    issuer: "LetsUpgrade",
    date: "17 Jun, 2025",
    category: "Version Control",
    image: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151358.png?updatedAt=1756116102177",
    link: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151358.png?updatedAt=1756116102177"
  }
];

export default function CertificationsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900/40 to-purple-900/40 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              My Certifications
            </h2>
          </div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Verified certifications showcasing my learning journey and technical expertise.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`group relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/40 rounded-2xl p-6 transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Certificate Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl border border-slate-700/50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-52 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {cert.category}
                </span>
              </div>

              {/* Certificate Details */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {cert.title}
                </h3>
                <p className="text-indigo-400 font-medium">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                  <span className="text-xs text-slate-500">ID: {cert.id}</span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    View <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 hover:shadow-lg hover:shadow-indigo-500/30 transition">
              <div className="text-3xl font-bold text-indigo-400">{certifications.length}</div>
              <p className="text-slate-400 text-sm">Total Certificates</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 hover:shadow-lg hover:shadow-purple-500/30 transition">
              <div className="text-3xl font-bold text-purple-400">100%</div>
              <p className="text-slate-400 text-sm">Verified</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 hover:shadow-lg hover:shadow-cyan-500/30 transition">
              <div className="text-3xl font-bold text-cyan-400">2025</div>
              <p className="text-slate-400 text-sm">Latest Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// import React, { useState, useEffect } from "react";
// import { Award, Calendar, ExternalLink } from "lucide-react";

// const certifications = [
//   {
//     id: "LUEBT5JUN125466",
//     title: "Build a Personal Portfolio with Bootstrap 5",
//     issuer: "LetsUpgrade",
//     date: "10 Jun, 2025",
//     category: "Web Development",
//     image: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151239.png?updatedAt=1756116102675",
//     link: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151239.png?updatedAt=1756116102675"
//   },
//   {
//     id: "LUEEXLMAY1251835",
//     title: "Excel Bootcamp",
//     issuer: "LetsUpgrade",
//     date: "9 May, 2025",
//     category: "Data & Productivity",
//     image: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151258.png?updatedAt=1756116102415",
//     link: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151258.png?updatedAt=1756116102415"
//   },
//   {
//     id: "LUEGAIMAY125771",
//     title: "Gemini AI Clone using HTML, CSS & JavaScript",
//     issuer: "LetsUpgrade",
//     date: "7 Jun, 2025",
//     category: "AI & Frontend",
//     image: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151313.png?updatedAt=1756116102290",
//     link: "https://ik.imagekit.io/xzjipji0j/Screenshot%202025-08-25%20151313.png?updatedAt=1756116102290"
//   }
// ];

// export default function CertificationsSection() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <section className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900/40 to-purple-900/40 overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute top-20 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div
//           className={`text-center mb-16 transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <div className="inline-flex items-center gap-3 mb-6">
//             <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
//               <Award className="w-8 h-8 text-white" />
//             </div>
//             <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
//               My Certifications
//             </h2>
//           </div>
//           <p className="text-lg text-slate-300 max-w-3xl mx-auto">
//             Verified certifications showcasing my learning journey and technical expertise.
//           </p>
//         </div>

//         {/* Certificates Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {certifications.map((cert, index) => (
//             <div
//               key={cert.id}
//               className={`group relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/40 rounded-2xl p-6 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-500 ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//               style={{ transitionDelay: `${200 + index * 150}ms` }}
//             >
//               {/* Certificate Image */}
//               <div className="relative mb-6 overflow-hidden rounded-xl">
//                 <img
//                   src={cert.image}
//                   alt={cert.title}
//                   className="w-full h-52 object-cover rounded-xl border border-slate-700/50 group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <span className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-lg">
//                   {cert.category}
//                 </span>
//               </div>

//               {/* Certificate Details */}
//               <div className="space-y-3">
//                 <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
//                   {cert.title}
//                 </h3>
//                 <p className="text-indigo-400 font-medium">{cert.issuer}</p>
//                 <div className="flex items-center gap-2 text-slate-400 text-sm">
//                   <Calendar className="w-4 h-4" />
//                   {cert.date}
//                 </div>
//                 <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
//                   <span className="text-xs text-slate-500">ID: {cert.id}</span>
//                   <a
//                     href={cert.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
//                   >
//                     View <ExternalLink className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Footer */}
//         <div
//           className={`mt-16 text-center transition-all duration-1000 delay-500 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
//             <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30">
//               <div className="text-3xl font-bold text-indigo-400">{certifications.length}</div>
//               <p className="text-slate-400 text-sm">Total Certificates</p>
//             </div>
//             <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30">
//               <div className="text-3xl font-bold text-purple-400">100%</div>
//               <p className="text-slate-400 text-sm">Verified</p>
//             </div>
//             <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30">
//               <div className="text-3xl font-bold text-cyan-400">2025</div>
//               <p className="text-slate-400 text-sm">Latest Year</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
