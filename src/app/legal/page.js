import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main className="px-6 py-20 max-w-4xl mx-auto">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Legal</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Our commitment to transparency, privacy, and providing you with
            clear information about our policies and practices.
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-lime-400">
            Privacy Policy
          </h2>
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Information We Collect
                </h3>
                <p>
                  We collect information you provide directly to us, such as
                  when you contact us through our website, submit a project
                  inquiry, or subscribe to our newsletter. This may include your
                  name, email address, phone number, company name, and project
                  details.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  How We Use Your Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    To respond to your inquiries and provide customer support
                  </li>
                  <li>
                    To communicate with you about our services and projects
                  </li>
                  <li>To improve our website and services</li>
                  <li>
                    To send you marketing communications (with your consent)
                  </li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Information Sharing
                </h3>
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy. We may share information with
                  trusted partners who assist us in operating our website and
                  conducting business, provided they agree to keep this
                  information confidential.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Data Security
                </h3>
                <p>
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction. However, no method of transmission
                  over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Your Rights
                </h3>
                <p>
                  You have the right to access, update, or delete your personal
                  information. You may also opt out of receiving marketing
                  communications from us at any time. To exercise these rights,
                  please contact us at{" "}
                  <a
                    href="mailto:info@externusmedia.com"
                    className="text-lime-400 hover:text-lime-300"
                  >
                    info@externusmedia.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms of Service */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-lime-400">
            Terms of Service
          </h2>
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Acceptance of Terms
                </h3>
                <p>
                  By accessing and using our website and services, you accept
                  and agree to be bound by the terms and provision of this
                  agreement. If you do not agree to abide by the above, please
                  do not use this service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Service Description
                </h3>
                <p>
                  Externus Media provides digital marketing services including
                  but not limited to branding, web design, social media
                  strategy, content creation, and digital advertising. All
                  services are provided subject to these terms and any separate
                  service agreements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Intellectual Property
                </h3>
                <p>
                  All content on this website, including text, graphics, logos,
                  images, and software, is the property of Externus Media or its
                  content suppliers and is protected by copyright and other
                  intellectual property laws. You may not reproduce, distribute,
                  or create derivative works without our express written
                  permission.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Client Responsibilities
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>
                    Respond to requests for information in a timely manner
                  </li>
                  <li>Make payments according to agreed terms</li>
                  <li>Respect intellectual property rights</li>
                  <li>Comply with applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Limitation of Liability
                </h3>
                <p>
                  In no event shall Externus Media be liable for any indirect,
                  incidental, special, consequential, or punitive damages,
                  including without limitation, loss of profits, data, use, or
                  other intangible losses, resulting from your use of our
                  services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Termination
                </h3>
                <p>
                  Either party may terminate services with written notice. Upon
                  termination, all completed work will be delivered, and final
                  payments will be due according to the agreed terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Policy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-lime-400">
            Cookie Policy
          </h2>
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  What Are Cookies
                </h3>
                <p>
                  Cookies are small text files that are placed on your computer
                  or mobile device when you visit our website. They are widely
                  used to make websites work more efficiently and provide
                  information to website owners.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  How We Use Cookies
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> These are necessary for
                    the website to function properly
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> These help us understand
                    how visitors interact with our website
                  </li>
                  <li>
                    <strong>Functionality Cookies:</strong> These enhance the
                    functionality and personalization of our website
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> These are used to track
                    visitors across websites to display relevant advertisements
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Managing Cookies
                </h3>
                <p>
                  You can control and/or delete cookies as you wish. You can
                  delete all cookies that are already on your computer and you
                  can set most browsers to prevent them from being placed.
                  However, if you do this, you may have to manually adjust some
                  preferences every time you visit our site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Third-Party Cookies
                </h3>
                <p>
                  Our website may contain third-party services such as Google
                  Analytics, social media widgets, or advertising networks that
                  may place cookies on your device. These third parties have
                  their own privacy policies which we encourage you to review.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Questions About Our Policies?
          </h2>
          <p className="text-gray-300 text-center mb-6">
            If you have any questions about our Privacy Policy, Terms of
            Service, or Cookie Policy, please don't hesitate to contact us.
          </p>
          <div className="text-center">
            <a
              href="mailto:info@externusmedia.com"
              className="bg-lime-400 text-neutral-800 px-6 py-3 rounded-lg font-semibold hover:bg-lime-300 transition inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              Contact Us: info@externusmedia.com
            </a>
          </div>
          <p className="text-sm text-gray-400 text-center mt-4">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
