"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

const navLinks = [
  { name: "products", href: "/products" },
  { name: "users", href: "/users" },
  { name: "register", href: "/register" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={`w-full bg-white text-slate-950 flex`}>
      <ul className="w-full flex justify-around">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <li
              className={isActive ? "font-bold mx-3" : "mx-3"}
              key={link.name}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
