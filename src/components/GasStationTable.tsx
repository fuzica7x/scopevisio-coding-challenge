import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableSortLabel
} from '@mui/material';
import _ from 'lodash';
import { useGasStations } from '../Provider/GasStationProvider';
import StyledTableContainer from './Table/StyledTableContainer';
import StyledTableHead from './Table/StyledTableHead';
import StyledTableRow from './Table/StyledTableRow';

const GasStationTable = () => {
  const { gasStations, order, handleSortGasStation, isSortingActive } =
    useGasStations();

  return (
    <StyledTableContainer>
      <Table>
        <StyledTableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={isSortingActive}
                direction={order}
                onClick={handleSortGasStation}
              >
                Straße und Hausnummer
              </TableSortLabel>
            </TableCell>
            <TableCell>Postleitzahl</TableCell>
            <TableCell>Stadt</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {_.map(gasStations, (station) => (
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
