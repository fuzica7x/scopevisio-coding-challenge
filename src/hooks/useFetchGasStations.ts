import { useCallback, useEffect, useState } from 'react';
import {
  formatGasStationResults,
  GasStation
} from '../utils/formatGasStationResults';

export const useFetchGasStations = () => {
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

  return { gasStations, isLoading, fetchData };
};
