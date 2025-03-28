import { useGasStations } from '../libs/hooks/useGasStations';
import GasStations from './GasStations';
import LoadingSpinner from './LoadingSpinner';
import SearchBar from './SearchBar';

const Main = () => {
  const { gasStations, isLoading, error } = useGasStations();

  if (isLoading) return <LoadingSpinner />;
  if (!gasStations) return null;
  if (error)
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );

  return (
    <>
      <SearchBar />
      <GasStations />
    </>
  );
};

export default Main;
