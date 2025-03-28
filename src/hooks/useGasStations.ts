import { useContext } from 'react';
import { GasStationContext } from '../contexts/gasStationContext';

export const useGasStations = () => {
  const context = useContext(GasStationContext);
  if (!context) {
    throw new Error('useGasStations must be used within a GasStationProvider');
  }
  return context;
};
