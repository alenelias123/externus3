"use client";
import * as React from "react";

function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-lime-400 rounded-lg h-12 w-12 flex items-center justify-center">
                <img
                  src="/FAVICON.ico"
                  alt="Externus Media Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="text-2xl font-bold text-white">
                Externus Media
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Crafting immersive digital experiences through creativity, code &
              strategy. We help brands tell their story and connect with their
              audience.
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.070-4.85.070-3.204 0-3.584-.012-4.849-.070-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-neutral-800 hover:bg-lime-400 text-white hover:text-neutral-800 p-3 rounded-lg transition"
                aria-label="Dribbble"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 7.21c.693 1.454 1.109 3.077 1.109 4.79 0 .746-.075 1.474-.216 2.18-.693-.15-1.548-.27-2.551-.345-.12-.045-.24-.09-.375-.12-.465-1.29-1.02-2.505-1.65-3.615 1.185-.48 2.25-1.05 3.074-1.665-.12-.075-.24-.15-.391-.225zm-1.665 3.074c-.84.615-1.8 1.14-2.88 1.575-.375-.84-.795-1.635-1.26-2.385.915-.24 1.83-.45 2.73-.615.48-.09.945-.15 1.41-.195zm-7.41 9.615c-4.32 0-7.89-2.85-9.165-6.78.405.06.825.105 1.26.135 2.88.195 5.76.075 8.55-.36-.24.66-.465 1.335-.675 2.025-.255.84-.48 1.695-.675 2.565-.42 1.455-.765 2.94-.975 4.455-.12.48-.21.96-.32 1.455zm7.41-9.615c-.84.615-1.8 1.14-2.88 1.575-.375-.84-.795-1.635-1.26-2.385.915-.24 1.83-.45 2.73-.615.48-.09.945-.15 1.41-.195z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-lime-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/work"
                  className="text-gray-400 hover:text-lime-400 transition"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-lime-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition"
                >
                  Social Media Strategy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-lime-400 transition"
                >
                  Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Externus Media. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-lime-400 transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lime-400 transition"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lime-400 transition"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
