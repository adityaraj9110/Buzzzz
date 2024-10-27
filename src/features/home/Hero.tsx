import React from 'react'
import { WrapperStyled } from './styles.component'

// this is how we will style our component

const Hero = () => {
  return (
    <WrapperStyled
      style={{ backgroundColor: 'blue', color: 'white', padding: '20px' }}
    ></WrapperStyled>
  )
}

export default Hero
