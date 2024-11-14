/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import arrowUp from "../../../../assets/ic-arrow-up.svg";
import Image from "next/image";

interface IModulesProps {
  data: {
    preTitle: string | null;
    title: string;
    description: string;
    cards: [
      {
        title: string;
        description: string;
        button: {
          url: string;
          text: string;
        };
      }
    ];
  };
}

const Modules: React.FunctionComponent<IModulesProps> = ({ data }) => {
  // Get Modules Cards container size
  const cardsContainerSize = data?.cards.length * 380;

  return (
    <>
      <section className="mx-auto pt-20 bg-black lg:max-w-[1240px]">
        <div className="flex">
          <div className="mb-10">
            {data?.preTitle && (
              <h3 className="mb-3 text-mai-medium-blue text-sm text-center">
                {data?.preTitle}
              </h3>
            )}
            <h2 className="mb-3 text-white text-[32px]">{data?.title}</h2>
            <p className="text-lg text-white">{data?.description}</p>
          </div>
          <div className="hidden md:block">
            <div className="flex">
              <div className="bg-white text-black rounded-full p-3 w-6 h-6 flex items-center">
                {"<"}
              </div>
              <div className="bg-white text-black rounded-full p-3 w-6 h-6 flex items-center">
                {">"}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:overflow-hidden lg:max-w-[1140px]">
          <div className="flex gap-6" style={{ width: cardsContainerSize }}>
            {data?.cards.map((card) => (
              <ModulesCards
                key={card.title}
                title={card.title}
                description={card.description}
                button={card.button}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="block md:hidden pl-6 pb-10 overflow-y-hidden">
        <div className="flex gap-3" style={{ width: cardsContainerSize }}>
          {data?.cards.map((card) => (
            <ModulesCards
              key={card.title}
              title={card.title}
              description={card.description}
              button={card.button}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Modules;

interface IModulesCards {
  title: string;
  description: string;
  button: {
    url: string;
    text: string;
  };
}

function ModulesCards({ title, description, button }: IModulesCards) {
  return (
    <div className="p-5 w-[360px] sm:w-[397px] bg-mai-dark-gray rounded-xl">
      <h3 className="mb-3 text-white text-[20px]">{title}</h3>
      <p className="mb-10 text-mai-medium-gray">{description}</p>
      <div className="flex cursor-pointer">
        <a href={button.url} className="text-mai-medium-blue">
          {button.text}
        </a>
        <Image
          src="/assets/ic-arrow-up.svg"
          alt=""
          width={24}
          height={24}
          className="ml-5"
        />
      </div>
    </div>
  );
}
