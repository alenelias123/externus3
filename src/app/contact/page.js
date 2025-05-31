import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main className="px-6 py-20 max-w-6xl mx-auto">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Ready to bring your vision to life? Let's discuss your project and
            explore how we can help you achieve your goals.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition"
                >
                  <option value="">Select a service</option>
                  <option value="branding">Branding</option>
                  <option value="web-design">Web Design</option>
                  <option value="social-media">Social Media Strategy</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Project Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="over-50k">Over $50,000</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition resize-none"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-lime-400 text-neutral-800 py-4 px-6 rounded-lg font-semibold text-lg hover:bg-lime-300 transition transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Let's connect</h2>

            <div className="space-y-8">
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                <h3 className="text-xl font-semibold mb-4 text-lime-400">
                  Email Us
                </h3>
                <p className="text-gray-300 mb-2">Get in touch directly</p>
                <a
                  href="mailto:contact@externusmedia.com"
                  className="text-white hover:text-lime-400 transition"
                >
                  contact@externusmedia.com
                </a>
              </div>

              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                <h3 className="text-xl font-semibold mb-4 text-lime-400">
                  Response Time
                </h3>
                <p className="text-gray-300">
                  We typically respond to all inquiries within 24 hours during
                  business days.
                </p>
              </div>

              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                <h3 className="text-xl font-semibold mb-4 text-lime-400">
                  What's Next?
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Initial consultation call</li>
                  <li>• Project scope & timeline discussion</li>
                  <li>• Proposal & agreement</li>
                  <li>• Project kickoff</li>
                </ul>
              </div>

              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                <h3 className="text-xl font-semibold mb-4 text-lime-400">
                  Follow Us
                </h3>
                <p className="text-gray-300 mb-4">
                  Stay updated with our latest work
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-neutral-800 hover:bg-lime-400 text-white hover:text-neutral-800 p-3 rounded-lg transition"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-neutral-800 hover:bg-lime-400 text-white hover:text-neutral-800 p-3 rounded-lg transition"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-neutral-800 hover:bg-lime-400 text-white hover:text-neutral-800 p-3 rounded-lg transition"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.291C3.85 14.408 3.014 12.861 3.014 11.104c0-1.757.836-3.304 2.112-4.593.875-.801 2.026-1.291 3.323-1.291 1.297 0 2.448.49 3.323 1.291 1.276 1.289 2.112 2.836 2.112 4.593 0 1.757-.836 3.304-2.112 4.593-.875.801-2.026 1.291-3.323 1.291zm7.83-1.595c-.39.39-1.023.39-1.414 0L12.03 12.56c-.39-.39-.39-1.023 0-1.414.39-.39 1.023-.39 1.414 0l2.835 2.833c.39.39.39 1.023 0 1.414z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
