import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableSortLabel
} from '@mui/material';

import { useFilter } from '../hooks/useFilter';
import { useGasStations } from '../hooks/useGasStations';
import StyledTableContainer from './table/StyledTableContainer';
import StyledTableHead from './table/StyledTableHead';
import StyledTableRow from './table/StyledTableRow';

const GasStationTable = () => {
  const { filteredGasStations } = useGasStations();

  const { order, setOrder, isSortingActive } = useFilter();

  return (
    <StyledTableContainer>
      <Table>
        <StyledTableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={isSortingActive}
                direction={order === 'none' ? undefined : order}
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
          {filteredGasStations.map((station) => (
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
