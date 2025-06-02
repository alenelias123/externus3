"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center px-40 py-5 w-full bg-black border border-neutral-800 min-h-[100px] max-md:px-20 max-md:py-5 max-sm:p-5">
      <Link
        href="/"
        className="flex relative gap-3 justify-end items-end hover:opacity-80 transition-opacity"
      >
        <div className="bg-lime-400 rounded-lg h-[60px] w-[60px] max-sm:w-10 max-sm:h-10 flex items-center justify-center overflow-hidden">
          <img
            src="\FAVICON.ico"
            alt="Externus Media Logo"
            className="w-8 h-8 max-sm:w-6 max-sm:h-6 object-contain"
          />
        </div>
        <div className="ml-3.5 text-3xl leading-10 text-white max-sm:ml-2 max-sm:text-2xl">
          Externus Media
        </div>
      </Link>
      <div className="flex gap-8 items-center max-sm:hidden">
        <Link
          href="/"
          className={`flex gap-2.5 items-start px-7 py-3.5 rounded-lg transition ${
            pathname === "/" ? "bg-neutral-800" : "hover:bg-neutral-800"
          }`}
        >
          <div
            className={`text-lg font-semibold leading-7 ${
              pathname === "/" ? "text-white" : "text-neutral-200"
            }`}
          >
            Home
          </div>
        </Link>
        <Link
          href="/work"
          className={`text-lg font-medium leading-7 transition ${
            pathname === "/work"
              ? "text-lime-400"
              : "text-neutral-200 hover:text-lime-400"
          }`}
        >
          Work
        </Link>
      </div>
      <Link
        href="/contact"
        className="flex gap-2 items-center px-6 py-4 bg-lime-400 rounded-lg max-sm:px-4 max-sm:py-3 hover:bg-lime-300 transition"
      >
        <div className="text-lg font-medium leading-7 text-neutral-800 max-sm:text-base">
          Contact Us
        </div>
      </Link>
    </div>
  );
}

export default Header;
