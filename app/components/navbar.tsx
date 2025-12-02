import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href={"/"}>
        <Image src="/logo.svg" width={50} height={50} alt="FIntalogo" />
      </Link>
    </div>
  );
};
