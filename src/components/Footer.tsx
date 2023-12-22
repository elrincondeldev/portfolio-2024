'use client';
import React from 'react';
import Link from 'next/link';
import Contact from './Contact';
import { useValueStore } from '@/store/valueStore';

function Footer() {
  const {contactState, setContactState} = useValueStore((state) => ({
    contactState: state.contactState,
    setContactState: state.setContactState,
  }))

  return (
    <>
    <div className='hidden md:flex justify-between w-full max-w-[1200px] mb-24'>
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
          <li className='cursor-pointer' onClick={() => setContactState(true)}>
            Message
          </li>
        </ul>
      </div>
      <div
        style={{ transition: 'all 0.5s' }}
        className={
          contactState
            ? 'fixed z-10 top-0 left-0 flex justify-center px-16 items-center h-screen w-screen bg-black bg-opacity-70'
            : 'hidden'
        }
      >
        <Contact />
      </div>
    </div>
    <div className='flex md:hidden flex-col justify-between w-full max-w-[1200px] mb-12'>
      <div className='flex gap-8 montserrat font-bold justify-center mb-10'>
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
          <li className='cursor-pointer' onClick={() => setContactState(true)}>
            Message
          </li>
        </ul>
      </div>
      <p className='montserrat font-bold text-center'>Made with 💚 by Jose Ramón Montes.</p>
      <div
        style={{ transition: 'all 0.5s' }}
        className={
          contactState
            ? 'fixed z-10 top-0 left-0 flex justify-center px-4 items-center h-screen w-screen bg-black bg-opacity-70'
            : 'hidden'
        }
      >
        <Contact />
      </div>
    </div>
    </>
  );
}

export default Footer;
