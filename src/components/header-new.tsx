"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "./ui/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigationItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Tours", link: "/allTours" },
  { name: "Contact", link: "/contact" },
];
export default function HeaderNew() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isContactPage = pathname === "/about";


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <Navbar className="z-100">
        <NavBody>
          <NavbarLogo isContactPage={isContactPage} />
          <NavItems 
            items={navigationItems} 
            onItemClick={closeMobileMenu}
            isContactPage={isContactPage}
            // className={`${isContactPage ? "text-black" : ""}`}
          />
          <div className="flex items-center gap-4">
            <NavbarButton as={Link} variant="primary" href="/contact">
              Contact Us
            </NavbarButton>
          </div>
        </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo isContactPage={isContactPage} />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        
        >
          <div className="flex flex-col gap-4 w-full">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={closeMobileMenu}
                className="text-lg font-medium text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <NavbarButton 
                variant="primary" 
                href="/contact"
                className="w-full justify-center"
                onClick={closeMobileMenu}
              >
                Contact Us
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
      </Navbar>

      {/* Mobile Navigation */}
    </>
  );
}