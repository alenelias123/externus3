"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center px-40 py-5 w-full bg-black border border-neutral-800 min-h-[100px] max-md:px-20 max-md:py-5 max-sm:p-5">
      <Link href="/" className="flex relative gap-3 justify-end items-end">
        <div className="bg-lime-400 rounded-lg h-[60px] w-[60px] max-sm:w-10 max-sm:h-10" >
        <img
                  src="/FAVICON.ico"
                  alt="Externus Media Logo"
                  className="w-6 h-6 object-contain"
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
