import { styled } from '@mui/material'
import { publicImages } from 'shared/config'

export const HeroSectionStyled = styled('div')<{ isSmall?: boolean }>(
  ({ isSmall }) => ({
    backgroundImage: `url(${publicImages.heroSectionImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: !isSmall ? '90vh' : 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    zIndex: 1,
  })
)

export const TopViewStyled = styled('div')<{ isSmall?: boolean }>(
  ({ isSmall }) => ({
    height: 'fit-content',
    margin: isSmall ? '0px' : 'auto 0px',
    padding: isSmall ? '6vw 2vw' : '0',
    marginLeft: isSmall ? '23px' : '70px',
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

export const PromiseDataStyled = styled('div')<{ isSmall?: boolean }>(
  ({ isSmall }) => ({
    display: 'flex',
    gap: '14px',
    alignItems: 'center',
    flexBasis: isSmall ? '100%' : '50%',
    marginBottom: '30px',
  })
)
