import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

type Links = (
  | {
      id: number;
      name: string;
      border?: undefined;
    }
  | {
      id: number;
      name: string;
      border: string;
    }
)[];

const links: Links = [
  {
    id: 1,
    name: "nos service",
  },
  {
    id: 2,
    name: "nos destinations",
  },
  {
    id: 3,
    name: "nos offres",
  },
  {
    id: 4,
    name: "votre espace",
    border: "px-6 border rounded-full",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center container py-4">
      <Logo />
      <nav className="flex justify-between items-center gap-10">
        {links.map((l) => (
          <Link
            href="#"
            key={l.id}
            className={`font-clash_display text-sm px-2 py-1.5 ${l?.border}`}
          >
            {l.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
