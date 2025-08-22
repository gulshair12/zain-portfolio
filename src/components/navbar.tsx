import React, { useState, useEffect } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";


interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        variant="paragraph"
        className="font-medium text-gray-900 hover:text-black transition-colors duration-300"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className={`border-0 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3">
        <Typography
          color="blue-gray"
          className="text-xl font-bold tracking-tight"
        >
          Zain<span className="text-gray-600">.</span>
        </Typography>
        {/* <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, href }) => (
            <NavItem key={name} href={href}>
              {name}
            </NavItem>
          ))}
        </ul> */}
        {/* <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton> */}
      </div>
      {/* <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse> */}
    </MTNavbar>
  );
}

export default Navbar;
