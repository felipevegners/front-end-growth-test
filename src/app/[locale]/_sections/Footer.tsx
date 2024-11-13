"use client";
import * as React from "react";
import Image from "next/image";
import logo from "../../../../assets/logo_developer.svg";
import selectArrow from "../../../../assets/ic-chevron-down.svg";
import { Link } from "@/i18n/routing";
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
  console.log("Data Footer -> ", data.footerMenu);
  return (
    <section className="bg-black">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Image src={logo} alt="" height={32} />
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
            src={selectArrow}
            alt=""
            className="pointer-events-none select-none absolute top-2 right-2"
          />
        </div>
        <SocialLogos data={data.social} />
        <FooterMenu data={data.footerMenu} />
        <hr className="border-white opacity-25" />
        <div className="flex flex-col gap-4 flex-wrap w-full">
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
