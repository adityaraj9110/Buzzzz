import { Stack, styled } from '@mui/material'

export const BottomWrapperStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  borderRadius: '10px',
  background: theme.palette.blue['100'],
  width: '100%',
}))

export const ContainerStyled = styled(Stack)({
  alignItems: 'center',
  gap: '1rem',
})
