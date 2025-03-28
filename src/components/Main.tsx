import { useGasStations } from '../hooks/useGasStations';
import GasStationTable from './GasStationTable';
import LoadingSpinner from './LoadingSpinner';
import SearchBar from './SearchBar';

const Main = () => {
  const { gasStations, isLoading } = useGasStations();

  if (isLoading) return <LoadingSpinner />;
  if (!gasStations) return null;
  return (
    <>
      <SearchBar />
      <GasStationTable />
    </>
  );
};

export default Main;
