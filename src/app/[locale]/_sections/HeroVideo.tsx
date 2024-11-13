import * as React from "react";
import Image from "next/image";
import playIcon from "../../../../assets/play.svg";
import songWave from "../../../../assets/song-wave.svg";
import arrowRight from "../../../../assets/ic-arrow-right.svg";

interface IHeroVideoProps {
  data: {
    title: string;
    description: string;
    background: { url: string; width: number; height: number };
    buttons: [
      {
        appearance: string;
        size: string;
        color: string;
        url: string;
        text: string;
        subText: string;
        fluid: boolean;
        newTab: boolean;
        startIcon: string;
        endIcon: string;
      }
    ];
    demo: {
      title: string;
      url: string;
      format: string;
    };
  };
}

const HeroVideo: React.FunctionComponent<IHeroVideoProps> = ({ data }) => {
  return (
    <section className="z-0">
      <div className="absolute top-0 select-none pointer-events-none w-full h-full -z-10 bg-black">
        {data?.background.url && (
          <Image
            src={data?.background.url}
            alt=""
            priority
            width={data?.background.width}
            height={data?.background.height}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </div>
      <div className="relative isolate">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="text-5xl font-semi-bold text-white sm:text-7xl">
              {data?.title}
            </h1>
            <p className="my-10 text-pretty text-lg font-medium text-[#858585] sm:text-xl/8">
              {data?.description}
            </p>
            <div>
              <p className="mb-3 text-[#858585] text-xs text-left">Try now</p>
              <MusicPlayer />
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {data?.buttons.map((button) => (
                <a
                  key={button.text}
                  className={`
                    flex
                    px-6
                    py-3
                    text-white ${
                      button.appearance === "solid"
                        ? "bg-mai-blue"
                        : "bg-transparent"
                    } 
                    rounded-lg
                    cursor-pointer
                    `}
                >
                  {button?.text}
                  {button.endIcon === "arrow-right" ? (
                    <Image
                      src={arrowRight}
                      alt={button.text}
                      className="ml-2 w-6 h-6"
                    />
                  ) : (
                    ""
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;

function MusicPlayer() {
  return (
    <div className="p-3 flex items-center justify-between border border-[color:#262626] rounded-md">
      <Image src={playIcon} alt="Play" className="cursor-pointer" />
      <div className="mr-3">
        <Image src={songWave} alt="" className="mx-3 h-auto" />
      </div>
      <a
        href="#"
        className="px-3 border-l border-[color:#262626] w-[110px] block text-white text-sm cursor-pointer select-none"
      >
        Upload your own track
      </a>
      {/* <audio controls src={data?.demo.url} /> */}
    </div>
  );
}
