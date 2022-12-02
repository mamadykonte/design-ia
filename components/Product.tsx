import React from "react";
import { Product } from "../types";
import CardProduct from "./card/Product";
import rocket from "../public/product/rocket.png";
import helmet from "../public/product/helmet.png";
import seat from "../public/product/seat.png";

const dataProduct: Product[] = [
  {
    id: 1,
    title: "Réduisez les \n emissions de CO2",
    image: rocket,
    alt: "rocket",
  },
  {
    id: 2,
    title: "Plongez vous dans \n un monde immersif",
    image: helmet,
    alt: "helmet",
  },
  {
    id: 3,
    title: "Voyagez sans bouger \n de chez vous",
    image: seat,
    alt: "seat",
  },
];

const Product = () => {
  return (
    <section className="container mt-40 relative">
      <div className="w-full">
        <div className="lg:w-2/5">
          <h2 className="font-clash_display font-medium text-[32px] mb-6">
            .une méthode de voyage respectueuse
          </h2>
          <p className="font-epilogue  font-light text-sm">
            Pour éviter les émissions de CO2, les vols sont à éviter. Mais pas
            les voyages ! Grâce à la réalité virtuelle, il est possible de
            découvrir des paysages de toute la planète sans bouger de chez soi.
            Il suffit de disposer d’un casque de réalité virtuelle et d’une
            manette de jeu. Une fois équipés de cet ensemble, l’utilisateur peut
            naviguer dans l’espace virtuel autour de lui comme s’il se trouvait
            en plein cœur de la jungle amazonienne, dans les ruelles de Rio de
            Janeiro ou sur les bords de la mer Morte.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-around items-center mt-20">
        {dataProduct.map((p) => (
          <CardProduct
            key={p.id?.toString()}
            title={p.title}
            image={p.image}
            alt={p.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
