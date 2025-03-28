import { ArrowBack } from '@mui/icons-material';
import { Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledBackButton = styled(Button)({
  color: 'black',
  gap: '0.5rem'
});

const BackButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <StyledBackButton onClick={handleOnClick}>
      <ArrowBack /> Zurück
    </StyledBackButton>
  );
};

export default BackButton;
