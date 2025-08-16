import { Typography } from '@mui/material'
import { BuzInfoSection } from 'entities/component'
import { publicImages } from 'shared/config'
import {
  InfoSectionWrapperStyled,
  StackStyled,
  WrapperStackStyled,
} from './styles.component'
import { RoundedIcon } from 'shared/components'
import { useScreenSize } from 'shared/hooks'

export const BuzWorking = () => {
  const TopView = () => {
    return (
      <>
        <Typography variant="h5.700">
          How{' '}
          <Typography variant="h5.700" color="primary.main">
            onezup{' '}
          </Typography>
          Works?
        </Typography>

        <Typography variant="body2">
          Reliable, safe, and efficient rides—wherever you need to go.
        </Typography>
      </>
    )
  }

  const InfoSection = () => {
    const { smallScreen: smallscreen } = useScreenSize()

    return (
      <InfoSectionWrapperStyled smallscreen={smallscreen}>
        {Array.from(Array(4).keys()).map((i) => (
          <StackStyled key={i} smallscreen={smallscreen}>
            <WrapperStackStyled>
              <RoundedIcon
                content={
                  <Typography variant="h6.700" color="neutral.white">
                    {i + 1}
                  </Typography>
                }
              />
              <Typography variant="body1.600">Download the App</Typography>
              <Typography variant="body1" textAlign={'center'}>
                Get the onezup app on your phone—available for both iOS and
                Android.
              </Typography>
            </WrapperStackStyled>
            {i < 3 && (
              <img
                src={publicImages.arrow}
                alt="arrow"
                style={{
                  transform: smallscreen ? 'rotate(90deg)' : 'unset',
                }}
              />
            )}
          </StackStyled>
        ))}
      </InfoSectionWrapperStyled>
    )
  }

  return (
    <BuzInfoSection topInfo={<TopView />} showcaseSection={<InfoSection />} />
  )
}
