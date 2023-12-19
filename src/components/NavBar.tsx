'use client';
import React from 'react';
import Contact from './Contact';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function NavBar() {
  const pathname = usePathname();
  const [selectedSection, setSelectedSection] = useState<string>(pathname);
  const [showContact, setShowContact] = useState<boolean>(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  const links = [
    {
      label: 'About',
      link: true,
      path: '/about',
    },
    {
      label: 'Content',
      link: false,
      path: '/content',
    },
    {
      label: 'Projects',
      link: false,
      path: '/projects',
    },
    {
      label: 'Contact',
      link: false,
      path: { pathname },
      action: true,
    },
  ];

  return (
    <header className='w-[100%] m-auto'>
      <div className='hidden md:flex justify-between'>
        <div className='flex fixed top-8 left-1/2 text-xl transform -translate-x-1/2 bg-opacity-70 gap-3 h-16 items-center p-2 rounded-[50px] transition-all duration-[500ms] bg-black'>
          {links.map(({ label, path, action }) => {
            if (action) {
              return (
                <button
                  key={label}
                  onClick={toggleContact}
                  className='list-none text-white font-bold p-3 px-10'
                >
                  {label}
                </button>
              );
            } else {
              return (
                <Link
                  key={label}
                  href={path}
                  className={
                    path === selectedSection
                      ? 'list-none text-white font-bold bg-[#505050] p-3 px-10 rounded-[50px]'
                      : 'list-none text-white font-bold p-3 px-10'
                  }
                >
                  {label}
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div className='md:hidden flex justify-between'>
        <div className='flex fixed w-[350px] top-2 left-1/2 justify-center transform -translate-x-1/2 bg-opacity-70 gap-1 h-16 items-center p-2 rounded-[50px] transition-all duration-[500ms]'>
          {links.map(({ label, path }) => (
            <Link
              key={label}
              href={path}
              className={
                path === selectedSection
                  ? 'list-none text-white font-bold bg-[#505050] p-3 px-10 rounded-[50px]'
                  : 'list-none text-white font-bold p-3 px-10'
              }
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div
        style={{ transition: 'all 0.5s' }}
        className={
          showContact
            ? 'hidden sm:flex flex-col gap-3 fixed bottom-1/4 right-[60px] w-[400px] h-[500px] items-center p-3 justify-between rounded-md z-10'
            : 'hidden sm:flex flex-col gap-3 fixed bottom-1/4 -right-[450px] w-[400px] h-[500px] items-center p-3 justify-between rounded-md z-10'
        }
      >
        <Contact />
      </div>
    </header>
  );
}

export default NavBar;
