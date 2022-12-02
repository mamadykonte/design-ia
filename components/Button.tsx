import Link from "next/link";
import React from "react";

interface ButtonProps {
  url?: string;
  bg?: boolean;
  hover?: boolean;
  children: React.ReactNode;
}

const Button = ({
  url = "#",
  bg = false,
  hover = true,
  children,
}: ButtonProps) => {
  return (
    <Link
      href={url}
      className={`px-6 py-1.5 border bottom-2 rounded-full font-clash_display text-sm ${
        bg ? "bg-white text-black" : ""
      } ${hover ? "hover:bg-white hover:text-black" : ""}`}
    >
      {children}
    </Link>
  );
};

export default Button;
