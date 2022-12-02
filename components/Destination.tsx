import React from "react";
import Button from "./Button";

const Destination = () => {
  return (
    <section className="mt-40 relative h-screen w-screen bg-[url('/destination/property-1.png')] bg-no-repeat bg-cover">
      <div className="container w-full">
        <div className="lg:w-2/5">
          <h2 className="font-clash_display font-medium text-[32px] mb-4">
            .choisissez votre destination
          </h2>
          <p className="font-epilogue font-light text-sm mb-4">
            Choisissez votre destination et laissez-vous inspirer. Paris, la
            ville de l’amour, n’est-ce pas un pays parfait pour votre lune de
            miel ? Rien n’est plus romantique que de flâner dans les rues de la
            ville lumière, déguster une crêpe au chocolat et profiter de la vue
            magnifique depuis la tour Eiffel.
          </p>
          <Button>découvrir les destinations </Button>
        </div>
      </div>
    </section>
  );
};

export default Destination;
