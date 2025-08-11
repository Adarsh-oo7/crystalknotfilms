import Image from "next/image";
import Link from "next/link";
import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaVimeoV,
} from "react-icons/fa";

const navLeft = [
  { name: "ABOUT", href: "/about" },
  { name: "SERVICE", href: "/Service" },
];

const navRight = [
  { name: "PORTFOLIO", href: "/Portfolio" },
  { name: "CONTACT", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white px-6 md:px-16 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Left Nav */}
        <div className="flex flex-col gap-2 text-sm text-left" style={{ fontFamily: 'Essential Sans, sans-serif' }}>
          {navLeft.map((item) => (
            <Link href={item.href} key={item.name} className="hover:underline">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Center Logo + Brand */}
        <div className="flex flex-col items-center gap-2 text-center">
          <Link href="/" className="invert">
            <Image src="./images/Ck logo.png" alt="Logo" width={100} height={100} />
          </Link>

          <p className="text-2xl font-light " style={{ fontFamily: 'Ginger, sans-serif' }}>Crystal Knot <span style={{ fontFamily: 'Essential Sans, sans-serif' }}>Films</span></p>
        </div>

        {/* Right Nav */}
        <div className="flex flex-col gap-2 text-sm text-right" style={{ fontFamily: 'Essential Sans, sans-serif' }}>
          {navRight.map((item) => (
            <Link href={item.href} key={item.name} className="hover:underline">
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4"
        style={{ fontFamily: "Quicksand, sans-serif" }}
      >
        <p className="text-left">COPYRIGHT 2025</p>
        <p className="text-center">
          <Link
            href="https://www.digitalproductsolutions.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            DIGITAL PRODUCT SOLUTIONS
          </Link>
        </p>        <div className="flex gap-4 text-white text-base">
          <Link
            href="https://www.youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.tiktok.com/@yourhandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </Link>
          <Link
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://vimeo.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaVimeoV />
          </Link>
        </div>
      </div>
    </footer>
  );
}
