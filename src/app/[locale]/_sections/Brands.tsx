/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import * as React from "react";

interface IBrandsProps {
  data: {
    brands: [
      {
        alternativeText: string | null;
        title: string;
        url: string;
      }
    ];
  };
}

const Brands: React.FunctionComponent<IBrandsProps> = ({ data }) => {
  return (
    <section className="py-6 bg-black">
      <div className="relative w-full overflow-hidden">
        <div className="absolute z-10 top-0 left-0 w-40 h-20 bg-gradient-to-r from-black from-15% to-transparent"></div>
        <div className="absolute z-10 top-0 right-0 w-40 h-20 bg-gradient-to-l from-black from-15% to-transparent"></div>
        <div className="w-[3000px] z-0 -translate-x-60 flex">
          {data?.brands.map((brand) => (
            <div key={brand.title} className="mx-4">
              <Image
                src={brand.url}
                alt={brand.title}
                className="h-full"
                loading="lazy"
                width={140}
                height={68}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
