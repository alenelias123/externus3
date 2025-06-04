"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Google Forms configuration
  const FORM_ID = "1FAIpQLSeLDmyX4SJTej7kic9TXxBEMvfLDnUK6pZLkEmdn1fW57W1sQ";
  const FORM_FIELDS = {
    firstName: "entry.1743089855",
    lastName: "entry.1692624681",
    email: "entry.1301056248",
    company: "entry.1468211199",
    service: "entry.1592190856",
    budget: "entry.289577027",
    message: "entry.967425827",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create form data for Google Forms
      const googleFormData = new FormData();

      // Map form fields to Google Forms entry IDs
      googleFormData.append(FORM_FIELDS.firstName, formData.firstName);
      googleFormData.append(FORM_FIELDS.lastName, formData.lastName);
      googleFormData.append(FORM_FIELDS.email, formData.email);
      googleFormData.append(FORM_FIELDS.company, formData.company);
      googleFormData.append(FORM_FIELDS.service, formData.service);
      googleFormData.append(FORM_FIELDS.budget, formData.budget);

      googleFormData.append(FORM_FIELDS.message, formData.message);

      // Submit to Google Forms
      const response = await fetch(
        `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`,
        {
          method: "POST",
          body: googleFormData,
          mode: "no-cors", // Required for Google Forms
        },
      );

      // Since we're using no-cors, we can't read the response
      // but the form submission should work
      setSubmitStatus("success");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Send us a message</h2>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-lime-400/10 border border-lime-400/20 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-neutral-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="text-lime-400 font-semibold">
                Message Sent Successfully!
              </div>
              <div className="text-gray-300 text-sm">
                We'll get back to you within 24 hours.
              </div>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="text-red-400 font-semibold">
                Message Failed to Send
              </div>
              <div className="text-gray-300 text-sm">
                Please try again or email us directly at{" "}
                <a
                  href="mailto:contact@externusmedia.com"
                  className="text-lime-400 hover:text-lime-300"
                >
                  contact@externusmedia.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
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
              value={formData.firstName}
              onChange={handleInputChange}
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
              value={formData.lastName}
              onChange={handleInputChange}
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
            value={formData.email}
            onChange={handleInputChange}
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
            value={formData.company}
            onChange={handleInputChange}
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
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition"
          >
            <option value="">Select a service</option>
            <option value="Branding">Branding</option>
            <option value="Web Design">Web Design</option>
            <option value="Social Media Strategy">Social Media Strategy</option>
            <option value="General Consultation">General Consultation</option>
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
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition"
          >
            <option value="">Select budget range</option>
            <option value="Under $5,000">Under $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
            <option value="Over $50,000">Over $50,000</option>
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
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition resize-none"
            placeholder="Tell us about your project, goals, specific requirements, and any additional information that would help us understand your needs better..."
          ></textarea>
        </div>

        <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
          <p className="text-sm text-gray-300 mb-2">
            <strong className="text-lime-400">Secure Submission:</strong> Your
            message will be securely submitted and we'll respond within 24
            hours.
          </p>
          <p className="text-xs text-gray-400">
            If you prefer, you can also email us directly at{" "}
            <a
              href="mailto:contact@externusmedia.com"
              className="text-lime-400 hover:text-lime-300 transition"
            >
              contact@externusmedia.com
            </a>
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-lime-400 text-neutral-800 py-4 px-6 rounded-lg font-semibold text-lg hover:bg-lime-300 transition transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {/* Alternative Contact Methods */}
      <div className="mt-12 pt-8 border-t border-neutral-800">
        <h3 className="text-xl font-semibold mb-4 text-lime-400">
          Prefer to contact us directly?
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-neutral-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-medium">Email</div>
              <a
                href="mailto:contact@externusmedia.com"
                className="text-gray-400 hover:text-lime-400 transition"
              >
                contact@externusmedia.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-neutral-800"
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
            <div>
              <div className="text-white font-medium">Schedule a Call</div>
              <div className="text-gray-400">
                Let's discuss your project goals
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-neutral-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="text-white font-medium">Response Time</div>
              <div className="text-gray-400">Within 24 hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
