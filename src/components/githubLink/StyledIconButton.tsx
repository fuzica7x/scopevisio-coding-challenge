import { IconButton, IconButtonProps, styled } from '@mui/material';
import { ComponentProps } from 'react';

const StyledIconButton = styled(IconButton)<
  IconButtonProps & ComponentProps<'a'>
>(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  color: 'black',
  margin: 1
}));

export default StyledIconButton;
