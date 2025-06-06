import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main className="px-6 py-20 max-w-6xl mx-auto">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Ready to transform your digital presence? Let's discuss your project
            and explore how we can help you achieve remarkable growth and
            success.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <section>
            <ContactForm />
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>

            <div className="space-y-8">
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                <h3 className="text-xl font-semibold mb-4 text-lime-400">
                  Email Us Directly
                </h3>
                <p className="text-gray-300 mb-3">
                  Get in touch for project inquiries
                </p>
                <a
                  href="mailto:info@externusmedia.com"
                  className="text-white hover:text-lime-400 transition font-medium"
                >
                  info@externusmedia.com
                </a>
                <p className="text-sm text-gray-400 mt-2">
                  For urgent requests or quick questions
                </p>
              </div>

              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                <h3 className="text-xl font-semibold mb-4 text-lime-400">
                  Our Process
                </h3>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-lime-400 text-neutral-800 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        Initial Consultation
                      </div>
                      <div className="text-sm">
                        Free 30-minute discovery call
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-lime-400 text-neutral-800 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        Strategy Development
                      </div>
                      <div className="text-sm">
                        Custom strategy & project scope
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-lime-400 text-neutral-800 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        Proposal & Agreement
                      </div>
                      <div className="text-sm">
                        Detailed proposal with timeline
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-lime-400 text-neutral-800 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      4
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        Project Kickoff
                      </div>
                      <div className="text-sm">
                        Begin transformation journey
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                <h3 className="text-xl font-semibold mb-4 text-lime-400">
                  Response Commitment
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Initial Response</span>
                    <span className="text-white font-medium">
                      Within 2 hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Detailed Proposal</span>
                    <span className="text-white font-medium">
                      Within 24 hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Project Start</span>
                    <span className="text-white font-medium">1-2 weeks</span>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                <h3 className="text-xl font-semibold mb-4 text-lime-400">
                  Why Choose Externus Media?
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span>Proven track record of 200%+ growth results</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span>
                      Data-driven strategies tailored to your industry
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span>End-to-end digital marketing solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span>Transparent reporting and regular updates</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                <h3 className="text-xl font-semibold mb-4 text-lime-400">
                  Follow Our Work
                </h3>
                <p className="text-gray-300 mb-4">
                  Stay updated with our latest projects and industry insights
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/company/externusmedia"
                    className="bg-neutral-800 hover:bg-lime-400 text-white hover:text-neutral-800 p-3 rounded-lg transition group"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/externusmedia"
                    className="bg-neutral-800 hover:bg-lime-400 text-white hover:text-neutral-800 p-3 rounded-lg transition group"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.070-4.85.070-3.204 0-3.584-.012-4.849-.070-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Additional Contact Options */}
        <section className="mt-20 py-16 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl border border-neutral-700">
          <div className="text-center px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prefer Other Contact Methods?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We're here to help in whatever way works best for you. Choose the
              contact method that suits your preference.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/30 rounded-xl p-6 border border-neutral-700">
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-neutral-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Direct Email</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Send us an email directly for detailed inquiries
                </p>
                <a
                  href="mailto:info@externusmedia.com"
                  className="bg-lime-400 text-neutral-800 px-4 py-2 rounded-lg font-medium hover:bg-lime-300 transition"
                >
                  Send Email
                </a>
              </div>

              <div className="bg-black/30 rounded-xl p-6 border border-neutral-700">
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-neutral-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Schedule Call</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Book a consultation to discuss your project
                </p>
                <a
                  href="mailto:info@externusmedia.com?subject=Schedule a Consultation Call"
                  className="bg-lime-400 text-neutral-800 px-4 py-2 rounded-lg font-medium hover:bg-lime-300 transition"
                >
                  Book Call
                </a>
              </div>

              <div className="bg-black/30 rounded-xl p-6 border border-neutral-700">
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-neutral-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.678 3.348-3.97z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Question</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Have a quick question? Get fast answers
                </p>
                <a
                  href="mailto:info@externusmedia.com?subject=Quick Question"
                  className="bg-lime-400 text-neutral-800 px-4 py-2 rounded-lg font-medium hover:bg-lime-300 transition"
                >
                  Ask Now
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
