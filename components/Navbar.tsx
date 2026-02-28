"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Glance", href: "/glance" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed top-0 w-full border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/70 backdrop-blur-md z-50 px-6 sm:px-12 py-4 transition-colors duration-300'>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        <Link href='/' className='text-xl font-bold text-primary'>
          shaurya.space
        </Link>
        <ThemeToggle />

        {/* Desktop Nav */}
        <div className='hidden md:flex gap-6 items-center'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-all duration-200 hover:text-primary hover:-translate-y-0.5 ${
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={() => setOpen(!open)} aria-label='Toggle Menu'>
            {open ? (
              <HiX className='w-6 h-6' />
            ) : (
              <HiMenu className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className='md:hidden flex flex-col gap-4 mt-4 px-6 bg-white dark:bg-black py-4 border-gray-200 dark:border-gray-800'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block text-sm hover:text-primary ${
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
