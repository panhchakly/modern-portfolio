import Navigation from './components/Navigation';
import TypeWriter from './components/TypeWriter';
import profile_pic from './assets/profile.png';
import { Code2, Database, Settings, ExternalLink, Github, Mail, Linkedin } from 'lucide-react';

function App() {
  const skills = [
    {
      category: 'Frontend Development',
      icon: Code2,
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Angular', 'Vue.js', 'Next.js']
    },
    {
      category: 'Backend Development',
      icon: Database,
      tech: ['Node.js', 'Nest.js', 'PHP', 'Laravel', 'Yii2', 'Python', 'REST APIs', 'Redis', 'Firebase', 'MongoDB', 'MySQL']
    },
    {
      category: 'Software Architecture',
      icon: Settings,
      tech: ['System Design', 'API Design', 'Scalability', 'Security Best Practices', 'Performance Optimization']
    }
  ];

  const experience = [
    {
      title: 'Software Development Specialist',
      company: 'Metfone',
      period: '2023 - Present',
      description: 'Developed and maintained multiple iMT system modules, architected third-party integration APIs, implemented FTP/Telnet functions, designed MySQL Views and Stored Procedures, and built automated daily reporting system with Mail and SMS notifications.',
      achievements: [
        'Developed and maintained multiple modules in iMT system for managing mobile and internet services',
        'Developed APIs for third-party integrations and system connectivity',
        'Integrated third-party APIs for alarm scanning, equipment information retrieval, and work order execution',
        'Implemented FTP-based file transfer functions for server uploads and third-party downloads',
        'Created Telnet-based functions to retrieve data from network devices',
        'Processed and transformed raw data files for database imports',
        'Built automated daily reporting system with Mail and SMS notifications',
        'Designed MySQL Views, Stored Procedures, Events, and Triggers for data management'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'Seatel',
      period: '2021 - 2023',
      description: 'Designed and implemented APIs for web and mobile platforms, developed Lucky draw and referral program features, integrated third-party APIs for service plan purchases and subscriptions, and maintained multiple modules across web admin and web portal platforms.',
      achievements: [
      'Developed and maintained APIs for integrations with web admin, web portal, and mobile application',
      'Built APIs for Lucky draw and referral program features',
      'Integrated third-party APIs to enable service plan purchases and subscriptions for mobile applications',
      'Developed and maintained multiple modules across web admin and web portal platforms',
      'Resolved dealer complaints and issues related to SIM card management',
      'Implemented real-time notifications for user activities and system events',
      'Integrated google analytics API to track user interactions and generate reports',
      'Integrated google sheets Apps Script to sync data with google calendar'
      ]
    },
    {
      title: 'Web Developer',
      company: 'MaxBIT',
      period: '2019 - 2021',
      description: 'Built responsive web applications and internal tools, developed attendance tracking system with real-time features, and optimized website performance and security.',
      achievements: [
      'Developed multiple websites for various clients with responsive design and modern UI/UX',
      'Developed and maintained attendance web application with real-time tracking and reporting features',
      'Performed performance optimization and security audits on client websites',
      'Created web tools to support internal operations',
      'Customized WordPress themes and plugins for client projects',
      'Integrated Shopify stores with Facebook Commerce for seamless product listing and order management'
    ]
    }
  ];

  const feature_projects = [
    {
      title: 'iMT System',
      description: 'Comprehensive management system for mobile and internet services, including third-party integrations, FTP/Telnet functions, and automated reporting.',
      tags: ['PHP', 'Python', 'MySQL', 'FTP', 'Telnet', 'Mail', 'SMS', 'API Integration']
    },
    {
      title: 'Lucky Draw & Referral Program',
      description: 'Real-time lucky draw and referral program features for mobile applications.',
      tags: ['Node.js', 'Nest.js', 'REST APIs', 'Third-Party API Integration', 'MongoDB']
    },
    {
      title: 'Attendance Tracking System',
      description: 'Real-time attendance system for employee tracking and monitoring.',
      tags: ['Yii2', 'MySQL', 'Telegram Bot']
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with real-time inventory, payment processing, and admin dashboard.',
      tags: ['Laravel', 'WordPress', 'ABA Pay', 'MySQL']
    },
    {
      title: 'Custom WordPress Theme & Plugin Development',
      description: 'Custom WordPress theme and plugin development for various clients.',
      tags: ['WordPress', 'PHP', 'MySQL']
    },
    {
      title: 'Shopify & FB Commerce Integration',
      description: 'Integration of Shopify store with Facebook Commerce for seamless product listing and order management.',
      tags: ['Shopify', 'Facebook Commerce']
    }
  ];

  const contact = [
    {
      icon: Github,
      link: 'https://github.com/ChhengPanhchakly',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/chheng-panhchakly/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      link: 'mailto:BzK4g@example.com',
      label: 'Email'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />

      <main className="container-responsive pt-20 md:pt-24 pb-20 md:pb-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
            <section className="mb-20 mt-8" id="about">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl">
              <img 
                src={profile_pic} 
                alt="Profile" 
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h1 className="whitespace-nowrap text-4xl md:text-5xl font-bold text-white mb-4">
                Chheng Panhchakly
                </h1>
                <TypeWriter 
                  texts={[
                    "Web Developer",
                    "Backend Developer",
                    "Software Development Specialist"
                  ]}
                  speed={50}
                  delayBetweenTexts={2000}
                  className="text-xl text-blue-50 mb-2"
                />
                <p className="text-blue-100 mb-6">
                Experienced full-stack developer specializing in backend systems, APIs, and software architecture. Passionate about designing scalable solutions and building high-performance applications across web and mobile platforms.
                </p>
                <div className="flex flex-wrap gap-4">
                <a href="mailto:chhengpanhchakly@gmail.com" target="_blank" className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  <Mail size={18} />
                  <span>Get In Touch</span>
                </a>
                <a href="https://github.com/chhengpanhchakly" target="_blank" className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  <Github size={18} />
                  <span>View Projects</span>
                </a>
                </div>
              </div>
              </div>
            </div>
            </section>

          <section className="mb-20" id="skills">
            <h2 className="text-3xl font-bold text-white mb-10">Core Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {skill.category}
                    </h3>
                    <div className="space-y-2">
                      {skill.tech.map((tech, i) => (
                        <div
                          key={i}
                          className="inline-block bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-20" id="experience">
            <h2 className="text-3xl font-bold text-white mb-10">Professional Experience</h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                  {job.title}
                  </h3>
                  <p className="text-blue-400 font-medium">
                  {job.company}
                  </p>
                </div>
                <span className="text-gray-400 text-sm md:text-right mt-2 md:mt-0">
                  {job.period}
                </span>
                </div>
                <p className="text-gray-300 mb-4">
                {job.description}
                </p>
                <ul className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>{achievement}</span>
                  </li>
                ))}
                </ul>
              </div>
              ))}
            </div>
          </section>

          <section className="mb-20" id="projects">
            <h2 className="text-3xl font-bold text-white mb-10">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {feature_projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white flex-1">
                      {project.title}
                    </h3>
                    <ExternalLink className="hidden text-gray-400 group-hover:text-blue-400 transition-colors flex-shrink-0 ml-2" size={20} />
                  </div>
                  <p className="text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

            <section className="bg-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12 text-center" id="contact">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always interested in discussing new projects, innovative ideas, and opportunities to create exceptional digital solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {contact.map((item, index) => {
              const Icon = item.icon;
              return (
                <a 
                key={index}
                href={item.link} 
                target="_blank" 
                className="inline-flex items-center space-x-2 bg-gray-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                <Icon size={20} />
                <span>{item.label}</span>
                </a>
              );
              })}
            </div>
            </section>
        </div>
      </main>
    </div>
  );
}

export default App;
