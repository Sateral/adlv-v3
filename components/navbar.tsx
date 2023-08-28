"use client";

import { usePathname } from "next/navigation";
import MainNav from "./main-nav";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div
      className={`fixed top-0 w-full bg-[#ebe5d9] border-b-2 border-[#83786f] z-10`}
    >
      <div className="px-4 sm:px-6 lg:px-8 flex items-center">
        <MainNav />
      </div>
    </div>
  );
};

export default Navbar;
