import * as React from "react";
import Image from "next/image";

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
      helpText: string;
      uploadText: string;
      url: string;
      format: string;
    };
  };
}

const HeroVideo: React.FunctionComponent<IHeroVideoProps> = ({ data }) => {
  return (
    <section className="px-6 py-20 md:px-20 z-0">
      <div
        className="w-full h-full absolute left-0 top-0 -z-50 bg-right-top bg-[size:1020px] md:bg-[size:1440px] bg-no-repeat"
        style={{
          backgroundImage: `url('${data?.background.url}')`
        }}
      ></div>
      <div className="relative isolate">
        <div className="mx-auto max-w-[600px]">
          <div className="text-center">
            <h1 className="text-5xl font-semi-bold text-white sm:text-[52px]">
              {data?.title}
            </h1>
            <p className="my-10 text-pretty text-lg font-medium text-[#858585]">
              {data?.description}
            </p>
            <div>
              <p className="mb-3 text-[#858585] text-xs text-left">
                {data?.demo.helpText}
              </p>
              <MusicPlayer uploadText={data?.demo.uploadText} />
              {/* <audio
                className="appearance-none"
                controls
                src={data?.demo.url}
              /> */}
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {data?.buttons.map((button) => (
                <a
                  key={button.text}
                  href={button.url}
                  target={button.newTab ? "_blank" : "self"}
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
                      src="/assets/ic-arrow-right.svg"
                      width={24}
                      height={24}
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

function MusicPlayer({ uploadText }: any) {
  return (
    <div className="p-3 flex items-center justify-between border border-[color:#262626] rounded-md">
      <Image
        src="/assets/play.svg"
        width={52}
        height={52}
        alt="Play"
        className="cursor-pointer"
      />
      <div
        className="mx-3 text-white w-[169px] h-[52px] md:w-[387px] "
        style={{
          backgroundImage: "url('/assets/song-wave.svg')"
        }}
      ></div>
      <a
        href="#"
        className="px-3 border-l border-[color:#262626] w-[110px] block text-white text-sm cursor-pointer select-none"
      >
        {uploadText}
      </a>
    </div>
  );
}
