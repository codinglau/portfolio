import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import NavItems from './NavItem';
import userData from '@/constants/data';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
      <div className="flex md:flex-row justify-between items-center">

        {/* Name and title */}
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-xl dark:text-gray-100">
              {userData.name}
            </h1>
            <p className="text-base font-light text-gray-500 dark:text-gray-300">
              {userData.designation}
            </p>
          </Link>
        </div>

        {/* Desktop nav items */}
        <div className="space-x-8 hidden md:block">
          <NavItems items={userData.pages} />
        </div>

        {/* Social link icons */}
        <div className="space-x-3 flex flex-row items-center">
          {
            userData.socialLinks.map((link) => {
              return (
                <a key={link.name}
                  href={link.href}
                  target="_blank"
                  className="text-xl font-normal text-gray-600 dark:text-gray-300"
                >
                  <i className={link.icon}></i>
                </a>
              );
            })
          }

          {/* Dark mode toggle button */}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none leading-[50%]"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && theme === "light" 
              ? (<i className="bi bi-moon-fill text-yellow-500 dark:text-yellow-500"></i>)
              : (<i className="bi bi-sun-fill text-yellow-500 dark:text-yellow-500"></i>)
            }
          </button>
        </div>
      </div>

      {/* Mobile nav items */}
      <div className="space-x-8 block md:hidden mt-4">
        <NavItems items={userData.pages} />
      </div>
    </div>
  );
}