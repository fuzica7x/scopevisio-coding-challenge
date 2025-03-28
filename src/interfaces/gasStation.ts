export interface GasStation {
  objectId: number;
  address: {
    street: string;
    zipCode: string;
    city: string;
  };
}

export interface GasStationsContextInterface {
  gasStations: GasStation[];
  isLoading: boolean;
  fetchData: () => void;
  setFilteredGasStations: React.Dispatch<React.SetStateAction<GasStation[]>>;
  filteredGasStations: GasStation[];
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
