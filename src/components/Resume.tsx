import { Download, GraduationCap, Briefcase, Award, Code } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-gray-900">
              Resume
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Professional experience and qualifications
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <Download size={20} />
              Download Resume PDF
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-lg border border-teal-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-teal-600 dark:text-teal-400" size={28} />
                  <h3 className="text-2xl font-bold dark:text-white text-gray-900">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      BSc (Hons) Software Engineering
                    </h4>
                    <p className="text-teal-600 dark:text-teal-400 font-medium">
                      University of Zimbabwe
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      2018 - 2022
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Graduated with honors. Specialized in enterprise systems, algorithms, and cloud computing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-lg border border-blue-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-blue-600 dark:text-blue-400" size={28} />
                  <h3 className="text-2xl font-bold dark:text-white text-gray-900">Certifications</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      AWS Certified Developer
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Amazon Web Services
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Django Web Framework
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Professional Certification
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      React Advanced Patterns
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Frontend Masters
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-lg border border-orange-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-orange-600 dark:text-orange-400" size={28} />
                  <h3 className="text-2xl font-bold dark:text-white text-gray-900">Profile</h3>
                </div>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>
                    <span className="font-semibold">Email:</span><br />
                    daniel.mudhombozi@example.com
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span><br />
                    Harare, Zimbabwe
                  </p>
                  <p>
                    <span className="font-semibold">Languages:</span><br />
                    English (Fluent), Shona (Native)
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="text-teal-600 dark:text-teal-400" size={28} />
                  <h3 className="text-2xl font-bold dark:text-white text-gray-900">
                    Professional Experience
                  </h3>
                </div>

                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-teal-500 dark:border-teal-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-teal-500 dark:bg-teal-400"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        Senior Software Engineer
                      </h4>
                      <p className="text-teal-600 dark:text-teal-400 font-medium mb-1">
                        MELSOFT Solutions
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                        Jan 2022 - Present
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-teal-500 mt-1">•</span>
                          Led development of comprehensive school management system serving 50+ institutions
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-500 mt-1">•</span>
                          Architected microservices infrastructure reducing system downtime by 95%
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-500 mt-1">•</span>
                          Mentored junior developers and established coding standards
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-500 mt-1">•</span>
                          Implemented CI/CD pipelines accelerating deployment cycles by 60%
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        Full Stack Developer
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        TechAfrica Solutions
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                        Jun 2020 - Dec 2021
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          Developed real estate and legal practice management systems
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          Integrated payment gateways and third-party APIs
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          Optimized database queries improving performance by 40%
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          Collaborated with cross-functional teams on product delivery
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative pl-8 border-l-2 border-purple-500 dark:border-purple-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500 dark:bg-purple-400"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        Software Developer Intern
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                        Digital Innovations Hub
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                        Jan 2020 - May 2020
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          Built responsive web applications using React and Django
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          Participated in agile development sprints and code reviews
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          Learned modern development practices and version control
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg border border-teal-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">
                  Key Projects Summary
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      School Management
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Complete academic and administrative platform for 50+ schools
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Healthcare System
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hospital and pharmacy management with inventory tracking
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Real Estate Platform
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Property management with tenant and financial tracking
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      HR & Payroll
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Automated payroll processing for multiple organizations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
