import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { featuredProjects, regularProjects } from "../../data/portfolio";

export default function WorkPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main className="px-6 py-20 max-w-7xl mx-auto">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Work</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            A showcase of our creative projects, digital solutions, and brand
            transformations. Each project represents our commitment to
            excellence and innovation.
          </p>
        </section>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-lime-400 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-neutral-600">
                      {project.id}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-sm text-lime-400 font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-lime-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neutral-800 text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 font-medium transition"
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Projects Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-lime-400 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl text-neutral-600">
                      {project.id}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-lime-400 font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-lime-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-neutral-800 text-gray-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-lime-400 hover:text-lime-300 text-sm font-medium transition"
                  >
                    View Project
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-20 mt-20">
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-12 border border-neutral-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. Our team is ready
              to tackle your next challenge and create something extraordinary
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-lime-400 text-neutral-800 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition transform hover:scale-105"
              >
                Start a Project
              </a>
              <a
                href="mailto:contact@externusmedia.com"
                className="border border-lime-400 text-lime-400 px-8 py-4 rounded-lg font-semibold hover:bg-lime-400 hover:text-neutral-800 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
