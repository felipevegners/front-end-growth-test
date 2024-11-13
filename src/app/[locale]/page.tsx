"use client";
import { useMessages, useTranslations } from "next-intl";
import HeroVideo from "./_sections/HeroVideo";
import Brands from "./_sections/Brands";
import CardContentGrid from "./_sections/CardContentGrid";
import Modules from "./_sections/Modules";
import CallToAction from "./_sections/CallToAction";
import { useFilterSectionContent } from "@/Hooks";
// import { Link } from "@/i18n/routing";

export default function HomePage() {
  const contentData = useMessages();

  return (
    <>
      <HeroVideo
        data={useFilterSectionContent(
          contentData.pages.contentSections,
          "sections.hero-video"
        )}
      />
      <Brands />
      <CardContentGrid />
      <Modules />
      <CallToAction />
    </>
  );
}
