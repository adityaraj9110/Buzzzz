import React from 'react'
import { Typography } from '@mui/material'
import { BuzInfoSection, Carousel } from 'entities/component'

const TopView = () => {
  return (
    <>
      <Typography variant="h5.700">
        HEAR FROM{' '}
        <Typography variant="h5.700" color="primary.main">
          OUR PEOPLE{' '}
        </Typography>
      </Typography>

      <Typography variant="body3">Find out What Our Riders Say</Typography>
    </>
  )
}

export const OurPeopleSection = () => {
  return <BuzInfoSection topInfo={<TopView />} showcaseSection={<Carousel />} />
}
