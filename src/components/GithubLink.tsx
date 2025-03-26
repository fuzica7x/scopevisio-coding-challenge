import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Tooltip } from '@mui/material';

const GitHubLink = () => {
  return (
    <Tooltip title="GitHub Repository">
      <IconButton
        component="a"
        href="https://github.com/fuzica7x/scopevisio-coding-challenge"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'black', marginLeft: 'auto' }}
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
    </Tooltip>
  );
};

export default GitHubLink;
