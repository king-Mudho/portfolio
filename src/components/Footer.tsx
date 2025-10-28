import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-white mb-2">
                Daniel Simbarashe Mudhombozi
              </p>
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-2">
                Built with{' '}
                <Heart className="text-red-500 fill-red-500" size={16} />
                using React, TypeScript, and Tailwind CSS
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/danielmudhombozi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/danielmudhombozi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:daniel.mudhombozi@example.com"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              Copyright &copy; {currentYear} Daniel Simbarashe Mudhombozi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
