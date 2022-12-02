import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Logo = () => {
    return (
      <Link href="#" className="flex justify-between items-center">
      <Image
        src="/logo.svg"
        alt="logo de journey.meta"
        className="w-full h-full m-4"
        width={0}
        height={0}
      />
      <h2 className="font-clash_display text-sm">journey.meta</h2>
   </Link>
  );
}

export default Logo
