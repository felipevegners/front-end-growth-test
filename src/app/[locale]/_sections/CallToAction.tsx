import * as React from "react";

interface ICallToActionProps {
  data: {
    preTitle: string | null;
    title: string;
    description: string;
    buttons: [
      {
        appearance: string;
        size: string;
        color: string;
        url: string;
        text: string;
        subtext: string | null;
        fluid: boolean;
        newTab: boolean;
        startIcon: string | null;
        endIcon: string | null;
      }
    ];
  };
}

const CallToAction: React.FunctionComponent<ICallToActionProps> = ({
  data
}) => {
  return (
    <section className="mt-20 px-6 bg-black md:bg-mai-dark-gray md:py-20">
      <div className="flex flex-col items-center md:max-w-[742px] md:mx-auto">
        {data?.preTitle && (
          <h3 className="mb-3 text-mai-medium-blue text-sm text-center">
            {data?.preTitle}
          </h3>
        )}
        <h2 className="mb-5 text-white text-4xl md:text-5xl text-center break-inside-auto">
          {data?.title}
        </h2>
        <p className="mb-10 text-mai-gray text-lg text-center">
          {data?.description}
        </p>
        {data?.buttons.map((button) => (
          <a
            key={button.text}
            href={button.url}
            target={button.newTab ? "_blank" : "_self"}
            className={`px-6 py-4 rounded-lg text-white cursor-pointer hover:bg-blue-800 ${
              button.appearance === "solid"
                ? "bg-mai-" + button.color
                : "bg-transparent"
            }`}
          >
            {button?.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default CallToAction;
