import { Box, Typography } from '@mui/material';
import BackButton from '../components/buttons/BackButton';

const Imprint = () => {
  return (
    <Box>
      <BackButton />
      <Typography variant="h3">Impressum</Typography>
      <Typography>Marcel Boller</Typography>
      <Typography>Am Schloßpark 77</Typography>
      <Typography>56564 Neuwied</Typography>
      <Typography></Typography>
    </Box>
  );
};

export default Imprint;
