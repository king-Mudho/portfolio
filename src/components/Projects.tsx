import { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: 'Enterprise' | 'Personal' | 'Backend' | 'Frontend';
  techStack: string[];
  githubUrl: string;
  features: string[];
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'MELSOFT School Management System',
      description: 'Comprehensive school administration platform managing students, staff, academics, and finances.',
      fullDescription: 'A complete enterprise solution for educational institutions, handling everything from student enrollment to financial reporting.',
      category: 'Enterprise',
      techStack: ['Django', 'PostgreSQL', 'React', 'Redis', 'Docker'],
      githubUrl: 'https://github.com/danielmudhombozi',
      features: [
        'Student & staff management with role-based access',
        'Academic records and grading system',
        'Fee management and financial reporting',
        'Timetable scheduling and resource allocation',
        'Parent portal for real-time updates',
        'Automated report generation'
      ]
    },
    {
      id: 2,
      title: 'Real Estate Management System',
      description: 'Property management platform for listings, bookings, and tenant management.',
      fullDescription: 'Modern real estate solution streamlining property listings, tenant relationships, and financial transactions.',
      category: 'Enterprise',
      techStack: ['Django', 'PostgreSQL', 'Bootstrap', 'jQuery'],
      githubUrl: 'https://github.com/danielmudhombozi',
      features: [
        'Property listing management with media galleries',
        'Tenant application and screening workflow',
        'Lease agreement generation and tracking',
        'Rent payment tracking and reminders',
        'Maintenance request system',
        'Financial reporting and analytics'
      ]
    },
    {
      id: 3,
      title: 'Payroll & HR Management System',
      description: 'Automated payroll processing and comprehensive HR management solution.',
      fullDescription: 'Enterprise HR platform automating payroll, leave management, and employee lifecycle management.',
      category: 'Enterprise',
      techStack: ['Django', 'MySQL', 'Celery', 'React', 'Chart.js'],
      githubUrl: 'https://github.com/danielmudhombozi',
      features: [
        'Automated payroll calculation with tax deductions',
        'Leave management with approval workflows',
        'Employee onboarding and offboarding',
        'Performance review system',
        'Attendance tracking and biometric integration',
        'Payslip generation and distribution'
      ]
    },
    {
      id: 4,
      title: 'Legal Practice Management System',
      description: 'Case management and document automation for law firms.',
      fullDescription: 'Specialized legal software for managing cases, clients, billing, and legal documents.',
      category: 'Enterprise',
      techStack: ['Django', 'PostgreSQL', 'Elasticsearch', 'Vue.js'],
      githubUrl: 'https://github.com/danielmudhombozi',
      features: [
        'Case management with milestone tracking',
        'Client relationship management',
        'Document automation and templates',
        'Time tracking and billing',
        'Court date calendar and reminders',
        'Secure document storage and sharing'
      ]
    },
    {
      id: 5,
      title: 'School Timetable Generator',
      description: 'Intelligent algorithm-based timetable scheduling system for educational institutions.',
      fullDescription: 'Smart scheduling solution using constraint-based algorithms to generate optimal school timetables.',
      category: 'Backend',
      techStack: ['Python', 'Django', 'Genetic Algorithms', 'PostgreSQL'],
      githubUrl: 'https://github.com/danielmudhombozi',
      features: [
        'Automated timetable generation with constraint solving',
        'Teacher availability management',
        'Room allocation optimization',
        'Subject and class distribution',
        'Conflict detection and resolution',
        'Export to multiple formats (PDF, Excel, CSV)'
      ]
    },
    {
      id: 6,
      title: 'Pharmacy Management System',
      description: 'Inventory tracking, prescription management, and sales for pharmacies.',
      fullDescription: 'Healthcare-focused system managing pharmaceutical inventory, prescriptions, and regulatory compliance.',
      category: 'Enterprise',
      techStack: ['Django', 'PostgreSQL', 'Bootstrap', 'Barcode Scanner'],
      githubUrl: 'https://github.com/danielmudhombozi',
      features: [
        'Inventory management with expiry tracking',
        'Prescription processing and verification',
        'Drug interaction warnings',
        'Sales and point-of-sale integration',
        'Supplier management and procurement',
        'Regulatory compliance reporting'
      ]
    }
  ];

  const categories = ['All', 'Enterprise', 'Personal', 'Backend', 'Frontend'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-gray-900">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of enterprise systems and applications I've built to solve real-world challenges
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold dark:text-white text-gray-900 flex-1">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                    >
                      <ExternalLink size={16} />
                      Details
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-all"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-2">
                  {selectedProject.title}
                </h3>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm font-semibold">
                  {selectedProject.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.fullDescription}
              </p>

              <h4 className="text-xl font-bold dark:text-white text-gray-900 mb-3">
                Key Features
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-teal-500 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-bold dark:text-white text-gray-900 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-all"
              >
                <Github size={20} />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
