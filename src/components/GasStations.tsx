import { Typography } from '@mui/material';
import { useFilter } from '../libs/hooks/useFilter';
import GasStationTable from './GasStationTable';

const GasStations = () => {
  const { filteredGasStations } = useFilter();

  if (!filteredGasStations.length)
    return <Typography>Keine Tankstellen gefunden...</Typography>;

  return <GasStationTable />;
};

export default GasStations;
