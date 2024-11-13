import { useTranslations } from "next-intl";
import * as React from "react";
import logo from "../../../../assets/logo_developer.svg";
import arrowRight from "../../../../assets/ic-arrow-right.svg";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";

interface INavBarProps {
  data: [
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
}

const NavBar: React.FunctionComponent<INavBarProps> = ({ data }) => {
  const t = useTranslations("global");
  return (
    <Disclosure as="nav" className="px-5 data-[open]:bg-black z-50">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex h-20 md:h-24 items-center justify-between">
          <div className="flex flex-0 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="flex shrink-0 items-center">
              <Image src={logo} alt={t("siteName")} height={21} />
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block md:w-full md:flex">
            <div className="flex m-auto space-x-20 items-center">
              {data.slice(0, data.length - 1).map((item) => (
                <div key={item.id} className="group relative">
                  <a
                    href={item.link as string}
                    target={item.openNewWindow ? "_blank" : "_self"}
                    className="text-gray-500 hover:text-white cursor-pointer flex items-center"
                  >
                    {item.title}
                    {item.dropdown.length > 0 && (
                      <ChevronDownIcon className="ml-4 w-4 h-4 text-gray-500 group-hover:text-white" />
                    )}
                  </a>
                  {item.dropdown.length > 0 && (
                    <div className="absolute invisible group-hover:visible flex flex-col p-4 w-60 bg-black z-50">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.id}
                          href={sub.link as string}
                          target={sub.openNewWindow ? "_blank" : "_self"}
                          className="my-4 text-gray-500 hover:text-white flex"
                        >
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="ml-auto flex items-center">
              <a href="/Login" target="_blank" className="text-white">
                Login
              </a>
              <Image src={arrowRight} alt="Login" className="ml-2 w-6 h-6" />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center text-white hover:text-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-8 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-8 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden absolute px-5 left-0 w-screen h-[calc(100vh-80px)] bg-black">
        <div className="pb-10 flex flex-col h-full">
          {data.map((item) => (
            <div key={item.id} className="my-5 last-of-type:mt-auto">
              <a
                href={item.link as string}
                target={item.openNewWindow ? "_blank" : "_self"}
                className={`${
                  item.title === "Login" ? "text-white" : "text-gray-500"
                }  hover:text-white flex items-center`}
              >
                {item.title}
                {item.title === "Login" ? (
                  <Image
                    src={arrowRight}
                    alt={item.title}
                    className="ml-2 w-6 h-6"
                  />
                ) : (
                  ""
                )}
              </a>
            </div>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;
