import { styled } from '@mui/material'

export const WrapperStyled = styled('div')<{ iconBackgroundColor?: string }>(
  ({ theme: { palette }, iconBackgroundColor }) => ({
    background: iconBackgroundColor ?? palette.secondary.main,
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })
)
