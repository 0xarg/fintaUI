import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
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
    </div>
  );
};
