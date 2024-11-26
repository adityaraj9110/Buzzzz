import React from 'react'
import { Stack, Typography, useTheme } from '@mui/material'

export const HeroSection = () => {
  const { palette } = useTheme()
  return (
    <Stack
      style={{
        width: '100vw',
        minHeight: '450px',
        justifyContent: 'center',
        gap: '30px',
        background: palette.accent[900],
      }}
    >
      <div
        style={{
          maxWidth: '1550px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack>
          <Typography variant="h5.700" color="neutral.white">
            Your{' '}
            <Typography variant="h5.700" color="primary.main">
              Ride
            </Typography>
            , Your{' '}
            <Typography variant="h5.700" color="primary.main">
              Choice
            </Typography>
          </Typography>

          <Typography
            variant="body3"
            color="neutral.white"
            textAlign={'center'}
          >
            Your Reliable Ride Partner
          </Typography>
        </Stack>

        <Typography
          variant="body3"
          color="neutral.white"
          textAlign={'center'}
          maxWidth={'1150px'}
        >
          Explore our wide range of transport options, from bikes to cars,
          tailored to meet your every travel need with ease and affordability.
          Whether you're rushing to work, commuting in the city, or planning a
          weekend getaway, BuzzCabs is here to offer reliable, safe, and
          convenient rides for you.
        </Typography>
      </div>
    </Stack>
  )
}
