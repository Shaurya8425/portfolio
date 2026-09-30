"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [pathname]);

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    setOpen(false);
  };

  return (
    <nav className='fixed top-0 w-full z-50 px-5 sm:px-8 py-5'>
      <div className='flex justify-between items-center max-w-6xl mx-auto surface px-4 py-3 shadow-sm backdrop-blur-md'>
        <Link href='/' className='text-lg font-black tracking-tight'>
          byshaurya<span className='text-primary'>.</span>com
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex gap-1 items-center'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavigation}
              className={`text-xs font-bold px-3 py-2 rounded-full transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/10 ${
                pathname === link.href
                  ? "bg-primary text-black"
                  : "text-[var(--foreground)]/75"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <ThemeToggle />

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
        <div className='md:hidden flex flex-col gap-2 mt-3 px-3 py-3 surface'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavigation}
              className={`block text-sm font-bold px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 ${
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-[var(--foreground)]/75"
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
