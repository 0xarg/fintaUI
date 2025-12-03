import { Container } from "./components/container";
import { Navbar } from "./components/navbar";
import  Hero  from "./components/hero";
import Image from "next/image";

export default function () {
  return (
    <div className="flex flex-col items-center h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]">
      <div className="max-w-7xl mx-auto absolute insert-0 h-full w-full">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-300 to-transparent pointer-events-none z-0 "/>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-300 to-transparent pointer-events-none z-0 "/>
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full">
      <div className="absolute inset-x-0 left-0 h-px w-full bg-linear-to-r from-neutral-300/50 via-neutral-300 to-transparent pointer-events-none z-0 "/>
      <div className="max-w-7xl mx-auto p-4">
      <Image src="/banner.webp" alt="banner" height={1000} width={1000} className="rounded-xl w-full object-cover object-left-top border-neutral-200 shadow-md mask-b-from-0% to-40% " />
      </div>
      </div>
    </div>
  );
}
