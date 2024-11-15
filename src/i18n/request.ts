/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const API_URL = process.env.API_URL;

  const pagesResponse = await fetch(`${API_URL}/pages?locale=${locale}`);
  const pagesData = await pagesResponse.json();

  const newGlobalResponse = await fetch(
    `${API_URL}/global?locale=${locale}`
  ).then((res) => res.json());

  const newMessages = {
    global: {
      ...newGlobalResponse[0]
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
