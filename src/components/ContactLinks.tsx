import Image from "next/image";
import Link from "next/link";

export default function ContactLinks() {
  return (
    <div className="hidden lg:flex bg-white h-5 items-center justify-around px-4">
      {/* Gmail */}
      <Link
        href="mailto:yourmail@gmail.com"
        target="_blank"
        className="flex items-center space-x-1 hover:underline"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
          alt="Gmail"
          width={16} // 1rem
          height={16} // 1rem
        />
        <span className="text-black text-sm">Gmail</span>
      </Link>

      {/* WhatsApp with Number */}
      <Link
        href="https://wa.me/918310881045"
        target="_blank"
        className="flex items-center space-x-1 hover:underline"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={16}
          height={16}
        />
        <span className="text-black text-sm">+91 83108 81045</span>
      </Link>

      {/* Instagram */}
      <Link
        href="https://www.instagram.com/crystalknotfilms/"
        target="_blank"
        className="flex items-center space-x-1 hover:underline"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          width={16}
          height={16}
        />
        <span className="text-black text-sm">Instagram</span>
      </Link>
    </div>
  );
}
