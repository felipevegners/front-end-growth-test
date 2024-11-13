/* eslint-disable @next/next/no-img-element */
import * as React from "react";

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
    <section className="bg-black">
      <div>
        <h3 className="mb-3 text-mai-medium-blue text-sm text-center">
          {data?.preTitle}
        </h3>
        <h2 className="mb-3 text-white text-3xl font-bold text-center">
          {data?.title}
        </h2>
        <p className="text-mai-gray text-lg text-center">{data?.description}</p>
      </div>
      {data?.cards.map((card) => (
        <Card
          key={card.title}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default CardContentGrid;

interface ICardProps {
  icon: string;
  title: string;
  description: string;
}

function Card({ icon, title, description }: ICardProps) {
  return (
    <div className="my-8 border border-mai-gray">
      <p className="mb-4 text-mai-medium-blue text-xs">{icon}</p>
      <h2 className="mb-3 text-white font-bold">{title}</h2>
      <p className="text-sm text-mai-gray">{description}</p>
    </div>
  );
}
