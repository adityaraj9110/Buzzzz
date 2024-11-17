import { Typography } from '@mui/material'
import { BuzInfoSection } from 'entities/component'
import { publicImages } from 'shared/config'
import {
  InfoSectionWrapperStyled,
  StackStyled,
  WrapperStackStyled,
} from './styles.component'
import { RoundedIcon } from 'shared/components'

export const BuzWorking = () => {
  const TopView = () => {
    return (
      <>
        <Typography variant="h5.700">
          How{' '}
          <Typography variant="h5.700" color="primary.main">
            BuzzCabs{' '}
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
    return (
      <InfoSectionWrapperStyled>
        {Array.from(Array(4).keys()).map((i) => (
          <StackStyled key={i}>
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
                Get the BuzzCabs app on your phone—available for both iOS and
                Android.
              </Typography>
            </WrapperStackStyled>
            {i < 3 && <img src={publicImages.arrow} alt="arrow" />}
          </StackStyled>
        ))}
      </InfoSectionWrapperStyled>
    )
  }

  return (
    <BuzInfoSection topInfo={<TopView />} showcaseSection={<InfoSection />} />
  )
}
