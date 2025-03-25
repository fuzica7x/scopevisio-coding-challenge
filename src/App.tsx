import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import './App.css';
import LoadingSpinner from './components/LoadingSpinner';
import { useFetchGasStations } from './hooks/useFetchGasStations';
import { GasStation } from './utils/formatGasStationResults';

function App() {
  const { gasStations, isLoading, fetchData } = useFetchGasStations();

  if (isLoading) return <LoadingSpinner />;
  if (!gasStations) return null;
  return (
    <div
      className="App"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Button onClick={fetchData} variant="contained" sx={{ margin: '20px' }}>
        Daten neu laden
      </Button>
      <TableContainer
        sx={{
          width: '80%',
          overflow: 'hidden',
          margin: 'auto',
          borderRadius: '12px',
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
          border: '1px solid #ddd'
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: '#e0e0e0'
              }}
            >
              <TableCell>Straße und Hausnummer</TableCell>
              <TableCell>Postleitzahl</TableCell>
              <TableCell>Stadt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gasStations.map((station: GasStation, index: number) => (
              <TableRow
                key={station.objectId}
                sx={index % 2 ? { background: '#f9f9f9' } : {}}
              >
                <TableCell>{station.address.street}</TableCell>
                <TableCell>{station.address.zipCode}</TableCell>
                <TableCell>{station.address.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
