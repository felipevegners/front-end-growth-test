import { useTranslations } from "next-intl";
import * as React from "react";
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
    <header className="z-[100] w-full">
      <Disclosure as="nav" className="px-5 data-[open]:bg-black bg-transparent">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex h-20 md:h-24 items-center justify-between">
            <div className="flex flex-0 items-center justify-center sm:items-stretch sm:justify-center">
              <div className="flex shrink-0 items-center">
                <Image
                  src="/assets/logo_developer.svg"
                  alt={t("siteName")}
                  width={104}
                  height={21}
                />
              </div>
            </div>
            <div className="hidden sm:ml-6 md:w-full md:flex">
              <ul className="flex m-auto space-x-20 items-center overflow-hidden">
                {data.slice(0, data.length - 1).map((item) => (
                  <li key={item.id} className="py-5 group">
                    <a
                      href={item.link as string}
                      target={item.openNewWindow ? "_blank" : "_self"}
                      className="text-gray-500 hover:text-white cursor-pointer flex items-center justify-between"
                    >
                      {item.title}
                      {item.dropdown.length > 0 && (
                        <ChevronDownIcon className="ml-4 w-4 h-4 text-gray-500 group-hover:text-white" />
                      )}
                    </a>
                    {item.dropdown.length > 0 && (
                      <div className="p-8 top-20 left-[-16px] absolute invisible group-hover:visible group-hover:translate-y-10 duration-200 grid grid-cols-4 gap-8 md:w-[1250px] bg-mai-dark-gray rounded-lg z-50 transition-all">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.id}
                            href={sub.link as string}
                            target={sub.openNewWindow ? "_blank" : "_self"}
                            className="my-4 text-white text-lg flex"
                          >
                            <div className="flex gap-4 p-4 hover:bg-[#313131] w-[280px] rounded-md transition-all duration-200">
                              <div className="bg-white w-12 h-12 rounded-md"></div>
                              <div>
                                <h3 className="text-lg text-white">
                                  {sub.title}
                                </h3>
                                <p className="text-mai-medium-gray text-sm">
                                  Lorem ipsum sit dolot emet.
                                </p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="ml-auto flex items-center">
                <a href="/Login" target="_blank" className="text-white">
                  Login
                </a>
                <Image
                  src="/assets/ic-arrow-right.svg"
                  alt="Login"
                  width={24}
                  height={24}
                  className="ml-2 w-6 h-6"
                />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
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
        <DisclosurePanel className="sm:hidden absolute px-5 left-0 w-screen h-[calc(100vh-80px)] bg-black z-[100]">
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
                      src="/assets/ic-arrow-right.svg"
                      width={24}
                      height={24}
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
    </header>
  );
};

export default NavBar;
