export default function SkillsSection() {
  const skills = [
    { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-400' },
    { name: 'Next.js', icon: 'fas fa-code', color: 'text-white' },
    { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
    { name: 'TypeScript', icon: 'fab fa-js-square', color: 'text-blue-400' },
    // { name: 'Python', icon: 'fab fa-python', color: 'text-blue-400' },
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
    { name: 'Tailwind', icon: 'fas fa-wind', color: 'text-cyan-400' },
    { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-500' },
    // { name: 'PostgreSQL', icon: 'fas fa-database', color: 'text-blue-600' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600' },
    { name: 'GitHub', icon: 'fab fa-github', color: 'text-white' },
    // { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-400' },
    // { name: 'AWS', icon: 'fab fa-aws', color: 'text-orange-400' },
    // { name: 'Prisma', icon: 'fas fa-layer-group', color: 'text-purple-400' },
    { name: 'Express', icon: 'fas fa-server', color: 'text-gray-400' },
    // { name: 'Redux', icon: 'fas fa-atom', color: 'text-purple-500' },
    { name: 'Figma', icon: 'fab fa-figma', color: 'text-pink-400' },
    { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-500' }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative mb-20 text-center">
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-9xl font-bold text-stroke opacity-10 whitespace-nowrap select-none pointer-events-none font-display">
            SKILLS
          </h2>
          <h2 className="relative text-3xl md:text-4xl font-bold font-display">Skills</h2>
          <div className="w-1 h-1 bg-purple-500 rounded-full mx-auto mt-4 mb-2"></div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Technologies & Tools</span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-orange-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <i className={`${skill.icon} text-3xl ${skill.color} relative z-10 group-hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-laptop-code text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Frontend Development</h3>
            <p className="text-sm text-gray-400">React, Next.js, TypeScript, Tailwind CSS, JavaScript, HTML5, CSS3</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-server text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">MERN Stack</h3>
            <p className="text-sm text-gray-400">MongoDB, Express.js, React, Node.js, <br /> JWT Authentication</p>
            {/* RESTful APIs, */}
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-tools text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Tools & Database</h3>
            <p className="text-sm text-gray-400">Git, GitHub, VS Code, Vercel, Netlify, Firebase, Figma, etc.</p>
             {/* Docker, AWS, PostgreSQL, Prisma, */}
          </div>
        </div>
      </div>
    </section>
  );
}