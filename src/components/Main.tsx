import { Box, Button } from '@mui/material';
import { useGasStations } from '../Provider/GasStationProvider';

import GasStationTable from './GasStationTable';
import LoadingSpinner from './LoadingSpinner';

const Main = () => {
  const { gasStations, isLoading, fetchData } = useGasStations();

  if (isLoading) return <LoadingSpinner />;
  if (!gasStations) return null;
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button onClick={fetchData} variant="contained" sx={{ margin: '20px' }}>
        Daten neu laden
      </Button>
      <GasStationTable />
    </Box>
  );
};

export default Main;
