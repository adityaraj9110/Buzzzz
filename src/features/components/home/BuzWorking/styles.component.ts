import { Stack, styled } from '@mui/material'

export const InfoSectionWrapperStyled = styled('div')<{ smallScreen: boolean }>(
  () =>
    ({ smallScreen, theme: { palette } }) => ({
      display: 'flex',
      flexDirection: smallScreen ? 'column' : 'row',
      gap: '10px',
      background: palette.blue['100'],
      padding: !smallScreen ? '1rem' : '1vw 3vw',
      borderRadius: '10px',
      width: smallScreen ? '100vw' : '100%',
      justifyContent: smallScreen ? 'center' : 'space-between',
    })
)

export const StackStyled = styled(Stack)<{ smallScreen: boolean }>(
  ({ smallScreen }) => ({
    flexDirection: smallScreen ? 'column' : 'row',
    alignItems: 'center',
    gap: smallScreen ? '66px' : 'none',
    marginTop: smallScreen ? '32px' : 'none',
  })
)

export const WrapperStackStyled = styled(Stack)({
  gap: '12px',
  maxWidth: '250px',
  alignItems: 'center',
})
