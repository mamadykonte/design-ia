import React from 'react'

const Mask = () => {
  return (
    <>
      <div className="relative h-[1202px] w-full bg-gradient-mask bg-no-repeat bg-cover mix-blend-overlay bg-center">
      <div className="absolute bottom-1/4 left-1/2 w-9 h-96 translate-y-0  bg-[url('/deco.png')] bg-auto bg-no-repeat"></div>
      </div>
    </>
  );
}

export default Mask
