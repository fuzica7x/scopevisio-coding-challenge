import { GasStation } from '../interfaces/gasStation';
import { OrderDirection } from '../types/oderDirection';

export const sortGasStations = (
  gasStations: GasStation[],
  direction: Omit<OrderDirection, 'none'>
) => {
  return [...gasStations].sort((a, b) => {
    if (a.address.street < b.address.street)
      return direction === 'asc' ? -1 : 1;
    if (a.address.street > b.address.street)
      return direction === 'desc' ? 1 : -1;
    return 0;
  });
};
