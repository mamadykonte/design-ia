import React from 'react'
import Link from "next/link";
import Logo from './Logo';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="container m-auto flex justify-between flex-wrap items-center py-8 absolute bottom-0 left-0 right-0">
      <Logo />
      <p> <Link href="https://github.com/mamadykonte" className="text-sm truncate underline underline-offset-2">Abonnez-vous à ma chaîne Youtube</Link> pour plus de vidéo sur le Design &#60;3</p>
      <Button>on rentre ?</Button>
    </footer>
  );
}

export default Footer
