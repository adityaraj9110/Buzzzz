import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { publicImages } from 'shared/config'

export const ReversableSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '120px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <img src={publicImages.waitForCab} alt="wait for cab" />
      <div style={{ maxWidth: '830px', alignSelf: 'center' }}>
        <Stack spacing={'5px'}>
          <Typography variant="h6.700">On-Demand & Scheduled Rides</Typography>
          <Typography variant="body3.500">
            Need to get somewhere fast or plan ahead?
          </Typography>
        </Stack>

        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>
            <Typography variant="body1.700" color="secondary">
              INSTANT RIDES:
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: 'inline', marginLeft: 1 }}
            >
              Book a ride whenever you need it, and we'll get you there in no
              time.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1.700"
              color="secondary"
              sx={{ fontWeight: 'bold', display: 'inline' }}
            >
              RIDE SCHEDULING:
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: 'inline', marginLeft: 1 }}
            >
              Plan ahead by scheduling rides for important trips. Select your
              preferred vehicle, set the time, and leave the rest to us.
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  )
}
