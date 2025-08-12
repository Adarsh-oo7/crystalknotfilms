import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white px-6 md:px-16 py-10">
      <div className="flex flex-col items-center gap-6">
        {/* Center Logo + Brand */}
        <div className="flex flex-col items-center gap-2 text-center">
          <Link href="/" className="invert">
            <Image src="./images/Ck logo.png" alt="Logo" width={180} height={180} />
          </Link>
          
          <p className="text-2xl font-light" style={{ fontFamily: 'Ginger, sans-serif' }}>
            Crystal Knot <span style={{ fontFamily: 'Essential Sans, sans-serif' }}>Films</span>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-white text-xl">
          <Link
            href="https://wa.me/918310881045"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href="https://www.instagram.com/crystalknotfilms/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61575820371345"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.youtube.com/@CrystalKnotFilms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaYoutube />
          </Link>
        </div>

        {/* Website URL */}
        <div className="text-center">
          <p className="text-sm text-gray-300" style={{ fontFamily: "Quicksand, sans-serif" }}>
            Crystal@knotfilms.com
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-[8px] text-gray-500" style={{ fontFamily: "Quicksand, sans-serif" }}>
            COPYRIGHT 2025 | 
            <Link
              href="https://www.digitalproductsolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline ml-1"
            >
              DIGITAL PRODUCT SOLUTIONS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}