import React from 'react';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import Footer from '@/components/Footer';

function Content() {
  return (
    <>
      <nav className='h-[150px]'>
        <NavBar />
      </nav>
      <main className='flex flex-col gap-16 max-w-[1200px] mx-10'>
        <section className='hidden md:flex items-center justify-between w-[100%]'>
          <div className='flex flex-col gap-7'>
            <div className='flex flex-col gap-2'>
              <h1 className='acorn-bold title text-8xl'>El Rincón Del Dev</h1>
              <h1 className='acorn-bold text-6xl'>Memes, resources,</h1>
              <h1 className='acorn-bold text-6xl'>and now my exeriencies.</h1>
            </div>
            <p className='acorn-regular text-lg max-w-[600px]'>
              I’ve always liked meeting new people with whom I can share
              knowledge, experiences, or just anecdotes. Social networks have
              allowed me to meet some truly incredible people in the industry.
            </p>
            <p className='acorn-regular text-lg max-w-[600px]'>
              My goal on social media is to create the largest Spanish-speaking
              technology community.
            </p>
          </div>
          <Image
            src='/iPhone-14.png'
            width={300}
            height={300}
            alt='Profile image'
          />
        </section>
        <section className='flex md:hidden items-center justify-between'>
          <div className='flex flex-col gap-10 items-center'>
            <div className='flex flex-col gap-2'>
              <h1 className='acorn-bold title text-4xl text-center'>El Rincón Del Dev</h1>
              <h1 className='acorn-bold text-3xl text-center'>Memes, resources, and now my exeriencies.</h1>
            </div>
            <p className='acorn-regular text-md max-w-[400px] text-center'>
              I’ve always liked meeting new people with whom I can share
              knowledge, experiences, or just anecdotes. Social networks have
              allowed me to meet some truly incredible people in the industry.
            </p>
            <p className='acorn-regular text-md max-w-[600px] text-center'>
              My goal on social media is to create the largest Spanish-speaking
              technology community.
            </p>
            <Image
            src='/iPhone-14.png'
            width={200}
            height={200}
            alt='Profile image'
          />
          </div>
        </section>
        <section className='md:flex hidden flex-col items-center gap-10 w-[100%]'>
          <h1 className='acorn-bold text-6xl max-w-[600px] text-center'>
            My current focus
          </h1>
          <h2 className='acorn-bold text-lg max-w-[800px] text-center'>
            Currently, I am focusing my content on narrating my experiences in
            this sector. From my beginnings studying on my own, to the
            challenges I have had to face in my job.
          </h2>
          <div className='flex bg-[#FFFFFF] bg-opacity-[10%] justify-center rounded-2xl p-10 gap-8 w-[100%]'>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-5'>
                <Image
                  src='/Miniatura 1.png'
                  height={500}
                  width={500}
                  alt='Miniatura'
                />
              </div>
              <div className='flex flex-col gap-5'>
                <Image
                  src='/Miniatura 2.png'
                  height={500}
                  width={500}
                  alt='Miniatura'
                />
              </div>
            </div>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-5'>
                <Image
                  src='/Miniatura 3.png'
                  height={500}
                  width={500}
                  alt='Miniatura'
                />
              </div>
              <div className='flex flex-col gap-5'>
                <Image
                  src='/Miniatura 4.png'
                  height={500}
                  width={500}
                  alt='Miniatura'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='flex md:hidden flex-col items-center gap-10 w-full'>
          <h1 className='acorn-bold text-5xl max-w-[600px] text-center'>
            My current focus
          </h1>
          <h2 className='acorn-bold text-lg max-w-[800px] text-center'>
            Currently, I am focusing my content on narrating my experiences in
            this sector. From my beginnings studying on my own, to the
            challenges I have had to face in my job.
          </h2>
          <div className='flex flex-col bg-[#FFFFFF] bg-opacity-[10%] rounded-2xl p-10 gap-8'>
              <div className='flex flex-col gap-5'>
                <Image
                  src='/Miniatura 1.png'
                  height={500}
                  width={500}
                  alt='Miniatura'
                />
              </div>
              <div className='flex flex-col gap-5'>
                <Image
                  src='/Miniatura 2.png'
                  height={500}
                  width={500}
                  alt='Miniatura'
                />
              </div>
              <div className='flex flex-col gap-5'>
                <Image
                  src='/Miniatura 3.png'
                  height={500}
                  width={500}
                  alt='Miniatura'
                />
              </div>
              <div className='flex flex-col gap-5'>
                <Image
                  src='/Miniatura 4.png'
                  height={500}
                  width={500}
                  alt='Miniatura'
                />
              </div>
            </div>
        </section>
        <section className='md:flex hidden flex-col items-center gap-10'>
          <div className='flex bg-[#FFFFFF] bg-opacity-[10%] rounded-2xl p-10 gap-8'>
            <div>
              <Image
                className='rounded-3xl'
                src='/Miniatura 5.png'
                height={500}
                width={500}
                alt='Miniatura'
              />
            </div>
            <div>
              <Image
                className='rounded-3xl'
                src='/Miniatura 6.png'
                height={500}
                width={500}
                alt='Miniatura'
              />
            </div>
            <div>
              <Image
                className='rounded-3xl'
                src='/Miniatura 7.png'
                height={500}
                width={500}
                alt='Miniatura'
              />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Content;
