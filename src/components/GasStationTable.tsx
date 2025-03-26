import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { GasStation, useGasStations } from '../Provider/GasStationProvider';
import StyledTableContainer from './Table/StyledTableContainer';
import StyledTableHead from './Table/StyledTableHead';
import StyledTableRow from './Table/StyledTableRow';

const GasStationTable = () => {
  const { gasStations } = useGasStations();

  return (
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
  );
};

export default GasStationTable;
