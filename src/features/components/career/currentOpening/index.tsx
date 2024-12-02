import { Button, Stack, Typography, useTheme } from '@mui/material'
import { careerDataMock } from 'features/model'
import { publicImages } from 'shared/config'

export const CurrentOpening = () => {
  const theme = useTheme()

  return (
    <Stack>
      <Typography variant="h5.600" textAlign={'center'}>
        Current{' '}
        <Typography variant="h5.600" color="primary.main">
          Openings
        </Typography>
      </Typography>
      <Typography variant="body1.500" textAlign={'center'}>
        Reliable, safe, and rides—Help us transform transportation!
      </Typography>

      {careerDataMock.map(({ jobTitle, location, responsibilities, whyWe }) => (
        <Stack
          marginTop={'20px'}
          sx={{
            background: theme.palette.custom.slate,
            padding: '22px',
            borderRadius: '8px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6.700">{jobTitle}</Typography>
            <Button
              color="secondary"
              endIcon={<img src={publicImages.link} />}
              size="small"
            >
              APPLY NOW
            </Button>
          </div>

          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>
              <Typography variant="body2.600" color="secondary">
                Location:
              </Typography>
              <Typography
                variant="body2.600"
                sx={{ display: 'inline', marginLeft: 1 }}
              >
                {location}
              </Typography>
            </li>
            <li>
              <Typography
                variant="body2.600"
                color="secondary"
                sx={{ fontWeight: 'bold', display: 'inline' }}
              >
                Responsibilities:
              </Typography>
              <Typography
                variant="body2.600"
                sx={{ display: 'inline', marginLeft: 1 }}
              >
                {responsibilities}
              </Typography>
            </li>
          </ul>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6.700">Why Drive with Us?</Typography>
          </div>

          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {whyWe?.map(({ subTitle, title }) => (
              <li>
                <Typography variant="body2.600" color="secondary">
                  {title}:
                </Typography>
                <Typography
                  variant="body2.600"
                  sx={{ display: 'inline', marginLeft: 1 }}
                >
                  {subTitle}
                </Typography>
              </li>
            ))}
          </ul>
        </Stack>
      ))}
    </Stack>
  )
}
