import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { GasStationContext } from '../contexts/gasStationContext';
import { GasStation } from '../interfaces/gasStation';
import { formatGasStationResults } from '../utils/formatGasStationResults';

export const GasStationProvider: FC<{ children: ReactNode }> = ({
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

      const response = await fetch(import.meta.env.VITE_GAS_STATIONS_URL);

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

  useEffect(() => {
    if (!isSortingActive) return;

    setFilteredGasStations((prevGasStations) =>
      [...prevGasStations].sort((a, b) => {
        if (a.address.street < b.address.street)
          return order === 'asc' ? -1 : 1;
        if (a.address.street > b.address.street)
          return order === 'asc' ? 1 : -1;
        return 0;
      })
    );
  }, [order, isSortingActive]);

  useEffect(() => {
    const newFilteredGasStations = gasStations.filter((gasStation) =>
      gasStation.address.street.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredGasStations(newFilteredGasStations);
  }, [searchTerm, gasStations]);

  return (
    <GasStationContext.Provider
      value={{
        gasStations: filteredGasStations,
        isLoading,
        fetchData,
        order,
        setOrder,
        isSortingActive,
        searchTerm,
        setSearchTerm
      }}
    >
      {children}
    </GasStationContext.Provider>
  );
};
