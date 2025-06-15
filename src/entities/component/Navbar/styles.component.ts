import { Box, styled, type BoxProps } from '@mui/material'
import type { LinkProps } from 'react-router-dom'

export const NavbarWrapperStyled = styled('div')<{ smallScreen: boolean }>(
  ({ theme: { palette }, smallScreen }) => ({
    background: palette.neutral.black,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: smallScreen ? '1rem' : '1.25rem 4.375rem',
    paddingLeft: smallScreen ? '2rem' : '4.375rem',
    width: '100%',
  })
)

export const MenuItemsWrapperStyled = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '50px',
})

export const StartViewWrapperStyled = styled(Box)<LinkProps & BoxProps>({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '14px',
  textDecoration: 'none',
})
