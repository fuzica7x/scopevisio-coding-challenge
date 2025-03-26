import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableSortLabel
} from '@mui/material';
import { useGasStations } from '../Provider/GasStationProvider';
import StyledTableContainer from './Table/StyledTableContainer';
import StyledTableHead from './Table/StyledTableHead';
import StyledTableRow from './Table/StyledTableRow';

const GasStationTable = () => {
  const { gasStations, order, setOrder, isSortingActive } = useGasStations();

  return (
    <StyledTableContainer>
      <Table>
        <StyledTableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={isSortingActive}
                direction={order}
                onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
              >
                Straße und Hausnummer
              </TableSortLabel>
            </TableCell>
            <TableCell>Postleitzahl</TableCell>
            <TableCell>Stadt</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {gasStations.map((station) => (
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
