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
  { name: "About Budha", link: "/about" },
  { name: "Journeys", link: "/allTours" },
  { name: "Collections", link: "/tours" },
  { name: "Blogs", link: "/blogs" },
  { name: "Contact", link: "/contact" },
  { name: "Heritage Map", link: "/heritage-map" },
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
          {/* <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <NavbarButton as={Link} variant="primary" href="/heritage-map">
               Heritage Map
            </NavbarButton>
          </div> */}
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo isContactPage={isContactPage} />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu}>
            <div className="flex flex-col gap-4 w-full">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  onClick={closeMobileMenu}
                  className="text-lg font-medium text-neutral-600 hover:text-neutral-800 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              {/* <div className="flex flex-col gap-3 pt-4 border-t border-[#cf4f21]">
                <NavbarButton
                  variant="primary"
                  href="/heritage-map"
                  className="w-full justify-center"
                  onClick={closeMobileMenu}
                >
                  Heritage Map
                </NavbarButton>
              </div> */}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Mobile Navigation */}
    </>
  );
}
