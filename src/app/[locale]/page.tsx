"use client";
import { useMessages } from "next-intl";
import HeroVideo from "./_sections/HeroVideo";
import Brands from "./_sections/Brands";
import CardContentGrid from "./_sections/CardContentGrid";
import Modules from "./_sections/Modules";
import CallToAction from "./_sections/CallToAction";
import { useFilterSectionContent } from "@/Hooks";

export default function HomePage() {
  const contentData = useMessages();

  return (
    <>
      <HeroVideo
        data={useFilterSectionContent(contentData.pages, "sections.hero-video")}
      />
      <Brands
        data={useFilterSectionContent(contentData.pages, "sections.brands")}
      />
      <CardContentGrid
        data={useFilterSectionContent(
          contentData.pages,
          "sections.card-content-grid"
        )}
      />
      <Modules
        data={useFilterSectionContent(contentData.pages, "sections.modules")}
      />
      <CallToAction
        data={useFilterSectionContent(
          contentData.pages,
          "sections.centered-cta"
        )}
      />
    </>
  );
}
