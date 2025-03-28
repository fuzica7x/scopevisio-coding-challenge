import GitHubIcon from '@mui/icons-material/GitHub';
import { Tooltip } from '@mui/material';
import StyledIconButton from './StyledIconButton';

const GitHubLink = () => {
  return (
    <Tooltip title="GitHub Repository">
      <StyledIconButton
        component="a"
        href={import.meta.env.VITE_GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="large" />
      </StyledIconButton>
    </Tooltip>
  );
};

export default GitHubLink;
