import React from 'react'
import { LogoWrapperStyled } from './styles.component'

export const Logo = ({ url }: { url: string }) => {
  return (
    <LogoWrapperStyled>
      <img src={url} alt="company promises" />
    </LogoWrapperStyled>
  )
}
