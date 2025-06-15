import { styled } from '@mui/material'

export const WrapperStyled = styled('div', {
  shouldForwardProp: (propName) => propName !== 'reverse',
})<{ reverse?: boolean }>(({ reverse, theme: { breakpoints } }) => ({
  display: 'flex',
  gap: '120px',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: reverse ? 'row-reverse' : 'row',
  [breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}))

export const TextSectionStyled = styled('div')(
  ({ theme: { breakpoints } }) => ({
    minWidth: '830px',
    alignSelf: 'center',
    [breakpoints.down('md')]: {
      minWidth: '100%',
    },
  })
)
