import Header from "../components/Header";
import Footer from "../components/Footer";

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
      title: "Web Design & Development",
      description:
        "Modern, responsive websites that convert visitors into customers with seamless user experience and performance optimization.",
      features: [
        "Responsive Design",
        "E-commerce",
        "CMS Development",
        "Performance Optimization",
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
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "3M+", label: "Social Impressions" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      quote:
        "Externus Media transformed our brand completely. Their creative approach and attention to detail exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO, TechFlow",
      company: "TechFlow SaaS",
    },
    {
      quote:
        "The social media strategy they developed increased our engagement by 300% in just 3 months. Incredible results!",
      author: "Michael Chen",
      position: "Marketing Director",
      company: "EcoVibe Fashion",
    },
    {
      quote:
        "Professional, creative, and results-driven. Externus Media is our go-to partner for all digital marketing needs.",
      author: "Emma Rodriguez",
      position: "Founder",
      company: "LocalBites Restaurant",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We dive deep into your business goals, target audience, and competitive landscape to understand your unique needs.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Based on our research, we develop a comprehensive strategy tailored to achieve your specific objectives.",
    },
    {
      step: "03",
      title: "Create",
      description:
        "Our team brings the strategy to life with creative design, compelling content, and technical excellence.",
    },
    {
      step: "04",
      title: "Launch",
      description:
        "We execute the plan with precision, ensuring every detail is perfect before going live.",
    },
    {
      step: "05",
      title: "Optimize",
      description:
        "We continuously monitor performance and optimize based on data to maximize your return on investment.",
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
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  We Create
                  <span className="text-lime-400"> Digital</span>
                  <br />
                  Experiences
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Transforming ideas into impactful digital solutions that drive
                  growth, engagement, and success for forward-thinking brands.
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
                <div className="bg-gradient-to-br from-lime-400/20 to-neutral-800/20 rounded-2xl p-8 border border-neutral-800">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-800 rounded-lg p-4 h-24"></div>
                    <div className="bg-lime-400/30 rounded-lg p-4 h-24"></div>
                    <div className="bg-lime-400/20 rounded-lg p-4 h-24"></div>
                    <div className="bg-neutral-700 rounded-lg p-4 h-24"></div>
                  </div>
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
              <div className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-lime-400 transition-all">
                <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-700 relative">
                  <div className="absolute inset-0 bg-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-neutral-600">1</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-lime-400 transition">
                    TechFlow SaaS Platform
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Complete brand identity and web platform design
                  </p>
                </div>
              </div>
              <div className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-lime-400 transition-all">
                <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-700 relative">
                  <div className="absolute inset-0 bg-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-neutral-600">2</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-lime-400 transition">
                    EcoVibe Fashion Campaign
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Social media strategy with 300% engagement increase
                  </p>
                </div>
              </div>
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

        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-neutral-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Clients Say
              </h2>
              <p className="text-xl text-gray-300">
                Don't just take our word for it - hear from our satisfied
                clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800"
                >
                  <div className="text-lime-400 text-2xl mb-4">"</div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-lime-400">
                      {testimonial.company}
                    </div>
                  </div>
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
                  href="mailto:contact@externusmedia.com"
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
