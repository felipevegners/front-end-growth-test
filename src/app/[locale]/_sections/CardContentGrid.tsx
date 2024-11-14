/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { Card } from "../_components/Card";

interface ICardContentGridProps {
  data: {
    preTitle: string;
    title: string;
    description: string;
    cards: [
      {
        title: string;
        description: string;
        icon: string;
      }
    ];
  };
}

const CardContentGrid: React.FunctionComponent<ICardContentGridProps> = ({
  data
}) => {
  return (
    <section className="px-6 pt-20 sm:px-20 bg-black">
      <div className="mx-auto max-w-[600px] flex flex-col gap-4 ">
        <h3 className="text-mai-medium-blue text-sm text-center">
          {data?.preTitle}
        </h3>
        <h2 className="text-white text-3xl font-bold text-center">
          {data?.title}
        </h2>
        <p className="text-mai-gray text-lg text-center">{data?.description}</p>
      </div>
      <div className="mx-auto mt-10 flex flex-col gap-12 md:grid md:grid-cols-3 lg:max-w-[1240px]">
        {data?.cards.map((card) => (
          <Card
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CardContentGrid;
