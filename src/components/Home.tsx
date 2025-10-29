import { Github, Download, Code2, Database, Cloud, Sparkles } from 'lucide-react';

export default function Home() {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'PHP', 'SQL']
    },
    {
      category: 'Web Development',
      items: ['React', 'Django', 'Node.js', 'HTML/CSS', 'Tailwind', 'Bootstrap']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase']
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD', 'REST APIs']
    }
  ];

  return (
    <section id="home" className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                DM
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white text-gray-900">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Daniel Simbarashe Mudhombozi</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              BSc (Hons) in Software Engineering — University of Zimbabwe
            </p>

            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto text-balance">
              Innovative Software Engineer passionate about building scalable solutions for Africa and beyond
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#resume"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a
                href="https://github.com/king-Mudho"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                <Github size={20} />
                View GitHub Projects
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 dark:text-white text-gray-900">About Me</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate software engineer with a BSc (Hons) degree from the University of Zimbabwe, specializing in building enterprise-grade solutions that solve real-world problems. With extensive experience in full-stack development, I've successfully delivered scalable systems for schools, healthcare, legal firms, and real estate businesses across Africa.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                My expertise spans across modern web technologies, cloud computing, and AI integration. I focus on creating intuitive, robust applications that drive digital transformation in emerging markets. Whether it's developing complex school management systems or optimizing enterprise workflows, I bring a combination of technical excellence and business understanding to every project.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-teal-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="text-teal-600 dark:text-teal-400" size={32} />
              <h2 className="text-3xl font-bold dark:text-white text-gray-900">Skills & Technologies</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    {index === 0 && <Code2 className="text-teal-600 dark:text-teal-400" size={24} />}
                    {index === 1 && <Code2 className="text-blue-600 dark:text-blue-400" size={24} />}
                    {index === 2 && <Database className="text-purple-600 dark:text-purple-400" size={24} />}
                    {index === 3 && <Cloud className="text-orange-600 dark:text-orange-400" size={24} />}
                    <h3 className="text-xl font-semibold dark:text-white text-gray-900">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg text-sm font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
