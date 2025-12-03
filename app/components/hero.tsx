import React from 'react'

 const Hero = () => {
  return (
    <div className="px-4 py-2 flex items-center flex-col w-full my-20">
      <button className="border px-2 py-1 text-[12px] -tracking-tighter font-semibold rounded-full border-gray-200 hover:bg-[rgba(30,31,37,0.08)] transition cursor-pointer duration-200 bg-[rgba(30,31,37,0.04)]">
        We're hiring Founding Ruby Engineers &rarr;
      </button>
      <div>
        <h1 className="font-medium mt-10 text-7xl max-w-2xl  text-black tracking-tighter text-center">
          Magically simplify accounting and taxes
        </h1>
        <p className="max-w-lg text-center mt-4 mx-auto text-lg text-neutral-600">
          Automated bookkeeping. Effortless tax filing. Financial clarity. Set
          up in 10 mins. Back to building by 10:55am.
        </p>
      </div>
      <div className="flex items-center gap-4 mt-10">
        <button className="bg-[#2579F4] cursor-pointer px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide">
          Get started
        </button>
        <button className="  cursor-pointer px-4 py-2 rounded-lg text-black  tracking-wide">
          Pricing &rarr;
        </button>
      </div>
      <div>
        <p className='text-neutral-400 text-[13px] mt-5'>For US based startups.</p>
      </div>
    </div>
  );
}
export default Hero;
