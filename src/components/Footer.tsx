import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import FetchButton from './FetchButton';

const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 6 }}>
      <FetchButton />
      <p>
        © 2025 Marcel Boller | <Link to="/imprint">Impressum</Link>
      </p>
    </Box>
  );
};

export default Footer;
