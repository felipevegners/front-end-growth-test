/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const globalResponse = await fetch(
    `http://localhost:4000/global?locale=${locale}`
  );
  const globalData = await globalResponse.json();

  const pagesResponse = await fetch(
    `http://localhost:4000/pages?locale=${locale}`
  );
  const pagesData = await pagesResponse.json();

  const newMessages = {
    global: {
      ...globalData
    },
    pages: {
      ...pagesData[0]
    }
  };
  return {
    locale,
    messages: newMessages
  };
});
