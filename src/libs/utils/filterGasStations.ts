import { GasStation } from '../interfaces/gasStation';

export const filterGasStations = (
  gasStations: GasStation[],
  searchTerm: string
) => {
  return [...gasStations].filter((gasStation) => {
    return gasStation.address.street
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
};
