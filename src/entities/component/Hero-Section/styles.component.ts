import { styled } from '@mui/material'
import { publicImages } from 'shared/config'

export const HeroSectionStyled = styled('div')<{ issmall?: boolean }>(
  ({ issmall }) => ({
    backgroundImage: `url(${publicImages.heroSectionImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: !issmall ? '90vh' : 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    zIndex: 1,
  })
)

export const TopViewStyled = styled('div')<{ issmall?: boolean }>(
  ({ issmall }) => ({
    height: 'fit-content',
    margin: issmall ? '0px' : 'auto 0px',
    padding: issmall ? '6vw 2vw' : '0',
    marginLeft: issmall ? '23px' : '70px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  })
)

export const ButtonWrapperStyled = styled('div')({
  display: 'flex',
  gap: '10px',
})

export const PromiseDataWrapperStyled = styled('div')({
  maxWidth: '50%',
  display: 'flex',
  flexWrap: 'wrap',
})

export const PromiseDataStyled = styled('div')<{ issmall?: boolean }>(
  ({ issmall }) => ({
    display: 'flex',
    gap: '14px',
    alignItems: 'center',
    flexBasis: issmall ? '100%' : '50%',
    marginBottom: '30px',
  })
)
