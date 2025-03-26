import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@mui/material';

import LoadingSpinner from './components/LoadingSpinner';
import StyledTableContainer from './components/Table/StyledTableContainer';
import StyledTableHead from './components/Table/StyledTableHead';
import StyledTableRow from './components/Table/StyledTableRow';
import { useFetchGasStations } from './hooks/useFetchGasStations';
import { GasStation } from './utils/formatGasStationResults';

function App() {
  const { gasStations, isLoading, fetchData } = useFetchGasStations();

  if (isLoading) return <LoadingSpinner />;
  if (!gasStations) return null;
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button onClick={fetchData} variant="contained" sx={{ margin: '20px' }}>
        Daten neu laden
      </Button>
      <StyledTableContainer>
        <Table>
          <StyledTableHead>
            <TableRow>
              <TableCell>Straße und Hausnummer</TableCell>
              <TableCell>Postleitzahl</TableCell>
              <TableCell>Stadt</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {gasStations.map((station: GasStation, index: number) => (
              <StyledTableRow key={station.objectId}>
                <TableCell>{station.address.street}</TableCell>
                <TableCell>{station.address.zipCode}</TableCell>
                <TableCell>{station.address.city}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Box>
  );
}

export default App;
