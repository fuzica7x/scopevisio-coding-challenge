import { Box, Button } from '@mui/material';

import { useGasStations } from '../hooks/useGasStations';
import GasStationTable from './GasStationTable';
import GitHubLink from './GithubLink';
import LoadingSpinner from './LoadingSpinner';
import SearchBar from './SearchBar';

const Main = () => {
  const { gasStations, isLoading, fetchData } = useGasStations();

  if (isLoading) return <LoadingSpinner />;
  if (!gasStations) return null;
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          my: 2
        }}
      >
        <Button onClick={fetchData} variant="contained">
          Daten neu laden
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <GitHubLink />
      </Box>
      <SearchBar />
      <GasStationTable />
    </Box>
  );
};

export default Main;
