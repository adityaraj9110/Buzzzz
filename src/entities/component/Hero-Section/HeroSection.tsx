import React from 'react'
import { Button, Typography } from '@mui/material'
import { Logo } from './Logo/Logo'
import { sitePromisesData } from 'entities/model'
import {
  ButtonWrapperStyled,
  HeroSectionStyled,
  PromiseDataStyled,
  PromiseDataWrapperStyled,
  TopViewStyled,
} from './styles.component'
import { useScreenSize } from 'shared/hooks'

export const HeroSection = () => {
  const { smallScreen } = useScreenSize()
  return (
    <HeroSectionStyled isSmall={smallScreen}>
      <TopViewStyled isSmall={smallScreen}>
        <div>
          <Typography variant="h1.700" color="primary.main">
            BuzzCabs
          </Typography>
          <Typography variant="h1.700" color="neutral.white">
            - The Smart Way to Travel!
          </Typography>
          <Typography variant="body2" color="neutral.white" component={'p'}>
            Instant cabs at your fingertips. Wherever you are, BuzzCabs will get
            you there safe, fast, and hassle-free.
          </Typography>
        </div>
        <ButtonWrapperStyled>
          <Button color="secondary">BOOK YOUR RIDE</Button>
          <Button variant="outlined">GET STARTED</Button>
        </ButtonWrapperStyled>

        <PromiseDataWrapperStyled>
          {sitePromisesData.map(({ label, url }) => (
            <PromiseDataStyled isSmall={smallScreen} key={label}>
              <Logo url={url} />
              <Typography variant="body2" color="neutral.white" component={'p'}>
                {label}
              </Typography>
            </PromiseDataStyled>
          ))}
        </PromiseDataWrapperStyled>
      </TopViewStyled>
    </HeroSectionStyled>
  )
}
