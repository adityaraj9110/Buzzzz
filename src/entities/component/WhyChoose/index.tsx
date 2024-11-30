import { Typography, useTheme } from '@mui/material'
import { BuzInfoSection } from 'entities/component'
import { BuzCard } from 'shared/components'
import { CardDataType } from 'shared/model'

const TopInfoSection = ({
  title,
  subTitle,
  textPrimary,
}: {
  title?: string
  textPrimary?: string
  subTitle?: string
}) => {
  if (title && subTitle && textPrimary) {
    return (
      <>
        <Typography variant="h5.700">
          {title}{' '}
          <Typography variant="h5.700" color="primary.main">
            {textPrimary}{' '}
          </Typography>
        </Typography>

        <Typography variant="body2">{subTitle}</Typography>
      </>
    )
  }
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

const Cards = ({
  data,
  cardBasis,
}: {
  data: CardDataType[]
  cardBasis?: string
}) => {
  const { palette } = useTheme()
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        width: '100%',
        justifyContent: 'space-between',
        rowGap: '20px',
      }}
    >
      {data.map(({ desc, iconUrl, title }) => (
        <BuzCard
          key={iconUrl}
          cardDescription={desc}
          cardTitle={title}
          iconUrl={iconUrl}
          iconBackgroundColor={palette.neutral.black}
          cardBasis={cardBasis}
        />
      ))}
    </div>
  )
}
export const WhyChooseUs = ({
  data,
  title,
  subTitle,
  textPrimary,
  cardBasis,
}: {
  data: CardDataType[]
  title?: string
  subTitle?: string
  textPrimary?: string
  cardBasis?: string
}) => {
  return (
    <BuzInfoSection
      topInfo={
        <TopInfoSection
          subTitle={subTitle}
          textPrimary={textPrimary}
          title={title}
        />
      }
      showcaseSection={<Cards data={data} cardBasis={cardBasis} />}
    />
  )
}
