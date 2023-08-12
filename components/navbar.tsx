"use client";

import { usePathname } from "next/navigation";
import MainNav from "./main-nav";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div
      className={`${
        pathname === "/" ? "fixed" : "sticky"
      } top-0 w-full bg-[#e9e1d9] border-b-2 border-[#83786f] z-50`}
    >
      <div className="px-4 sm:px-6 lg:px-8 flex items-center">
        <MainNav />
      </div>
    </div>
  );
};

export default Navbar;
