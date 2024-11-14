/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFilterSectionContent = (data: any, section: string) => {
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    async function filterContent() {
      const filteredContent = await data?.contentSections.filter(
        (content: Record<string, string | null>) =>
          content.__component === section
      );
      setSectionData(filteredContent);
    }
    filterContent();
  }, []);
  return sectionData[0];
};
