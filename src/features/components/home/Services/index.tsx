import { Stack, Typography } from '@mui/material'
import { BuzInfoSection } from 'entities/component'
import { publicImages } from 'shared/config'

const TopInfo = () => {
  return (
    <Stack alignItems={'center'} gap={'10px'}>
      <Typography variant={'h4.700'}>Our Services</Typography>
      <Typography variant={'body1'} textAlign={'center'} maxWidth={'80%'}>
        Get where you need to go with ease and comfort. Our cab service offers
        well-maintained vehicles and professional drivers, ensuring a safe and
        pleasant journey every time. Perfect for daily commutes, shopping trips,
        or just getting around town.
      </Typography>
    </Stack>
  )
}

const ServicesShowcase = () => {
  const servicesImg = [
    publicImages.cabBooking,
    publicImages.autoBooking,
    publicImages.bikeBooking,
  ]
  return (
    <Stack direction={'row'} gap={'30px'}>
      {servicesImg.map((url) => (
        <img src={url} key={url} />
      ))}
    </Stack>
  )
}

export const Services = () => {
  return (
    <BuzInfoSection
      topInfo={<TopInfo />}
      showcaseSection={<ServicesShowcase />}
    />
  )
}
