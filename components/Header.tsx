import React from 'react'
import Navbar from './Navbar';

type Props = {}

const Header = () => {
  return (
    <header className="z-50 fixed w-full left-0 right-0 top-0 backdrop-blur-xl bg-white/10">
      <Navbar />
    </header>
  );
}

export default Header
