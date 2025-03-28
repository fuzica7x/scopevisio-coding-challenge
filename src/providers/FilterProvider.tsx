import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { FilterContext } from '../contexts/filterContext';
import { useGasStations } from '../hooks/useGasStations';

export const FilterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { gasStations, setFilteredGasStations } = useGasStations();

  const [order, setOrder] = useState<'asc' | 'desc' | 'none'>('none');
  const isSortingActive = order === 'asc' || order === 'desc';
  const [searchTerm, setSearchTerm] = useState('');

  const resetSearch = () => {
    setSearchTerm('');
    setOrder('none');
  };

  const sortGasStations = useCallback(() => {
    setFilteredGasStations((prevGasStations) =>
      [...prevGasStations].sort((a, b) => {
        if (a.address.street < b.address.street)
          return order === 'asc' ? -1 : 1;
        if (a.address.street > b.address.street)
          return order === 'asc' ? 1 : -1;
        return 0;
      })
    );
  }, [order, setFilteredGasStations]);

  useEffect(() => {
    if (isSortingActive) sortGasStations();
  }, [isSortingActive, sortGasStations]);

  useEffect(() => {
    const newFilteredGasStations = gasStations.filter((gasStation) =>
      gasStation.address.street.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (newFilteredGasStations.length !== gasStations.length) {
      setFilteredGasStations(newFilteredGasStations);
    }
  }, [searchTerm, gasStations, setFilteredGasStations]);

  return (
    <FilterContext.Provider
      value={{
        order,
        setOrder,
        isSortingActive,
        searchTerm,
        setSearchTerm,
        resetSearch
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
