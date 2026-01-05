'use client';

import { useState, useEffect, useRef } from 'react';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      id: 0,
      title: "TravelEase",
      category: "Travel Booking Platform",
      description: "A comprehensive web app where users can book vehicles as per their need to specific places.",
      fullDescription: "TravelEase is a modern travel booking platform that allows users to easily book various types of vehicles for their travel needs. The platform provides a seamless booking experience with real-time availability, secure payment processing, and comprehensive travel management features.",
      features: [
        "Vehicle booking system with real-time availability",
        "Location-based search and filtering",
        "Secure payment gateway integration",
        "User dashboard for booking management",
        "Responsive design for all devices",
        "Interactive maps and route planning"
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "MongoDB", icon: "fas fa-database", color: "text-green-500" },
        { name: "Express", icon: "fas fa-server", color: "text-gray-400" }
      ],
      color: "blue",
      gradient: "from-blue-900/20 to-black/80",
      liveUrl: "https://travelease-assignment-10.netlify.app"
    },
    {
      id: 1,
      title: "Blood Bridge",
      category: "Healthcare Platform",
      description: "A web app where users can donate blood or create requests for blood donation.",
      fullDescription: "Blood Bridge is a life-saving platform that connects blood donors with those in need. The application facilitates blood donation campaigns, emergency blood requests, and maintains a comprehensive database of donors and recipients with proper matching algorithms.",
      features: [
        "Blood donation request system",
        "Donor registration and profile management",
        "Blood type matching algorithm",
        "Emergency request notifications",
        "Donation history tracking",
        "Location-based donor search"
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "MongoDB", icon: "fas fa-database", color: "text-green-500" },
        { name: "JWT", icon: "fas fa-key", color: "text-yellow-400" }
      ],
      color: "red",
      gradient: "from-red-900/20 to-black/80",
      liveUrl: "https://blood-bridge-web12-assignmen-11.netlify.app"
    },
    {
      id: 2,
      title: "ToyTopia",
      category: "E-Commerce Platform",
      description: "A comprehensive web app where users can browse and buy toys for children.",
      fullDescription: "ToyTopia is an engaging e-commerce platform specifically designed for toy shopping. It features an intuitive interface, advanced search and filtering options, secure checkout process, and comprehensive product management for a delightful shopping experience.",
      features: [
        "Product catalog with advanced filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing",
        "User reviews and ratings system",
        "Order tracking and management",
        "Admin panel for inventory management"
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
        { name: "Express", icon: "fas fa-server", color: "text-gray-400" },
        { name: "MongoDB", icon: "fas fa-database", color: "text-green-500" },
        { name: "Stripe", icon: "fab fa-stripe", color: "text-purple-400" }
      ],
      color: "orange",
      gradient: "from-orange-900/20 to-black/80",
      liveUrl: "https://toytopia-assignment-09-web12-5181.netlify.app"
    },
    {
      id: 3,
      title: "App Store",
      category: "Application Platform",
      description: "A web app where users can discover and install applications as per their needs.",
      fullDescription: "A modern application marketplace that allows users to browse, discover, and install various applications. The platform features categorized app listings, user reviews, ratings, and a streamlined installation process for enhanced user experience.",
      features: [
        "Application catalog with categories",
        "Search and filter functionality",
        "User reviews and ratings",
        "One-click app installation",
        "Developer dashboard for app management",
        "Download statistics and analytics"
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "MongoDB", icon: "fas fa-database", color: "text-green-500" },
        { name: "API", icon: "fas fa-plug", color: "text-white" }
      ],
      color: "purple",
      gradient: "from-purple-900/20 to-black/80",
      liveUrl: "https://assignment-08-web12-5181.netlify.app"
    },
    {
      id: 4,
      title: "Customer Service Hub",
      category: "Management System",
      description: "A comprehensive web app for managing customer service operations and support tickets.",
      fullDescription: "Customer Service Hub is a robust platform designed to streamline customer support operations. It features ticket management, customer communication tools, performance analytics, and automated workflows to enhance customer satisfaction and support efficiency.",
      features: [
        "Ticket management and tracking system",
        "Customer communication portal",
        "Support agent dashboard",
        "Performance analytics and reporting",
        "Automated ticket routing",
        "Knowledge base integration"
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
        { name: "Express", icon: "fas fa-server", color: "text-gray-400" },
        { name: "MongoDB", icon: "fas fa-database", color: "text-green-500" },
        { name: "Socket.io", icon: "fas fa-plug", color: "text-white" }
      ],
      color: "indigo",
      gradient: "from-indigo-900/20 to-black/80",
      liveUrl: "https://cusomer-service-by-web12-5181.netlify.app"
    },
    {
      id: 5,
      title: "Green Earth",
      category: "Environmental Platform",
      description: "A web app where users can buy trees or donate for planting trees to support environmental conservation.",
      fullDescription: "Green Earth is an environmental conservation platform that enables users to contribute to reforestation efforts. Users can purchase trees, make donations for tree planting initiatives, track their environmental impact, and participate in global conservation campaigns.",
      features: [
        "Tree purchasing and donation system",
        "Environmental impact tracking",
        "Planting location mapping",
        "Conservation campaign participation",
        "Carbon footprint calculator",
        "Community engagement features"
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "MongoDB", icon: "fas fa-database", color: "text-green-500" },
        { name: "Maps API", icon: "fas fa-map", color: "text-blue-400" }
      ],
      color: "green",
      gradient: "from-green-900/20 to-black/80",
      liveUrl: "https://web12-5181-assignment-06-green-earth.netlify.app"
    }
  ];

  // Previous demo projects (kept as comments for reference)
  /*
  const demoProjects = [
    {
      id: 0,
      title: "Digital Infrastructure",
      category: "Agency Platform",
      description: "Agency platform with job posting, AI chatbot, and secure application system.",
      fullDescription: "A comprehensive agency platform that streamlines the hiring process with advanced features including job posting management, AI-powered chatbot for candidate screening, and a secure application system with role-based access control.",
      features: [
        "AI-powered candidate screening chatbot",
        "Advanced job posting and management system",
        "Secure application tracking system",
        "Role-based access control and permissions",
        "Real-time notifications and messaging",
        "Analytics dashboard for hiring insights"
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "MongoDB", icon: "fas fa-database", color: "text-green-500" },
        { name: "Socket.io", icon: "fas fa-plug", color: "text-white" }
      ],
      color: "blue",
      gradient: "from-blue-900/20 to-black/80"
    },
    {
      id: 1,
      title: "Tasty Drop",
      category: "Food Delivery Platform",
      description: "Food delivery platform with multiple payment methods and role-based dashboards.",
      fullDescription: "A full-stack food delivery platform featuring multiple payment gateway integrations, real-time order tracking, and comprehensive dashboards for different user roles including customers, riders, and restaurant partners.",
      features: [
        "Multiple payment methods integration",
        "Role-based dashboards (Admin, Rider, Partner)",
        "Subscription service implementation",
        "Real-time order tracking with GPS",
        "User authentication and authorization",
        "Restaurant management system"
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-600" },
        { name: "Stripe", icon: "fab fa-stripe", color: "text-purple-400" }
      ],
      color: "orange",
      gradient: "from-orange-900/20 to-black/80",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDU6Px8peFXsZLgSfbQ4Oo4GrO1fRUQUSnRn5nkQtVIq00KaqND4MKgrEDo9MJmDqS-fZICWvuOIJFi8xSwyhrnfumOeKXwSks0Zb2nI9rQrhaO4uCz22XwWyEG87OFtawWgEsonB5i9GTdtjfhTWmMrPQMhQR5MepMAGONfZTqOXLKJWLQPyhasG-PcHIIJcZe9uKyEkumX-iBc2hDYI4vpHzH9VNs-mvHSRr7CW7WkMkkirON_8IiOTxFtAGMzxWB90K2sH7p2kk"
    },
    {
      id: 2,
      title: "Lost & Found",
      category: "Community Platform",
      description: "A community platform for reporting and reclaiming lost items with dark/light mode.",
      fullDescription: "A community-driven platform that helps people report lost items and connect with those who found them. Features include image uploads, location mapping, category filtering, and a responsive design with both dark and light themes.",
      features: [
        "Lost item reporting with image uploads",
        "Found item matching system",
        "Location-based search and mapping",
        "Category filtering and search",
        "Dark/Light theme toggle",
        "User verification and rating system"
      ],
      technologies: [
        { name: "Next.js", icon: "fas fa-code", color: "text-white" },
        { name: "TypeScript", icon: "fab fa-js-square", color: "text-blue-400" },
        { name: "Prisma", icon: "fas fa-layer-group", color: "text-purple-400" },
        { name: "Tailwind", icon: "fas fa-wind", color: "text-cyan-400" }
      ],
      color: "indigo",
      gradient: "from-indigo-900/20 to-black/80"
    },
    {
      id: 3,
      title: "Anonymous Polls",
      category: "Polling Platform",
      description: "Create anonymous polls that disappear after a set time. No login needed.",
      fullDescription: "A privacy-focused polling platform where users can create anonymous polls without registration. Features automatic poll expiration, real-time results, and complete anonymity for both poll creators and voters.",
      features: [
        "Anonymous poll creation (no login required)",
        "Automatic poll expiration system",
        "Real-time voting and results",
        "Multiple question types support",
        "Share polls via unique links",
        "Privacy-focused design with no tracking"
      ],
      technologies: [
        { name: "Vue.js", icon: "fab fa-vuejs", color: "text-green-400" },
        { name: "Express", icon: "fas fa-server", color: "text-gray-400" },
        { name: "Redis", icon: "fas fa-database", color: "text-red-500" },
        { name: "Socket.io", icon: "fas fa-plug", color: "text-white" }
      ],
      color: "cyan",
      gradient: "from-cyan-900/20 to-black/80"
    },
    {
      id: 4,
      title: "E-Commerce Dashboard",
      category: "Admin Panel",
      description: "Comprehensive admin dashboard for e-commerce management with analytics.",
      fullDescription: "A powerful admin dashboard built with React and Node.js for managing e-commerce operations. Features include product management, order tracking, customer analytics, and real-time sales reporting.",
      features: [
        "Product inventory management",
        "Order processing and tracking",
        "Customer analytics and insights",
        "Real-time sales reporting",
        "Multi-vendor support",
        "Payment gateway integration"
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "MongoDB", icon: "fas fa-database", color: "text-green-500" },
        { name: "Chart.js", icon: "fas fa-chart-bar", color: "text-yellow-400" }
      ],
      color: "purple",
      gradient: "from-purple-900/20 to-black/80"
    },
    {
      id: 5,
      title: "Task Management App",
      category: "Productivity Tool",
      description: "Collaborative task management application with team features and real-time updates.",
      fullDescription: "A modern task management application built with the MERN stack. Features include team collaboration, real-time updates, project timelines, and advanced filtering options for enhanced productivity.",
      features: [
        "Team collaboration and sharing",
        "Real-time task updates",
        "Project timeline visualization",
        "Advanced filtering and search",
        "File attachments and comments",
        "Progress tracking and reporting"
      ],
      technologies: [
        { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
        { name: "Express", icon: "fas fa-server", color: "text-gray-400" },
        { name: "MongoDB", icon: "fas fa-database", color: "text-green-500" },
        { name: "Socket.io", icon: "fas fa-plug", color: "text-white" }
      ],
      color: "green",
      gradient: "from-green-900/20 to-black/80"
    },
    {
      id: 6,
      title: "Weather Dashboard",
      category: "Data Visualization",
      description: "Interactive weather dashboard with forecasts and historical data visualization.",
      fullDescription: "A comprehensive weather dashboard that provides current conditions, forecasts, and historical weather data with interactive charts and maps. Built with modern web technologies for optimal performance.",
      features: [
        "Current weather conditions",
        "7-day weather forecast",
        "Historical data visualization",
        "Interactive weather maps",
        "Location-based services",
        "Weather alerts and notifications"
      ],
      technologies: [
        { name: "Next.js", icon: "fas fa-code", color: "text-white" },
        { name: "TypeScript", icon: "fab fa-js-square", color: "text-blue-400" },
        { name: "D3.js", icon: "fas fa-chart-line", color: "text-orange-400" },
        { name: "API", icon: "fas fa-cloud", color: "text-blue-500" }
      ],
      color: "teal",
      gradient: "from-teal-900/20 to-black/80"
    }
  ];
  */

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      projectRefs.current.forEach((ref, index) => {
        if (ref && index < displayedProjects.length) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveProject(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [displayedProjects.length]);

  const activeProjectData = displayedProjects[activeProject] || projects[0];

  return (
    <section className="py-24 bg-surface-dark/30 relative" id="projects">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative mb-20 text-center">
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-9xl font-bold text-stroke opacity-10 whitespace-nowrap select-none pointer-events-none font-display">
            PROJECTS
          </h2>
          <h2 className="relative text-3xl md:text-4xl font-bold font-display">Projects</h2>
          <div className="w-1 h-1 bg-purple-500 rounded-full mx-auto mt-4 mb-2"></div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Featured Case Studies</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className={`group relative bg-[#121212] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 ${
                  activeProject === index 
                    ? `border-${project.color}-500/50 shadow-lg shadow-${project.color}-500/10` 
                    : 'hover:border-purple-500/30'
                }`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          project.color === 'blue' ? 'bg-blue-600/20 text-blue-400' :
                          project.color === 'red' ? 'bg-red-600/20 text-red-400' :
                          project.color === 'orange' ? 'bg-orange-600/20 text-orange-400' :
                          project.color === 'purple' ? 'bg-purple-600/20 text-purple-400' :
                          project.color === 'indigo' ? 'bg-indigo-600/20 text-indigo-400' :
                          'bg-green-600/20 text-green-400'
                        }`}>
                          {project.category}
                        </span>
                        {activeProject === index && (
                          <span className="text-xs px-2 py-1 rounded-full bg-green-600/20 text-green-400 animate-pulse">
                            Active
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-lg text-gray-300 max-w-md">{project.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <a 
                        className="text-gray-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 cursor-hover" 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="Visit Live Site"
                      >
                        <i className="fas fa-external-link-alt transform group-hover:scale-110 transition-transform duration-300"></i>
                      </a>
                    </div>
                  </div>
                  
                  <div className={`rounded-lg overflow-hidden relative aspect-video bg-gray-900 group-hover:scale-[1.02] transition-transform duration-500 ease-out project-preview-container`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}></div>
                    <div className="w-full h-full flex flex-col p-4">
                      <div className="w-full h-4 bg-gray-800 rounded mb-4 flex items-center px-2 space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      
                      {/* Project Preview with Live Website */}
                      <div className="flex-1 bg-gray-800/50 rounded overflow-hidden border border-white/5 relative group">
                        <iframe
                          src={project.liveUrl}
                          className="w-full h-full scale-50 origin-top-left transform transition-transform duration-300 group-hover:scale-55 project-iframe"
                          style={{ width: '200%', height: '200%' }}
                          loading="lazy"
                          sandbox="allow-same-origin allow-scripts allow-forms"
                          title={`${project.title} Preview`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-2 left-2 right-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className={`text-sm font-bold ${
                                  project.color === 'blue' ? 'text-blue-400' :
                                  project.color === 'red' ? 'text-red-400' :
                                  project.color === 'orange' ? 'text-orange-400' :
                                  project.color === 'purple' ? 'text-purple-400' :
                                  project.color === 'indigo' ? 'text-indigo-400' :
                                  'text-green-400'
                                }`}>
                                  {project.title}
                                </h4>
                                <p className="text-xs text-gray-300">{project.category}</p>
                              </div>
                              <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-1.5 transition-colors cursor-hover"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <i className="fas fa-external-link-alt text-xs text-white"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* Loading overlay */}
                        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center opacity-100 transition-opacity duration-1000 iframe-loading">
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto mb-2"></div>
                            <p className="text-xs text-gray-400">Loading preview...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center pt-8">
              <button 
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="text-sm text-gray-400 hover:text-white inline-flex items-center space-x-2 group transition-colors cursor-hover"
              >
                <span>{showAllProjects ? 'Show less projects' : 'See more projects'}</span>
                <i className={`fas ${showAllProjects ? 'fa-chevron-up' : 'fa-chevron-right'} text-xs transform group-hover:translate-x-1 transition-transform`}></i>
              </button>
            </div>
          </div>

          {/* Dynamic Project Details Sidebar */}
          <div className="hidden lg:block lg:col-span-4 pl-8 border-l border-white/5">
            <div className="sticky top-32">
              <div className="transition-all duration-500 ease-in-out">
                <div className={`flex items-center space-x-2 mb-4 ${
                  activeProjectData.color === 'blue' ? 'text-blue-500' :
                  activeProjectData.color === 'red' ? 'text-red-500' :
                  activeProjectData.color === 'orange' ? 'text-orange-500' :
                  activeProjectData.color === 'purple' ? 'text-purple-500' :
                  activeProjectData.color === 'indigo' ? 'text-indigo-500' :
                  'text-green-500'
                }`}>
                  <div className={`h-0.5 w-4 ${
                    activeProjectData.color === 'blue' ? 'bg-blue-500' :
                    activeProjectData.color === 'red' ? 'bg-red-500' :
                    activeProjectData.color === 'orange' ? 'bg-orange-500' :
                    activeProjectData.color === 'purple' ? 'bg-purple-500' :
                    activeProjectData.color === 'indigo' ? 'bg-indigo-500' :
                    'bg-green-500'
                  }`}></div>
                  <h3 className="font-bold text-lg text-white">{activeProjectData.title}</h3>
                  <i className="fas fa-bookmark text-sm"></i>
                </div>
                
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">{activeProjectData.category}</p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {activeProjectData.fullDescription}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {activeProjectData.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-xs text-gray-300">
                      <span className={`mt-1 ${
                        activeProjectData.color === 'blue' ? 'text-blue-500' :
                        activeProjectData.color === 'red' ? 'text-red-500' :
                        activeProjectData.color === 'orange' ? 'text-orange-500' :
                        activeProjectData.color === 'purple' ? 'text-purple-500' :
                        activeProjectData.color === 'indigo' ? 'text-indigo-500' :
                        'text-green-500'
                      }`}>✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {activeProjectData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`w-5 h-5 mr-2 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-colors cursor-hover ${
                        activeProjectData.color === 'blue' ? 'hover:border-blue-500/50' :
                        activeProjectData.color === 'red' ? 'hover:border-red-500/50' :
                        activeProjectData.color === 'orange' ? 'hover:border-orange-500/50' :
                        activeProjectData.color === 'purple' ? 'hover:border-purple-500/50' :
                        activeProjectData.color === 'indigo' ? 'hover:border-indigo-500/50' :
                        'hover:border-green-500/50'
                      }`}
                      title={tech.name}
                    >
                      <i className={`${tech.icon} ${tech.color} text-[8px]`}></i>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}