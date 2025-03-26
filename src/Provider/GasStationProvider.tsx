import React, { createContext, useCallback, useEffect, useState } from 'react';
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
}

const GasStationContext = createContext<GasStationsContextType | undefined>(
  undefined
);

export const GasStationProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [gasStations, setGasStations] = useState<GasStation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&outFields=*&returnGeometry=true&outSR=4326&f=pjson'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();

      setGasStations(formatGasStationResults(result));
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <GasStationContext.Provider value={{ gasStations, isLoading, fetchData }}>
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
