"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

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
    <nav className='fixed top-0 w-full bg-white border-b shadow z-50 px-6 sm:px-12 py-4'>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        <Link href='/' className='text-xl font-bold text-primary'>
          shaurya.space
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex gap-6'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm hover:text-primary ${
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-gray-600"
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
        <div className='md:hidden flex flex-col gap-4 mt-4 px-6'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block text-sm hover:text-primary ${
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-gray-600"
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
