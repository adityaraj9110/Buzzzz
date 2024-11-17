import { styled } from '@mui/material'
import { publicImages } from 'shared/config'

export const HeroSectionStyled = styled('div')({
  backgroundImage: `url(${publicImages.heroSectionImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '80vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  zIndex:1
})

export const TopViewStyled = styled('div')({
  height: 'fit-content',
  margin: 'auto 0px',
  marginLeft: '70px',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
})

export const ButtonWrapperStyled = styled('div')({
  display: 'flex',
  gap: '10px',
})

export const PromiseDataWrapperStyled = styled('div')({
  maxWidth: '50%',
  display: 'flex',
  flexWrap: 'wrap',
})

export const PromiseDataStyled = styled('div')({
  display: 'flex',
  gap: '14px',
  alignItems: 'center',
  flexBasis: '50%',
  marginBottom: '30px',
})
