export type sortIndexType = {
  name: string;
  sortBy: 'rating' | 'price' | 'title';
};

export type filterSliceState = {
  pageNumber: number;
  categoriesIndex: number;
  sortIndex: sortIndexType;
  direction: boolean;
  findStr: string;
};
