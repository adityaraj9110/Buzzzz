import React, { useMemo } from 'react'
import { Button, Divider, Stack, TextField, Typography } from '@mui/material'
import { publicImages } from 'shared/config'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { AppPathsName, appPaths } from 'entities/config'
import { NavLink, useLocation } from 'react-router-dom'

type MenuItem = {
  label: string
  value: AppPathsName
}
const mainMenuItems: MenuItem[] = [
  { label: 'Home', value: '/' },
  { label: 'About Us', value: 'about' },
  { label: 'Contact Us', value: 'contact-us' },
  { label: 'Career', value: 'career' },
]
const secondaryMenuITems: MenuItem[] = [
  { label: 'Download App', value: 'download' },
  { label: 'Help & Support', value: 'helpAndSupport' },
  { label: 'Privacy Policy', value: 'privacy-policy' },
  { label: 'Terms of Services', value: 'terms-of-services' },
]

export const Footer = () => {
  const location = useLocation()
  const menuItem = [...mainMenuItems, ...secondaryMenuITems]

  const currentMenuItem = useMemo(() => {
    return (
      menuItem.find((item) =>
        location.pathname.split('/')[1].includes(item.value)
      ) || menuItem[0]
    )
  }, [location, menuItem])

  return (
    <Stack
      gap={'50px'}
      padding={'50px 70px 70px 70px'}
      sx={{
        backgroundColor: 'neutral.black',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        <img src={publicImages.buzLogo} alt="logo" />
        <Typography variant="h6.700" color="neutral.white">
          BuzzCabs
        </Typography>
      </div>

      <Stack gap={'20px'}>
        <Stack>
          <Typography variant="body3.500" color="neutral.white">
            Subscribe for Latest Updates
          </Typography>
          <Typography variant="body2" color="neutral.500">
            Join our community to recieve updates.
          </Typography>
        </Stack>
        <div style={{ display: 'flex', gap: '6px' }}>
          <TextField
            name="email"
            placeholder="Enter your email address"
            fullWidth={false}
            sx={{
              border: '130px',
              ['.MuiInputBase-root']: {
                borderRadius: '130px',
                color: 'neutral.500',
                background: '#191919',
                border: 'none !important',
              },
              ['& .MuiInputBase-root:focus']: {
                border: 'unset',
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: 'transparent',
                },
              },
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIcon fontSize="extraSmall" />}
            sx={{ borderRadius: '130px' }}
          >
            <Typography variant="body2.700">SUBSCRIBE</Typography>
          </Button>
        </div>
      </Stack>

      <Stack gap={'30px'}>
        {/* navigation links */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              minWidth: '350px',
              justifyContent: 'space-between',
            }}
          >
            <Stack>
              {mainMenuItems.map(({ label, value }, ind) => {
                const isSelected = currentMenuItem.value === value

                return (
                  <NavLink
                    key={value}
                    to={appPaths[value]}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      key={ind}
                      variant="body2"
                      color={isSelected ? 'primary.main' : 'neutral.white'}
                    >
                      {label}
                    </Typography>
                  </NavLink>
                )
              })}
            </Stack>
            <Stack>
              {secondaryMenuITems.map(({ label, value }, ind) => {
                const isSelected = currentMenuItem.value === value
                return (
                  <NavLink
                    key={value}
                    to={appPaths[value]}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      key={ind}
                      variant="body2"
                      color={isSelected ? 'primary.main' : 'neutral.white'}
                    >
                      {label}
                    </Typography>
                  </NavLink>
                )
              })}
            </Stack>
          </div>
        </div>

        {/* divider */}
        <Divider
          sx={{ backgroundColor: 'neutral.white', color: 'neutral.white' }}
        />
        <Typography variant="caption1" color="neutral.white">
          &copy; 2024 BuzzCabs. All Rights Reserved.
        </Typography>
      </Stack>
    </Stack>
  )
}
