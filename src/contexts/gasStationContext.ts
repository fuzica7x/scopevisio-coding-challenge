import { createContext } from 'react';
import { GasStationsContext } from '../interfaces/gasStation';

export const GasStationContext = createContext<GasStationsContext | undefined>(
  undefined
);
