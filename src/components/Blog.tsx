import { useState } from 'react';
import { Calendar, Clock, X, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  snippet: string;
  fullContent: string;
  category: string;
}

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable Enterprise Systems for African Businesses',
      date: 'October 15, 2024',
      readTime: '8 min read',
      snippet: 'Exploring the unique challenges and opportunities in developing enterprise software for the African market, from infrastructure constraints to mobile-first design.',
      fullContent: `
        <p>Africa's digital transformation is accelerating, and with it comes unique challenges and opportunities for software engineers building enterprise systems. Having developed multiple enterprise solutions across Zimbabwe and neighboring countries, I've learned that success requires adapting global best practices to local contexts.</p>

        <h3>Understanding the Landscape</h3>
        <p>African businesses face distinct challenges: intermittent internet connectivity, limited IT infrastructure, diverse user technical literacy, and mobile-first adoption patterns. These factors demand a different approach to enterprise software development.</p>

        <h3>Key Principles for Success</h3>
        <p><strong>1. Offline-First Architecture:</strong> Design systems that work seamlessly with or without internet connectivity. Implement robust data synchronization and conflict resolution strategies.</p>

        <p><strong>2. Mobile-First Design:</strong> With smartphone penetration exceeding desktop usage, prioritize mobile experiences. Ensure your applications work efficiently on low-end devices with limited bandwidth.</p>

        <p><strong>3. Localization Matters:</strong> Support local currencies, languages, and business practices. What works in Western markets may need significant adaptation for African contexts.</p>

        <p><strong>4. Scalability on a Budget:</strong> Cloud infrastructure costs can be prohibitive. Design efficient systems that minimize resource usage while maintaining performance.</p>

        <h3>Real-World Impact</h3>
        <p>Our school management system serves over 50 institutions, managing everything from enrollment to financial reporting. By focusing on these principles, we've achieved 99.8% uptime and helped schools reduce administrative overhead by 40%.</p>

        <p>The future of African tech is bright. By understanding local needs and building appropriate solutions, we can drive meaningful digital transformation across the continent.</p>
      `,
      category: 'Enterprise Development'
    },
    {
      id: 2,
      title: 'Optimizing a School Timetable Generator with Django',
      date: 'September 22, 2024',
      readTime: '10 min read',
      snippet: 'A deep dive into building an intelligent timetable scheduling system using constraint-based algorithms and Django, reducing scheduling time from weeks to minutes.',
      fullContent: `
        <p>School timetable generation is a classic constraint satisfaction problem that has plagued educational institutions for decades. When I set out to build an automated solution, I quickly realized this was more complex than it initially appeared.</p>

        <h3>The Challenge</h3>
        <p>Creating a conflict-free timetable requires satisfying numerous constraints simultaneously:</p>
        <ul>
          <li>No teacher can be in two places at once</li>
          <li>Classrooms have limited capacity</li>
          <li>Some subjects require specific rooms (labs, gyms)</li>
          <li>Teachers have availability preferences</li>
          <li>Students need balanced daily schedules</li>
        </ul>

        <h3>The Solution Approach</h3>
        <p><strong>Genetic Algorithm Implementation:</strong> I chose genetic algorithms for their ability to find near-optimal solutions in reasonable time. The algorithm treats each timetable as an individual in a population, applying selection, crossover, and mutation operations to evolve better solutions.</p>

        <p><strong>Django Backend Integration:</strong> Django's ORM made it easy to model complex relationships between teachers, subjects, rooms, and time slots. The admin interface provided teachers with an intuitive way to set their availability.</p>

        <p><strong>Constraint Validation:</strong> Before generating timetables, the system validates that a solution is theoretically possible. This prevents hours of computation when constraints are impossible to satisfy.</p>

        <h3>Performance Optimization</h3>
        <p>Initial implementations took several hours to generate timetables. Through profiling and optimization, including caching constraint checks and parallelizing fitness evaluations, I reduced this to under 5 minutes for a school with 40 teachers and 500 students.</p>

        <h3>Results</h3>
        <p>Schools using the system report saving 2-3 weeks of manual scheduling work per term. The automated conflict detection alone has proven invaluable, catching scheduling issues that would have caused classroom chaos.</p>

        <p>The key lesson? Complex problems require understanding the domain deeply before writing code. Conversations with administrators and teachers shaped the algorithm's priorities more than any textbook.</p>
      `,
      category: 'Algorithm Development'
    },
    {
      id: 3,
      title: 'Why Cloud Computing Is Transforming African Tech Startups',
      date: 'August 10, 2024',
      readTime: '6 min read',
      snippet: 'How cloud platforms are democratizing access to enterprise-grade infrastructure and enabling African startups to compete globally.',
      fullContent: `
        <p>Five years ago, launching a tech startup in Africa meant significant upfront investment in servers, networking equipment, and IT staff. Today, cloud computing has fundamentally changed this equation, making it possible to build world-class systems with minimal capital.</p>

        <h3>The Cost Revolution</h3>
        <p>Traditional infrastructure required purchasing physical servers costing thousands of dollars, along with ongoing maintenance, cooling, and power costs. Cloud platforms let you start with $50/month and scale only as needed. This shift from CapEx to OpEx is a game-changer for bootstrapped startups.</p>

        <h3>Global Reach, Local Presence</h3>
        <p>African startups can now deploy applications across multiple continents with a few clicks. CDNs and edge computing bring content closer to users, dramatically improving performance despite limited local infrastructure.</p>

        <h3>Access to Advanced Services</h3>
        <p>Cloud providers offer managed services for databases, machine learning, analytics, and more. A small team can leverage the same tools that power global tech giants, focusing on building business value rather than managing infrastructure.</p>

        <h3>Challenges Remain</h3>
        <p>Despite the benefits, cloud adoption in Africa faces hurdles:</p>
        <ul>
          <li><strong>Data Sovereignty:</strong> Regulations require some data to remain in-country, but cloud regions are limited.</li>
          <li><strong>Bandwidth Costs:</strong> Internet connectivity remains expensive in many African markets.</li>
          <li><strong>Payment Methods:</strong> International payment processing can be challenging for African businesses.</li>
        </ul>

        <h3>The Path Forward</h3>
        <p>As cloud providers expand their African presence and local alternatives emerge, these challenges will diminish. The next wave of African tech success stories will be built on cloud foundations, enabling rapid innovation and global competition.</p>

        <p>For developers and entrepreneurs, the message is clear: embrace cloud technologies, but design systems that work within local constraints. The future of African tech is cloud-powered, mobile-first, and globally competitive.</p>
      `,
      category: 'Cloud Computing'
    },
    {
      id: 4,
      title: 'Best Practices for Building Secure Healthcare Systems',
      date: 'July 5, 2024',
      readTime: '7 min read',
      snippet: 'Essential security considerations when developing pharmacy and hospital management systems that handle sensitive patient data.',
      fullContent: `
        <p>Healthcare systems handle some of the most sensitive data imaginable. When I built my first pharmacy management system, the security requirements seemed overwhelming. Here's what I've learned about balancing security with usability in healthcare software.</p>

        <h3>Data Protection Fundamentals</h3>
        <p><strong>Encryption Everywhere:</strong> Patient data must be encrypted both in transit (TLS/SSL) and at rest. Use strong encryption algorithms and proper key management practices.</p>

        <p><strong>Access Control:</strong> Implement role-based access control (RBAC) with the principle of least privilege. Pharmacists shouldn't access patient financial records, and billing staff shouldn't see medical histories.</p>

        <p><strong>Audit Trails:</strong> Log every access to patient data with timestamps and user identities. These logs are crucial for compliance and investigating potential breaches.</p>

        <h3>Authentication Best Practices</h3>
        <p>Healthcare environments present unique authentication challenges. Staff need quick access during emergencies, but security can't be compromised. I've found success with:</p>
        <ul>
          <li>Multi-factor authentication for administrative access</li>
          <li>Biometric authentication for frequently-used terminals</li>
          <li>Session timeouts to protect against unattended workstations</li>
          <li>Emergency access protocols with mandatory post-access review</li>
        </ul>

        <h3>Regulatory Compliance</h3>
        <p>While African healthcare regulations vary by country, international standards like HL7 and FHIR provide good frameworks. Design your system with compliance in mind from day one rather than retrofitting security later.</p>

        <h3>Balancing Security and Usability</h3>
        <p>The most secure system is useless if staff can't use it efficiently. Work closely with healthcare providers to understand their workflows. Security measures should enhance rather than hinder patient care.</p>

        <p>Building healthcare systems is a responsibility that goes beyond code. Lives literally depend on getting security right. Invest time in understanding healthcare security requirements, and never compromise on protecting patient data.</p>
      `,
      category: 'Security & Healthcare'
    }
  ];

  return (
    <section id="blog" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-gray-900">
              Blog & Insights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Thoughts on software engineering, enterprise systems, and technology in Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={16} />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={16} />
                      {post.readTime}
                    </span>
                  </div>

                  <span className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-xs font-semibold mb-3">
                    {post.category}
                  </span>

                  <h3 className="text-2xl font-bold mb-3 dark:text-white text-gray-900">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.snippet}
                  </p>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-start justify-between">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm font-semibold mb-3">
                  {selectedPost.category}
                </span>
                <h3 className="text-3xl font-bold dark:text-white text-gray-900 mb-3">
                  {selectedPost.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={16} />
                    {selectedPost.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={16} />
                    {selectedPost.readTime}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 ml-4"
              >
                <X size={24} />
              </button>
            </div>

            <div
              className="p-6 prose dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-li:text-gray-600 dark:prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
