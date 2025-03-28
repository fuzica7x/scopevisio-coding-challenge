export interface GasStation {
  objectId: number;
  address: {
    street: string;
    zipCode: string;
    city: string;
  };
}

export interface GasStationsContext {
  gasStations: GasStation[];
  isLoading: boolean;
  fetchData: () => void;
  order: 'asc' | 'desc' | undefined;
  setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc' | undefined>>;
  isSortingActive: boolean;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface GasStationFetchResultFeature {
  attributes: {
    adresse: string;
    objectid: number;
  };
}

export interface GasStationFetchResult {
  features: GasStationFetchResultFeature[];
}
