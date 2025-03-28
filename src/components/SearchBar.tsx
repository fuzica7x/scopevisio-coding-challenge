import { Box, TextField } from '@mui/material';
import { useGasStations } from '../hooks/useGasStations';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useGasStations();

  return (
    <Box sx={{ my: 2 }}>
      <TextField
        type="search"
        label="Nach Straße und Hausnummer suchen…"
        variant="outlined"
        size="small"
        sx={{ width: '80%', borderRadius: '12px' }}
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
      />
    </Box>
  );
};

export default SearchBar;
