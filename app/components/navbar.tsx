import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {

    const links = [
        {
            title:"Founders"
        },
        {
            title:"Guide"
        },
        {
            title:"Pricing"
        },
        {
            title:"Log In"
        },
    ]

  return (
    <div className="flex justify-between items-center py-4 px-4">
      <Link href={"/"}>
        <Image
          draggable={false}
          loading="lazy"
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <div className=" flex items-center gap-8">
        {links.map((link, index) => (
          <Link
            href={"/"}
            key={index}
            className="text-neutral-800 font-medium hover:text-neutral-500 transition duration-200"
          >
            {link.title}
          </Link>
        ))}
      <button className="bg-[#2579F4] px-4 py-2 rounded-lg tracking-wide text-white text-shadow-md shadow-lg font-medium">Get Started</button>
      </div>
    </div>
  );
};
