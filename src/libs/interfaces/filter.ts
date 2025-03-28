import { OrderDirection } from '../types/oderDirection';
import { GasStation } from './gasStation';

export interface FilterContextInterface {
  order: OrderDirection;
  setOrder: React.Dispatch<React.SetStateAction<OrderDirection>>;
  isSortingActive: boolean;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  resetSearch: () => void;
  filteredGasStations: GasStation[];
}
