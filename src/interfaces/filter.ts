export interface FilterContextInterface {
  order: 'asc' | 'desc' | 'none';
  setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc' | 'none'>>;
  isSortingActive: boolean;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  resetSearch: () => void;
}
