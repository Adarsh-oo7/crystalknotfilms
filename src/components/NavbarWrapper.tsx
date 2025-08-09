'use client';

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "HOW IT WORKS", link: "/HowItWorks" },
  { name: "PORTFOLIO", link: "/Portfolio" },
  { name: "SERVICES", link: "/Services" },
  { name: "ABOUT", link: "/About" },
  { name: "PRICING", link: "/Pricing" },

  // { name: "CONTACT", link: "#contact" },
];

export default function NavbarWrapper() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton href="/Contact">Get in Touch</NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileOpen}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-black dark:text-white"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <NavbarButton href="/Contact/">Get in Touch</NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
