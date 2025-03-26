import { CircularProgress, Stack, Typography } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <Stack
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      height="100vh"
    >
      <CircularProgress
        size={60}
        sx={{
          display: 'inline-block',
          position: 'relative'
        }}
      />
      <Typography>Lade Daten...</Typography>
    </Stack>
  );
};

export default LoadingSpinner;
