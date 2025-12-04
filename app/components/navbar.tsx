import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  const links = [
    {
      title: "Founders",
    },
    {
      title: "Guide",
    },
    {
      title: "Pricing",
    },
    {
      title: "Log In",
    },
  ];
  return (
    <div className='flex items-center justify-between py-4 px-4'>
      <Link href={"/"}>
      <Image src={"./logo.svg"} alt='logo' height={70} width={70} /> 
      </Link>

      <div className='flex gap-8 items-center'>
        {links.map((link,index)=>(
          <Link key={index} href={"/"} className='text-neutral-900 font-medium text-sm hover:text-neutral-600 transition duration-200'>{link.title}</Link>
        ))}
        <button className='bg-[#2579F4] px-2 py-1 rounded-lg text-white shadow-lg text-shadow-md tracking-wide font-medium text-sm'>Get started</button>
      </div>


    </div>
  )
}

export default Navbar
