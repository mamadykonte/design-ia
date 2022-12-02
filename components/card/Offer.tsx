import Image from "next/image";
import React from "react";
import { Offer } from "../../types";
import Button from "../Button";

export interface Props {
  offer: Offer;
}

const Offer: React.FunctionComponent<Props> = ({ offer }) => {
  const { title, image, alt, advantage, price } = offer;
  return (
    <div className="hover:rounded-lg p-2 group hover:bg-black/10 mb-6 lg:mb-0">
      <div className="group-hover:h-[50%]">
        <Image
          src={image}
          alt={`${alt}`}
          className="h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-full relative">
        <h3 className="whitespace-pre text-2xl ml-4 mt-4">{title}</h3>
        <div className="ml-4 hidden group-hover:block absolute h-full">
          <ul className="flex flex-col my-4 ml-4">
            {advantage.map((ad, index) => (
              <li key={index} className="font-epilogue text-sm list-disc ml-2">
                {ad}
              </li>
            ))}
          </ul>
          <h4 className="font-clash_display font-medium text-base mb-4">
            {price}
          </h4>
          <Button> c`est parti </Button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
