import React from 'react'

const Hero = () => {
  return (
    <div className="px-4 py-2 flex items-center flex-col w-full my-20">
      <button className=" bg-[rgba(30,31,37,0.04)] hover:bg-[rgba(30,31,37,0.08)] cursor-pointer transition duration-200 px-3 tracking-tight border-gray-300/80 border py-1 rounded-full text-sm font-medium">
        We're hiring Ruby Engineers &rarr;
      </button>
      <div>
        <h1 className="mt-10 text-5xl font-semibold text-neutral-800 max-w-xl text-center tracking-wide">
          Magically simplify accounting and taxes
        </h1>
        <p className="max-w-lg tracking-wider text-center mt-4 mx-auto text-neutral-600">
          Automated bookkeeping. Effortless tax filing. Financial clarity. Set
          up in 10 mins. Back to building by 11:30am.
        </p>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <button className="bg-[#2579F4] px-3 py-2 rounded-lg text-white shadow-lg text-shadow-md tracking-wide font-medium text-sm">
          Get started
        </button>
        <button className=" cursor-pointer px-3 py-2  text-neutral-800 hover:bg-[#D3E1EF] rounded-lg transition duration-200   tracking-wide font-semibold text-[13px]">
          Pricing &rarr;
        </button>
      </div>
      <div>
        <p className='mt-5 text-[12px] text-neutral-400 '>For US based startups.</p>
      </div>
    </div>
  );
}

export default Hero
