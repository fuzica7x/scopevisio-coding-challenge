import { createContext } from 'react';
import { GasStationsContextInterface } from '../interfaces/gasStation';

export const GasStationContext = createContext<
  GasStationsContextInterface | undefined
>(undefined);
