import React from 'react'
import { Stack, Typography } from '@mui/material'
import { BuzInfoSection } from 'entities/component'
import { publicImages } from 'shared/config'
import { ImagesWrapperStyled } from './styles.component'

const TopView = () => {
  return (
    <>
      <Typography variant="h5.700">
        Who{' '}
        <Typography variant="h5.700" color="primary.main">
          We Are?
        </Typography>
      </Typography>

      <Typography variant="body2">Your Reliable Ride Partner</Typography>
    </>
  )
}

const BottomView = () => {
  const images = [
    publicImages.aboutImg1,
    publicImages.aboutImg2,
    publicImages.aboutImg3,
    publicImages.aboutImg4,
    publicImages.aboutImg5,
  ]
  return (
    <Stack gap={'50px'}>
      <Typography variant="body3" textAlign={'center'}>
        At BuzzCabs, we are passionate about transforming urban transportation.
        Our platform offers a user-centric, hassle-free way to book bikes, cars,
        and autos for any journey—whether it's a quick commute or a long trip.
        We strive to provide a ride experience that is convenient, reliable, and
        affordable.
      </Typography>
      <ImagesWrapperStyled>
        {images.map((url) => (
          <img src={url} key={url} alt="img" />
        ))}
      </ImagesWrapperStyled>
    </Stack>
  )
}
export const WhoWeAre = () => {
  return (
    <BuzInfoSection topInfo={<TopView />} showcaseSection={<BottomView />} />
  )
}
