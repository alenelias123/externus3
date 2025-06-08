"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollToServices = () => {
    if (pathname === "/") {
      // Already on homepage, scroll to services section
      const servicesSection = document.getElementById("services-section");
      if (servicesSection) {
        const headerHeight = 120;
        const elementPosition = servicesSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        const startPosition = window.pageYOffset;
        const distance = offsetPosition - startPosition;
        const duration = 800;
        let start = null;

        function smoothScrollAnimation(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const percentage = Math.min(progress / duration, 1);

          const easeInOutCubic =
            percentage < 0.5
              ? 4 * percentage * percentage * percentage
              : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

          window.scrollTo(0, startPosition + distance * easeInOutCubic);

          if (progress < duration) {
            requestAnimationFrame(smoothScrollAnimation);
          }
        }

        requestAnimationFrame(smoothScrollAnimation);
      }
    } else {
      // Navigate to homepage and scroll to services
      router.push("/?scrollTo=services");
    }
  };

  // Handle scroll to services when arriving from other pages
  useEffect(() => {
    if (
      pathname === "/" &&
      window.location.search.includes("scrollTo=services")
    ) {
      // Wait longer for the page to fully load and render
      setTimeout(() => {
        const servicesSection = document.getElementById("services-section");
        if (servicesSection) {
          const headerHeight = 120;
          const elementPosition = servicesSection.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerHeight;

          const startPosition = window.pageYOffset;
          const distance = offsetPosition - startPosition;
          const duration = 800;
          let start = null;

          function smoothScrollAnimation(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);

            const easeInOutCubic =
              percentage < 0.5
                ? 4 * percentage * percentage * percentage
                : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * easeInOutCubic);

            if (progress < duration) {
              requestAnimationFrame(smoothScrollAnimation);
            }
          }

          requestAnimationFrame(smoothScrollAnimation);
        }
      }, 500);
    }
  }, [pathname]);

  return (
    <div className="flex justify-between items-center px-40 py-5 w-full bg-black border border-neutral-800 min-h-[100px] max-md:px-20 max-md:py-5 max-sm:p-5">
      <Link href="/" className="flex relative gap-3 justify-end items-end">
        <div className="bg-lime-400 rounded-lg h-[60px] w-[60px] max-sm:w-10 max-sm:h-10 flex items-center justify-center">
          <img
            src="/FAVICON.ico"
            alt="Externus Media Logo"
            className="object-contain max-sm:w-6 max-sm:h-6"
          />
        </div>
        <div className="ml-3.5 text-3xl leading-10 text-white max-sm:ml-2 max-sm:text-2xl">
          Externus Media
        </div>
      </Link>
      <div className="flex gap-8 items-center max-sm:hidden">
        <Link
          href="/"
          className={`flex gap-2.5 items-start px-7 py-3.5 rounded-lg ${pathname === "/" ? "bg-neutral-800" : ""}`}
        >
          <div className="text-lg font-semibold leading-7 text-white">Home</div>
        </Link>
        <button
          onClick={handleScrollToServices}
          className="text-lg font-medium leading-7 text-neutral-200 hover:text-white transition-colors cursor-pointer"
        >
          Services
        </button>
        <Link
          href="/work"
          className="text-lg font-medium leading-7 text-neutral-200"
        >
          Work
        </Link>
      </div>
      <Link
        href="/contact"
        className="flex gap-2 items-center px-6 py-4 bg-lime-400 rounded-lg max-sm:px-4 max-sm:py-3"
      >
        <div className="text-lg font-medium leading-7 text-neutral-800 max-sm:text-base">
          Contact Us
        </div>
      </Link>
    </div>
  );
}

export default Header;
