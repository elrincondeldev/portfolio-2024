'use client';
import React from 'react';
import Link from 'next/link';
import Contact from './Contact';
import { useState } from 'react';

function Footer() {
  const [showContact, setShowContact] = useState<boolean>(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <div className='flex justify-between w-full max-w-[1200px] mb-24'>
      <p className='montserrat font-bold'>Made with 💚 by Jose Ramón Montes.</p>
      <div className='flex gap-8 montserrat font-bold'>
        <ul className='flex flex-col gap-1'>
          <li className='title'>Elsewhere</li>
          <Link
            className='cursor-pointer'
            href='https://github.com/jmontes33'
            target='_blank'
          >
            GitHub
          </Link>
          <li>CV</li>
          <Link
            href='https://www.linkedin.com/in/joseramonmontes/'
            target='_bank'
            className='cursor-pointer'
          >
            Linkedin
          </Link>
        </ul>
        <ul className='flex flex-col gap-1'>
          <li className='title'>Contact</li>
          <li className='cursor-pointer' onClick={toggleContact}>
            Message
          </li>
        </ul>
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
    </div>
  );
}

export default Footer;
