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

  const fetchData = useCallback(async () => {
    try {
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

  return (
    <GasStationContext.Provider
      value={{
        gasStations,
        filteredGasStations,
        isLoading,
        fetchData,
        setFilteredGasStations
      }}
    >
      {children}
    </GasStationContext.Provider>
  );
};
