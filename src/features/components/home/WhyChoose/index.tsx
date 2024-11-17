import { Typography, useTheme } from '@mui/material'
import { BuzInfoSection } from 'entities/component'
import { whyChooseUseCardData } from 'features/model'
import { BuzCard } from 'shared/components'

const TopInfoSection = () => {
  return (
    <>
      <Typography variant="h5.700">
        Why Choose{' '}
        <Typography variant="h5.700" color="primary.main">
          BuzzCabs{' '}
        </Typography>
        ?
      </Typography>

      <Typography variant="body2">
        Reliable, safe, and efficient rides—wherever you need to go.
      </Typography>
    </>
  )
}

const Cards = () => {
  const { palette } = useTheme()
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
      {whyChooseUseCardData.map(({ desc, iconUrl, title }) => (
        <BuzCard
          cardDescription={desc}
          cardTitle={title}
          iconUrl={iconUrl}
          iconBackgroundColor={palette.neutral.black}
        />
      ))}
    </div>
  )
}
export const WhyChooseUs = () => {
  return (
    <BuzInfoSection topInfo={<TopInfoSection />} showcaseSection={<Cards />} />
  )
}
