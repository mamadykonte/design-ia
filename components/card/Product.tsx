import Image from "next/image";
import React from "react";
import { Product } from "../../types";

const Product = ({ title, image, alt }: Product) => {
  return (
    <div className="mb-10 lg:mb-0">
      <div>
        <Image src={image} alt={`${alt}`} className="m-auto object-cover" />
      </div>
      <h3 className="whitespace-pre">{title}</h3>
    </div>
  );
};

export default Product;
