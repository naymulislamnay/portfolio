export default function EducationSection() {
  const educationData = [
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Bhawal Badre Alam Govt. College",
      period: "2021 - 2022",
      status: "Current Student",
      description: "Studying mathematics with a strong focus on logical reasoning, problem-solving, and analytical thinking, while passionately developing skills in web development, UI design, and modern front-end technologies.",
      icon: "fas fa-graduation-cap",
      color: "purple"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Patuakhali Govt. College, Patuakhali",
      period: "2020",
      status: "Completed",
      description: "Completed higher secondary education with excellent grades (5.00 out of 5.00) and focus on science subjects including mathematics, physics, and chemistry.",
      icon: "fas fa-school",
      color: "orange"
    },
    {
      degree: "Secondary School Certificate",
      institution: "It-baria U.C.K. High School",
      period: "2018",
      status: "Completed",
      description: "Completed secondary education with excellent grades (4.83 out of 5.00) and developed interest in technology and programming.",
      icon: "fas fa-book",
      color: "cyan"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-surface-dark/30" id="education">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative mb-20 text-center">
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-9xl font-bold text-stroke opacity-10 whitespace-nowrap select-none pointer-events-none font-display">
            EDUCATION
          </h2>
          <h2 className="relative text-3xl md:text-4xl font-bold font-display">Education</h2>
          <div className="w-1 h-1 bg-purple-500 rounded-full mx-auto mt-4 mb-2"></div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Academic Journey</span>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-orange-500 to-cyan-500 opacity-30"></div>
          
          <div className="space-y-16">
            {educationData.map((edu, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}>
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 group-hover:scale-105">
                    <div className={`flex items-center space-x-3 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        edu.color === 'purple' ? 'bg-purple-600' :
                        edu.color === 'orange' ? 'bg-orange-600' : 'bg-cyan-600'
                      }`}>
                        <i className={`${edu.icon} text-white text-sm`}></i>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        edu.status === 'Current Student' ? 'bg-green-600/20 text-green-400' : 'bg-blue-600/20 text-blue-400'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-400 font-medium text-sm mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">{edu.description}</p>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-calendar text-gray-500 text-xs"></i>
                      <span className="text-xs font-mono text-gray-500">{edu.period}</span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className={`w-4 h-4 rounded-full border-4 border-[#050505] ${
                    edu.color === 'purple' ? 'bg-purple-500 shadow-[0_0_0_4px_rgba(168,85,247,0.3)]' :
                    edu.color === 'orange' ? 'bg-orange-500 shadow-[0_0_0_4px_rgba(249,115,22,0.3)]' : 
                    'bg-cyan-500 shadow-[0_0_0_4px_rgba(6,182,212,0.3)]'
                  } group-hover:scale-125 transition-transform duration-300`}></div>
                </div>
                
                {/* Empty Space */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-orange-900/20 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Academic Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div className="flex items-center justify-center space-x-2">
                <i className="fas fa-trophy text-yellow-500"></i>
                <span>Dean's List Student</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <i className="fas fa-code text-purple-400"></i>
                <span>Programming Contest Participant</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <i className="fas fa-users text-orange-400"></i>
                <span>Tech Club Member</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}