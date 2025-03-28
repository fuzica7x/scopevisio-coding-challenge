import { FC, ReactNode, useCallback, useEffect, useState } from 'react';

import { GasStationContext } from '../contexts/gasStationContext';
import { GasStation } from '../interfaces/gasStation';
import { formatGasStationResults } from '../utils/formatGasStationResults';

export const GasStationProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [gasStations, setGasStations] = useState<GasStation[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(import.meta.env.VITE_GAS_STATIONS_URL);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();

      const formattedGasStations = formatGasStationResults(result);

      setGasStations(formattedGasStations);
    } catch (error) {
      setError('Daten konnten nicht geladen werden');
      console.error('Failed to fetch data', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <GasStationContext.Provider
      value={{
        gasStations,
        isLoading,
        fetchData,
        error
      }}
    >
      {children}
    </GasStationContext.Provider>
  );
};
