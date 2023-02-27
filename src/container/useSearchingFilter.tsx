import { useState, useEffect } from "react";
import { searchingFilterType } from "./homeContainerModel";

export const useSearchingFilter = (searchTerm: searchingFilterType) => {
  const [searchingData, setSearchingData] = useState(searchTerm);
  useEffect(() => {
    setSearchingTerms(searchTerm);
  }, []);

  const setSearchingTerms = (searchTerm: searchingFilterType) => {
    setSearchingData({ ...searchTerm });
  };

  return { searchingData, setSearchingTerms };
};
