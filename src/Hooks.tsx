import { useEffect, useState } from "react";

export function useFilterSectionContent(data, section) {
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    async function filterContent() {
      const filteredContent = await data?.contentSections.filter(
        (content) => content.__component === section
      );
      setSectionData(filteredContent);
    }
    filterContent();
  }, []);
  return sectionData[0];
}
