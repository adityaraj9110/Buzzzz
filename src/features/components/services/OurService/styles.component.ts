import { Card, styled } from '@mui/material'

export const BottomViewWrapperStyled = styled('div')({
  display: 'flex',
  gap: '30px',
  width: '100%',
  flexWrap: 'wrap',
})

export const CardStyled = styled(Card)({
  minHeight: '330px',
  background: '#E6E6E6',
  position: 'relative',
  flex: 1,
})

export const TaxyImgStyled = styled('img')({
  position: 'absolute',
  bottom: '0px',
  right: '0px',
})

export const AutoImgStyled = styled('img')({
  position: 'absolute',
  bottom: '0px',
  rotate: '-4deg',
  right: '0px',
})

export const ScootyImgStyled = styled('img')({
  position: 'absolute',
  rotate: '-6deg',
  bottom: '0px',
  right: '-22px',
})
