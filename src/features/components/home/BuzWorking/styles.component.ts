import { Stack, styled } from '@mui/material'

export const InfoSectionWrapperStyled = styled('div')(
  ({ theme: { palette } }) => ({
    display: 'flex',
    gap: '10px',
    background: palette.blue['100'],
    padding: '1rem',
    borderRadius: '10px',
    width: '100%',
    justifyContent: 'space-between',
  })
)

export const StackStyled = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
})

export const WrapperStackStyled = styled(Stack)({
  gap: '12px',
  maxWidth: '250px',
  alignItems: 'center',
})
