import { Button, styled } from '@mui/material'

export const WrapperStyled = styled('div')(
  ({
    theme: {
      palette: { sectionBackground },
    },
  }) => ({
    width: '100vw',
    background: sectionBackground,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  })
)

export const ButtonStyled = styled(Button)({
  textTransform: 'none',
  height: 'fit-content',
  ['& .MuiButton-startIcon > :nth-of-type(1)']: {
    fontSize: '32px',
  },
})
