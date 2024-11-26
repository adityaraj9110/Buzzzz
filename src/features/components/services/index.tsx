import { Stack } from '@mui/material'
import { OurService } from './OurService'
import { HeroSection } from './heroSection'
import { ReversableSection } from 'entities/component'

export const Services = () => {
  return (
    <>
      <HeroSection />

      <Stack
        spacing={'100px'}
        sx={{
          width: '1400px',
          maxWidth: '90%',
          margin: 'auto',
          marginTop: '100px',
        }}
      >
        <OurService />
        <ReversableSection />
      </Stack>
    </>
  )
}
