import Image from "next/image";
import React from "react";
import BtnConversation from "./BtnConversation";
import { ButtonConversation } from "../types";
import manhelmet from "../public/man-with-helmet.png";

const dataConversation: ButtonConversation[] = [
  {
    id: 1,
    title: "Bonjour",
    position: "justify-start",
    background: true,
  },
  {
    id: 2,
    title: "Bonjour Clara",
    position: "justify-end",
    background: false,
  },
  {
    id: 3,
    title: "Où voulez-vous aller aujourd'hui ?",
    position: "justify-start",
    background: true,
  },
  {
    id: 4,
    title: "Je ne sais pas, qu'est-ce que vous suggérez ?",
    position: "justify-end",
    background: false,
  },
  {
    id: 5,
    title: "Nous pourrions aller à la plage ?",
    position: "justify-start",
    background: true,
  },
  {
    id: 6,
    title: "D'accord, allons-y !",
    position: "justify-end",
    background: false,
  },
  {
    id: 7,
    title: "Nous pourrions aller à la plage ?",
    position: "justify-start",
    background: true,
  },
];

const About = () => {
  return (
    <section className="container mt-40 relative flex flex-col lg:flex-row justify-between overflow-hidden">
      <div className="lg:w-2/5 m-auto">
        <h2 className="font-clash_display font-medium text-[32px] mb-6">
          .une simple phrase et vous décollez
        </h2>
        <p className="font-epilogue  font-light text-sm">
          Demandez à notre intelligence artificielle où vous souhaitez voyager
          et nous nous chargerons de vous guider vers la destination qui vous
          convient. Grâce à sa commande vocale, il est facile de s&apos;adapter
          à votre style de vie et de répondre à vos envies du moment.
          N&apos;attendez plus et dites-lui où vous souhaitez aller !
        </p>

        <div className="flex flex-col flex-grow-0 flex-shrink-0 flex-wrap gap-2 mt-10">
          {dataConversation.map((c) => (
            <BtnConversation
              key={c.id?.toString()}
              title={c.title}
              position={c.position}
              background={c.background}
            />
          ))}
        </div>
      </div>
      <div className="hidden sm:block z-50 absolute translate-y-0 rotate-90 lg:rotate-0 left-1/2 top-0 lg:left-1/2 lg:top-0 bg-[url('/deco.png')] bg-auto w-9 h-full"></div>
      <div className="lg:w-2/5 mt-16 m-auto pt-10">
        <Image
          src={manhelmet}
          alt="homme avec casque"
          className="object-cover z-50"
        />
      </div>
    </section>
  );
};

export default About;
