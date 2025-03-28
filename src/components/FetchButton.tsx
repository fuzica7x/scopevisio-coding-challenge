import { Button } from '@mui/material';
import { useGasStations } from '../hooks/useGasStations';

const FetchButton = () => {
  const { fetchData } = useGasStations();

  return (
    <Button onClick={fetchData} variant="contained">
      Daten neu laden
    </Button>
  );
};

export default FetchButton;
