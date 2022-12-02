import React from "react";
import { Offer } from "../types";
import CardOffer from "./card/Offer";
import starter from "../public/offer/starter.png";
import traveler from "../public/offer/traveler.png";
import explorer from "../public/offer/explorer.png";

const dataOffer: Offer[] = [
  {
    id: 1,
    title: ".starter",
    image: starter,
    alt: ".starter",
    advantage: ["30 min de voyage", "1 profil", "publicité"],
    price: "4€ / mois",
  },
  {
    id: 2,
    title: ".traveler",
    image: traveler,
    alt: ".traveler",
    advantage: ["1h de voyage", "3 profils", "pas de publicité"],
    price: "9€ / mois",
  },
  {
    id: 3,
    title: ".explorer",
    image: explorer,
    alt: ".explorer",
    advantage: [
      "voyage et profils illimités",
      "pas de publicité",
      "casque prenium",
    ],
    price: "19€ / mois",
  },
];

const Offer = () => {
  return (
    <section className="container bg-gradient-circle my-20">
      <h1 className="text-center font-clash_display font-medium text-[32px]">
        .nos offres
      </h1>
      <div className="w-full  flex flex-wrap justify-center gap-8 py-20">
        {dataOffer.map((p, index) => (
          <CardOffer key={index} offer={p} />
        ))}
      </div>
    </section>
  );
};

export default Offer;
