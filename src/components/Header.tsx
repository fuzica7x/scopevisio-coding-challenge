import { Box, Typography } from '@mui/material';
import GitHubLink from './githubLink/GithubLink';

const Header = () => {
  return (
    <Box component="header" sx={{ mb: 6 }}>
      <GitHubLink />
      <Typography variant="h2">Tankstellensuche Köln</Typography>
    </Box>
  );
};

export default Header;
