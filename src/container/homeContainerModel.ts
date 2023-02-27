export type searchingFilterType = {
  q: string;
  page: number;
  per_page: number;
};
export const searchingFilterInitialValues: searchingFilterType = {
  q: "",
  page: 1,
  per_page: 50,
};
