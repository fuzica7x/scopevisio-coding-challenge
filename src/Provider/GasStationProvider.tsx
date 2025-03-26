import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { formatGasStationResults } from '../utils/formatGasStationResults';
export interface GasStation {
  objectId: number;
  address: {
    street: string;
    zipCode: string;
    city: string;
  };
}

interface GasStationsContextType {
  gasStations: GasStation[];
  isLoading: boolean;
  fetchData: () => void;
  order: 'asc' | 'desc' | undefined;
  setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc' | undefined>>;
  handleSortGasStation: () => void;
  isSortingActive: boolean;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const GasStationContext = createContext<GasStationsContextType | undefined>(
  undefined
);

export const GasStationProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [gasStations, setGasStations] = useState<GasStation[]>([]);
  const [filteredGasStations, setFilteredGasStations] =
    useState<GasStation[]>(gasStations);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState<'asc' | 'desc' | undefined>(undefined);
  const isSortingActive = order === 'asc' || order === 'desc';
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = useCallback(async () => {
    try {
      setSearchTerm('');
      setOrder(undefined);
      setIsLoading(true);
      const response = await fetch(
        'https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&outFields=*&returnGeometry=true&outSR=4326&f=pjson'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();

      const formattedGasStations = formatGasStationResults(result);

      setGasStations(formattedGasStations);
      setFilteredGasStations(formattedGasStations);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const setOrderDirection = () => {
    switch (order) {
      case 'asc':
        return 'desc';
      case 'desc':
        return 'asc';
      default:
        return 'asc';
    }
  };

  const handleSortGasStation = useCallback(() => {
    setOrder(setOrderDirection());

    const newSortedGasStations = [...gasStations].sort((a, b) => {
      if (a.address.street < b.address.street) return order === 'asc' ? 1 : -1;
      if (a.address.street > b.address.street) return order === 'asc' ? -1 : 1;
      return 0;
    });
    setFilteredGasStations(newSortedGasStations);
    setGasStations(newSortedGasStations);
  }, [order, filteredGasStations]);

  useMemo(() => {
    const newFilteredGasStations = gasStations.filter((gasStation) => {
      return gasStation.address.street
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

    setFilteredGasStations(newFilteredGasStations);
  }, [searchTerm, setSearchTerm]);

  return (
    <GasStationContext.Provider
      value={{
        gasStations: filteredGasStations,
        isLoading,
        fetchData,
        order,
        setOrder,
        handleSortGasStation,
        isSortingActive,
        searchTerm,
        setSearchTerm
      }}
    >
      {children}
    </GasStationContext.Provider>
  );
};
export const useGasStations = () => {
  const context = React.useContext(GasStationContext);
  if (!context) {
    throw new Error('useGasStations must be used within a GasStationProvider');
  }
  return context;
};
