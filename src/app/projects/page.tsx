import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';

function Projects() {
  return (
    <>
      <nav className='h-[150px] z-10'>
        <NavBar />
      </nav>
      <main className='flex flex-col gap-16 max-w-[1200px] mx-10'>
        <section className='flex items-center'>
          <div className='flex flex-col gap-7'>
            <div className='flex flex-col gap-2'>
              <h1 className='acorn-bold title text-8xl'>My Projects </h1>
              <h1 className='acorn-bold text-6xl'>Works and personal</h1>
              <h1 className='acorn-bold text-6xl'>projects.</h1>
            </div>
            <p className='acorn-regular text-lg max-w-[600px]'>
              I always enjoy working on personal projects, and these are some of
              the ones I have done over time.
            </p>
          </div>
          <Image
            src='/Browser 1.png'
            width={500}
            height={500}
            alt='Browser image'
            className='translate-x-[100px]'
          />
        </section>
        <section className='flex flex-col items-center gap-10'>
          <h2 className='acorn-bold text-6xl max-w-[600px] text-center'>
            Finished
          </h2>
          <div className='flex justify-between w-full'>
            <Image
              className='image-shadow rounded-[40px]'
              src='/Frame 2.png'
              width={350}
              height={300}
              alt='Foto de un café'
            />
            <Image
              className='image-shadow rounded-[40px]'
              src='/Frame 1.png'
              width={700}
              height={700}
              alt='Foto de un café'
            />
          </div>
        </section>
        <section className='flex flex-col items-center gap-10'>
          <h2 className='acorn-bold text-6xl max-w-[600px] text-center'>
            In progress
          </h2>
          <div className='flex justify-between w-full'>
            <Image
              className='image-shadow rounded-[40px]'
              src='/Frame 1.png'
              width={700}
              height={700}
              alt='Foto de un café'
            />
            <Image
              className='image-shadow rounded-[40px]'
              src='/Frame 2.png'
              width={350}
              height={300}
              alt='Foto de un café'
            />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Projects;
