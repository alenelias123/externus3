"use client";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Google Forms configuration
  // To set up Google Forms integration:
  // 1. Create a new Google Form with fields: First Name, Last Name, Email, Company, Service Interest, Budget, Message
  // 2. Get the form ID from the Google Form URL
  // 3. Get entry IDs by inspecting the form HTML or using the pre-filled URL method
  // 4. Replace the placeholder values below with your actual form ID and entry IDs

  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeLDmyX4SJTej7kic9TXxBEMvfLDnUK6pZLkEmdn1fW57W1sQ/formResponse";

  const FORM_FIELDS = {
    firstName: "entry.1743089855", // Replace with actual entry ID
    lastName: "entry.1692624681", // Replace with actual entry ID
    email: "entry.1301056248", // Replace with actual entry ID
    company: "entry.1468211199", // Replace with actual entry ID
    service: "entry.1592190856", // Replace with actual entry ID
    budget: "entry.289577027", // Replace with actual entry ID
    message: "entry.967425827", // Replace with actual entry ID
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    try {
      // Create a hidden iframe for submission to avoid CORS issues
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.name = "hidden_iframe";
      document.body.appendChild(iframe);

      // Create a temporary form for submission
      const tempForm = document.createElement("form");
      tempForm.action = GOOGLE_FORM_ACTION_URL;
      tempForm.method = "POST";
      tempForm.target = "hidden_iframe";

      // Add all form data to the temporary form
      for (let pair of formData.entries()) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = pair[0];
        input.value = pair[1];
        tempForm.appendChild(input);
      }

      document.body.appendChild(tempForm);
      tempForm.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(tempForm);
        document.body.removeChild(iframe);
      }, 1000);

      // Show success message
      setSubmitMessage(
        "Thank you for your message! We will get back to you within 24 hours.",
      );
      event.target.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage(
        "There was an error sending your message. Please try again or email us directly.",
      );
    } finally {
      setIsSubmitting(false);

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Send us a message</h2>

      {submitMessage && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitMessage.includes("error")
              ? "bg-red-900/50 border border-red-700 text-red-200"
              : "bg-green-900/50 border border-green-700 text-green-200"
          }`}
        >
          {submitMessage}
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
              name={FORM_FIELDS.firstName}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition disabled:opacity-50"
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
              name={FORM_FIELDS.lastName}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition disabled:opacity-50"
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
            name={FORM_FIELDS.email}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition disabled:opacity-50"
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
            name={FORM_FIELDS.company}
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition disabled:opacity-50"
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
            name={FORM_FIELDS.service}
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition disabled:opacity-50"
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
            name={FORM_FIELDS.budget}
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition disabled:opacity-50"
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
            name={FORM_FIELDS.message}
            rows={6}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition resize-none disabled:opacity-50"
            placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-lime-400 text-neutral-800 py-4 px-6 rounded-lg font-semibold text-lg hover:bg-lime-300 transition transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:transform-none"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
