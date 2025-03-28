import { Button } from '@mui/material';
import { useFilter } from '../hooks/useFilter';
import { useGasStations } from '../hooks/useGasStations';

const FetchButton = () => {
  const { fetchData } = useGasStations();
  const { resetSearch } = useFilter();

  const handleOnClick = () => {
    resetSearch();
    fetchData();
  };

  return (
    <Button onClick={handleOnClick} variant="contained">
      Daten neu laden
    </Button>
  );
};

export default FetchButton;
