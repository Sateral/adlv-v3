"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const MainNav = () => {
  const [toggle, setToggle] = useState(false);

  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/about-us",
      label: "About Us",
      active: pathname === "/about-us",
    },
    {
      href: "/queens",
      label: "Queens",
      active: pathname === "/queens",
    },
    {
      href: "/kings",
      label: "Kings",
      active: pathname === "kings",
    },
    {
      href: "/kittens",
      label: "Kittens",
      active: pathname === "/kittens",
    },
    {
      href: "/cats",
      label: "Adult Cats for Sale",
      active: pathname === "/cats",
    },
    {
      href: "/important-info",
      label: "Important Info",
      active: pathname === "/important-info",
    },
    {
      href: "/contact-us",
      label: "Contact Us",
      active: pathname === "/contact-us",
    },
  ];

  return (
    <nav
      className={`w-full overflow-hidden transition-all lg:max-h-16 text-secondary-tan ${
        toggle ? "h-[340px]" : "h-16"
      }`}
    >
      <div className="flex flex-row items-center justify-between w-full transition-all ease-in-out h-16">
        <Link href="/" onClick={() => setToggle(false)}>
          <span className="font-dancing xl:text-4xl text-3xl text-whitesmoke font-semibold text-primary-tan">
            Aurore de la Vie
          </span>
        </Link>
        <div className="lg:flex items-center space-x-4 md:space-x-4 lg:space-x-8 hidden">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "xl:text-lg mm:text-base text-sm font-rem capitalize font-light transition-colors before:transition-all hover:text-[#313131] before:content-[''] before:block before:h-1 before:bg-[#83786f] before:relative before:w-0 hover:before:w-full",
                route.active
                  ? "text-[#493e30] font-normal"
                  : "text-secondary-tan"
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>
        <div
          className="lg:hidden flex cursor-pointer h-max"
          onClick={() => setToggle(!toggle)}
        >
          {!toggle ? <Menu /> : <X />}
        </div>
      </div>

      <div className="lg:hidden">
        <div className="flex flex-col space-y-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setToggle(!toggle)}
              className={cn(
                "text-md font-medium transition-colors hover:text-black",
                route.active ? "text-black" : "text-neutral-500"
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
