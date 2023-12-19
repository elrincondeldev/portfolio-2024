import React from 'react';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import Footer from '@/components/Footer';

function About() {
  return (
    <>
      <nav className='h-[150px]'>
        <NavBar />
      </nav>
      <main className='flex flex-col gap-16 max-w-[1200px] mx-10'>
        <section className='flex items-center'>
          <div className='flex flex-col gap-7'>
            <div className='flex flex-col gap-2'>
              <h1 className='acorn-bold title text-8xl'>Hey! I’m Jose</h1>
              <h1 className='acorn-bold text-6xl'>Software developer</h1>
              <h1 className='acorn-bold text-6xl'>& Content creator</h1>
            </div>
            <p className='acorn-regular text-lg max-w-[600px]'>
              I’m passionate about crafting experiences that are engaging,
              accesible, and user-centric.
            </p>
            <p className='acorn-regular text-lg max-w-[600px]'>
              I’m currently working as a FullStack Developer.
            </p>
          </div>
          <Image
            src='/profile-image.png'
            width={500}
            height={500}
            alt='Profile image'
          />
        </section>
        <section className='flex flex-col items-center gap-10'>
          <h2 className='acorn-bold text-2xl max-w-[600px] text-center'>
            If I had to define my life in some way, I would definitely do it as
            follows.
          </h2>
          <div className='flex bg-[#FFFFFF] bg-opacity-[10%] rounded-2xl p-16 gap-32'>
            <div className='flex flex-col gap-16'>
              <div className='flex flex-col gap-5'>
                <h1 className='acorn-bold text-4xl'>Programming</h1>
                <p className='montserrat font-bold'>
                  I currently work as a web developer, and in addition to my
                  job, I always enjoy working on a personal projects, so this
                  aspect takes up a significant part of my day.
                </p>
              </div>
              <div className='flex flex-col gap-5'>
                <h1 className='acorn-bold text-4xl'>Coffee</h1>
                <p className='montserrat font-bold'>
                  In my day, coffee is a must, whether I’m working or reading, I
                  love being accompanied by my cup of coffee.
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-16'>
              <div className='flex flex-col gap-5'>
                <h1 className='acorn-bold text-4xl'>Content creation</h1>
                <p className='montserrat font-bold'>
                  I’ve been creating content on social media for a year, and
                  it’s something I’m passionate about. The programming community
                  is a highly altruistic one, which is why I love being able to
                  contribute my bit.
                </p>
              </div>
              <div className='flex flex-col gap-5'>
                <h1 className='acorn-bold text-4xl'>Read</h1>
                <p className='montserrat font-bold'>
                  In my free time, I always like to be reading a book. For me,
                  it’s a moment to forget about the world and immerse myself in
                  an incredible story.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='flex flex-col items-center gap-16'>
          <p className='montserrat font-bold max-w-[600px] text-center '>
            I believe that programming is more than just a tool to create
            software. I think programming allows us to craft solutions to many
            problems, and that’s why I love working on projects that solve
            something, that make life easier for people, that make the world a
            better place.
          </p>
          <div className='flex justify-between w-full'>
            <Image
              className='image-shadow rounded-[40px]'
              src='/miniatura-cafe.png'
              width={350}
              height={350}
              alt='Foto de un café'
            />
            <Image
              className='image-shadow rounded-[40px]'
              src='/miniatura-teclado.png'
              width={700}
              height={700}
              alt='Foto de un café'
            />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default About;
