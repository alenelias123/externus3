import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getProjectBySlug, allProjects } from "../../../data/portfolio";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main className="px-6 py-20 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/work" className="hover:text-lime-400 transition">
              Work
            </Link>
            <span>/</span>
            <span className="text-white">{project.title}</span>
          </div>
        </nav>

        {/* Project Header */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-lime-400 font-medium mb-4">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.detailedDescription}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Client</div>
                  <div className="font-semibold">{project.client}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Year</div>
                  <div className="font-semibold">{project.year}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Timeline</div>
                  <div className="font-semibold">{project.timeline}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Category</div>
                  <div className="font-semibold">{project.category}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Results Achieved
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(project.results).map(([key, value]) => (
              <div
                key={key}
                className="text-center bg-neutral-900 rounded-xl p-6 border border-neutral-800"
              >
                <div className="text-3xl md:text-4xl font-bold text-lime-400 mb-2">
                  {value}
                </div>
                <div className="text-sm text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
              <h3 className="text-2xl font-bold mb-4 text-red-400">
                The Challenge
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
              <h3 className="text-2xl font-bold mb-4 text-lime-400">
                Our Solution
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Services Provided */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Services Provided
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.services.map((service, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-lg p-4 border border-neutral-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  <span className="text-gray-300">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Video if available */}
          {project.video && (
            <div className="mt-6">
              <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl overflow-hidden">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster={project.image}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-neutral-900 text-gray-300 rounded-lg border border-neutral-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Client Testimonial */}
        {project.testimonial && (
          <section className="mb-16">
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 border border-neutral-700 text-center">
              <div className="text-4xl text-lime-400 mb-4">"</div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 text-gray-300">
                {project.testimonial.text}
              </blockquote>
              <div className="text-lime-400 font-semibold">
                {project.testimonial.author}
              </div>
              <div className="text-gray-400 text-sm">
                {project.testimonial.position}
              </div>
            </div>
          </section>
        )}

        {/* Project Tags */}
        <section className="mb-16">
          <h3 className="text-xl font-bold mb-4 text-center">Project Tags</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-lime-400/10 text-lime-400 rounded-full text-sm border border-lime-400/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-12 border border-neutral-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Similar Results?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your brand's digital
              presence and achieve remarkable growth like we did for{" "}
              {project.client}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-lime-400 text-neutral-800 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                href="/work"
                className="border border-lime-400 text-lime-400 px-8 py-4 rounded-lg font-semibold hover:bg-lime-400 hover:text-neutral-800 transition"
              >
                View More Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
