import Header from "../components/Header";
import Footer from "../components/Footer";
import { featuredProjects } from "../data/portfolio";

export default function HomePage() {
  const services = [
    {
      icon: "🎨",
      title: "Brand Identity",
      description:
        "Complete brand development from logo design to brand guidelines, creating memorable identities that resonate with your audience.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Brand Strategy",
      ],
    },
    {
      icon: "💻",
      title: "Business Strategy Development",
      description:
        " We analyze market trends, identify opportunities, and create comprehensive strategies that align with your business goals.",
      features: [
        "In-depth industry research",
        "SEO and Content Strategy",
        "Value proposition enhancementt",
        "Competitor benchmarking",
      ],
    },
    {
      icon: "📱",
      title: "Social Media Strategy",
      description:
        "Data-driven social media campaigns that build community, increase engagement, and drive measurable business results.",
      features: [
        "Content Strategy",
        "Community Management",
        "Paid Advertising",
        "Analytics & Reporting",
      ],
    },
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Happy Clients" },
    { number: "1K+", label: "Engaged Users" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We start by understanding your brand, business goals, audience behavior, and market dynamics to craft a strong foundation for success.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Using insights from research, we build a data-driven digital marketing strategy tailored to your brand’s voice and growth goals.",
    },
    {
      step: "03",
      title: "Create",
      description:
        "Using insights from research, we build a data-driven digital marketing strategy tailored to your brand’s voice and growth goals.",
    },
    {
      step: "04",
      title: "Execute",
      description:
        "We deploy targeted campaigns across the right channels—social, search, email, and more—ensuring consistency and precision in every interaction.",
    },
    {
      step: "05",
      title: "Optimize",
      description:
        "Through real-time analytics and performance tracking, we refine and scale what works—boosting reach, engagement, and conversions.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Brands That Demand
                  <span className="text-lime-400"> Attention</span>
                  <br />
                  Strategies That Drive{" "}
                  <span className="text-lime-400"> Sales</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Where innovation meets strategy in the digital marketing
                  world. We are a dynamic team of marketing experts dedicated to
                  helping businesses thrive in the digital age. We transform
                  ideas into impactful digital solutions that drive growth,
                  engagement, and success for forward-thinking brands.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/work"
                    className="bg-lime-400 text-neutral-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-lime-300 transition transform hover:scale-105 text-center"
                  >
                    View Our Work
                  </a>
                  <a
                    href="/contact"
                    className="border border-lime-400 text-lime-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-lime-400 hover:text-neutral-800 transition text-center"
                  >
                    Start a Project
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/Abstract Design.png"
                    alt="Abstract Design"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-lime-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What We Do
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We specialize in creating comprehensive digital solutions that
                help businesses thrive in the modern landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 hover:border-lime-400 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-lime-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-lime-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section className="py-20 px-6 bg-neutral-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured Work
              </h2>
              <p className="text-xl text-gray-300">
                A glimpse into our recent projects and creative solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project) => (
                <a
                  key={project.id}
                  href="/work"
                  className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-lime-400 transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-700 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-lime-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.category}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center">
              <a
                href="/work"
                className="inline-flex items-center gap-2 bg-lime-400 text-neutral-800 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition"
              >
                View All Projects
                <svg
                  className="w-5 h-5"
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
        </section>

        {/* Process Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-300">
                A proven methodology that delivers exceptional results every
                time.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-lime-400 text-neutral-800 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-12 border border-neutral-700">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and explore how we can help bring
                your vision to life with our creative expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-lime-400 text-neutral-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-lime-300 transition transform hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="mailto:info@externusmedia.com"
                  className="border border-lime-400 text-lime-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-lime-400 hover:text-neutral-800 transition"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
