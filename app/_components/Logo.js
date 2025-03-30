import Image from "next/image.js";
import Link from "next/link.js";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <Image src={logo} height="60" width="60" quality={100} alt="Spiritual Heaven logo" />
      <span className="text-xl font-semibold text-primary-100">Spiritual Heaven</span>
    </Link>
  );
}

export default Logo;
