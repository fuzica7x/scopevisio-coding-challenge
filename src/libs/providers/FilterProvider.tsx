import { FC, ReactNode, useCallback, useMemo, useState } from 'react';

import { FilterContext } from '../contexts/filterContext';
import { useGasStations } from '../hooks/useGasStations';
import { GasStation } from '../interfaces/gasStation';
import { OrderDirection } from '../types/oderDirection';
import { filterGasStations } from '../utils/filterGasStations';
import { sortGasStations as sort } from '../utils/sortGasStations';

export const FilterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { gasStations } = useGasStations();

  const [order, setOrder] = useState<OrderDirection>('none');
  const [searchTerm, setSearchTerm] = useState('');

  const isSortingActive = order === 'asc' || order === 'desc';

  const resetSearch = useCallback(() => {
    setSearchTerm('');
    setOrder('none');
  }, [setSearchTerm, setOrder]);

  const filteredGasStations: GasStation[] = useMemo(() => {
    let result = filterGasStations(gasStations, searchTerm);

    if (isSortingActive) {
      result = sort(result, order);
    }

    return result;
  }, [gasStations, searchTerm, isSortingActive, order]);

  return (
    <FilterContext.Provider
      value={{
        order,
        setOrder,
        isSortingActive,
        searchTerm,
        setSearchTerm,
        resetSearch,
        filteredGasStations
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
