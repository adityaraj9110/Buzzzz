import React from 'react'
import { Card, Stack, Typography } from '@mui/material'
import { BuzInfoSection } from 'entities/component'
import { publicImages } from 'shared/config'

export const OurService = () => {
  const TopView = () => {
    return (
      <Stack spacing={'5px'}>
        <Typography variant="h5.700" textAlign={'center'}>
          Our{' '}
          <Typography variant="h5.700" color="primary.main">
            Services
          </Typography>
        </Typography>

        <Typography variant="body3">
          At BuzzCabs, we provide a variety of vehicles to ensure you find the
          perfect ride for any journey.
        </Typography>
      </Stack>
    )
  }

  const BottomView = () => {
    return (
      <div
        style={{
          display: 'flex',
          gap: '30px',
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        <Card
          style={{
            minHeight: '330px',
            background: '#E6E6E6',
            position: 'relative',
            flex: 1,
          }}
        >
          <Stack spacing={'14px'} maxWidth={'360px'}>
            <Typography variant="h6.700">Cab Booking</Typography>
            <Typography variant="body1.500" maxWidth={'236px'}>
              Enjoy a smooth ride in our well-maintained cars for any trip.
            </Typography>
          </Stack>
          <img
            src={publicImages.taxy}
            style={{
              position: 'absolute',
              bottom: '0px',
              right: '0px',
            }}
          />
        </Card>
        <Card
          style={{
            minHeight: '330px',
            background: '#E6E6E6',
            position: 'relative',
            flex: 1,
          }}
        >
          <Stack spacing={'14px'} maxWidth={'360px'}>
            <Typography variant="h6.700">Auto Booking</Typography>
            <Typography variant="body1.500" maxWidth={'236px'}>
              Affordable and quick auto rides for your daily commutes.
            </Typography>
          </Stack>
          <img
            src={publicImages.auto}
            style={{
              position: 'absolute',
              bottom: '0px',
              rotate: '-4deg',
              right: '0px',
            }}
          />
        </Card>
        <Card
          style={{
            minHeight: '330px',
            background: '#E6E6E6',
            position: 'relative',
            flex: 1,
          }}
        >
          <Stack spacing={'14px'} maxWidth={'360px'}>
            <Typography variant="h6.700">Bike Booking</Typography>
            <Typography variant="body1.500" maxWidth={'236px'}>
              Beat the traffic with fast and affordable bike rides for short
              trips.
            </Typography>
          </Stack>
          <img
            src={publicImages.scooty}
            style={{
              position: 'absolute',
              rotate: '-6deg',
              bottom: '0px',
              right: '-22px',
            }}
          />
        </Card>
      </div>
    )
  }

  return (
    <BuzInfoSection topInfo={<TopView />} showcaseSection={<BottomView />} />
  )
}
