"use client";
import * as React from "react";
import Image from "next/image";
import { SocialLogos } from "../_components/SocialLogos";
import { FooterMenu } from "../_components/FooterMenu";

interface IFooterProps {
  data: {
    availableLocales: [
      {
        id: number;
        language: string;
        locale: string;
      }
    ];
    helpText: string;
    copyright: string;
    social: Record<string, string>;
    footerMenu: [
      {
        id: number;
        title: string;
        link: string | null;
        openNewWindow: boolean;
        dropdown: [
          {
            id: number;
            title: string;
            link: string;
            openNewWindow: boolean;
          }
        ];
      }
    ];
  };
}

const Footer: React.FunctionComponent<IFooterProps> = ({ data }) => {
  return (
    <section className="mt-20 px-6 pb-20 bg-black ">
      <div className="md:mx-auto mb-20 flex flex-col gap-8 md:flex-row md:justify-between md:items-start md:max-w-[1240px] ">
        <div className="flex flex-col gap-8 md:justify-start">
          <div className="flex flex-col gap-3">
            <Image
              src="/assets/logo_developer.svg"
              alt=""
              width={157}
              height={32}
            />
            <h2 className="text-mai-gray">{data.helpText}</h2>
          </div>
          <div className="relative w-[210px]">
            <select
              className="relative appearance-none bg-mai-dark-gray px-4 py-2 text-mai-medium-gray rounded-md w-full h-11"
              name="locale"
            >
              {data?.availableLocales?.map((locale) => (
                <option key={locale.id} value={locale.locale}>
                  {locale.language}
                </option>
              ))}
            </select>
            <Image
              src="/assets/ic-chevron-down.svg"
              width={24}
              height={24}
              alt=""
              className="pointer-events-none select-none absolute top-2 right-2"
            />
          </div>
          <SocialLogos data={data.social} />
        </div>
        <div>
          <FooterMenu data={data.footerMenu} />
        </div>
      </div>
      <div className="md:mx-auto md:max-w-[1240px]">
        <div className="pt-10 pb-6 flex flex-col gap-4 flex-wrap w-full md:flex-row-reverse md:justify-between border-t border-mai-gray">
          <p className="text-white text-sm opacity-40 inline-flex gap-1 items-center">
            Status
            <span className="mx-1 inline-block bg-mai-turqouise w-2 h-2 rounded-full"></span>
            <span className="text-mai-turqouise  text-sm">
              All systems are normal
            </span>
          </p>
          <p className="text-white text-sm opacity-40">{data.copyright}</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
