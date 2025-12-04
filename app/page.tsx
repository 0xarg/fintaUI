import React from 'react'
import Container from './components/container'
import Navbar from './components/navbar'
import Hero from './components/hero';
import Image from 'next/image';

const page = () => {
  return (
    <div className="flex flex-col items-center relative h-screen [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]">
      <div className="max-w-5xl mx-auto absolute inset-0 h-full w-full">
        <div className='inset-y-0 absolute left-0 h-full  w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0 "' />
        <div className='inset-y-0 absolute right-0 h-full  w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0 "' />
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className=" w-full relative">
        <div className='inset-x-0 absolute left-0 w-full  h-px bg-linear-to-b from-neutral-300/50 via-neutral-300/50 to-transparent pointer-events-none z-0' />
        <div className='mx-auto max-w-5xl p-4'>
          <Image src={'/banner.webp'} alt='banner' width={1000} height={1000} className='rounded-xl w-full object-cover object-top-left border-neutral-200 border shadow-md mask-b-from-50% to-40%'></Image>
        </div>
      </div>
    </div>
  );
}

export default page
