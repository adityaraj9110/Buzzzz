import { ReactNode } from 'react'
import { TextSectionStyled, WrapperStyled } from './styles.component'

export const ReversableSection = ({
  imgUrl,
  reverse = false,
  textSection,
}: {
  imgUrl: string
  textSection: ReactNode
  reverse?: boolean
}) => {
  return (
    <WrapperStyled reverse={reverse}>
      <img src={imgUrl} alt="wait for cab" style={{ width: '100%' }} />
      <TextSectionStyled>{textSection}</TextSectionStyled>
    </WrapperStyled>
  )
}
