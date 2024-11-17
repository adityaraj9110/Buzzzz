import React, { ReactNode } from 'react'
import { WrapperStyled } from './styles.component'

export const RoundedIcon = ({
  content,
  iconBackgroundColor,
}: {
  content: ReactNode
  iconBackgroundColor?: string
}) => {
  return (
    <WrapperStyled iconBackgroundColor={iconBackgroundColor}>
      {content}
    </WrapperStyled>
  )
}
