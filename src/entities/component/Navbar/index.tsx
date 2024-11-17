import React, { useMemo, useState } from 'react'
import { Button, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { AppPathsName, appPaths } from 'entities/config'
import { NavLink, useLocation } from 'react-router-dom'
import { publicImages } from 'shared/config'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  MenuItemsWrapperStyled,
  NavbarWrapperStyled,
  StartViewWrapperStyled,
} from './styles.component'

type MenuItem = {
  label: string
  value: AppPathsName
  subMenu?: MenuItem[]
  logo?: boolean
}

const menuItem: MenuItem[] = [
  { label: 'Home', value: '/' },
  { label: 'About', value: 'about' },
  {
    label: 'Services',
    value: 'services',
    logo: true,

    subMenu: [
      { label: 'Car', value: 'cabServices' },
      { label: 'Bike', value: 'bikeServices' },
    ],
  },
  { label: 'Help & Support', value: 'helpAndSupport' },
]

export const Navbar = () => {
  const location = useLocation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const currentMenuItem = useMemo(() => {
    return (
      menuItem.find((item) =>
        location.pathname.split('/')[1].includes(item.value)
      ) || menuItem[0]
    )
  }, [location, menuItem])

  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <NavbarWrapperStyled>
      <StartViewWrapperStyled>
        <img src={publicImages.buzLogo} alt="brand-logo" />
        <Typography variant="h6.700" color="neutral.white">
          BuzzCabs
        </Typography>
      </StartViewWrapperStyled>

      <MenuItemsWrapperStyled>
        {menuItem.map(({ label, value, subMenu, logo }) => {
          const isSelected = currentMenuItem.value === value
          const hasSubMenu = Boolean(subMenu)
          return (
            <>
              <NavLink
                key={value}
                to={appPaths[value]}
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  variant="body1.700"
                  color={isSelected ? 'primary.main' : 'neutral.white'}
                >
                  {label}
                </Typography>
                {logo && (
                  <IconButton onClick={handleMenuOpen}>
                    <ExpandMoreIcon
                      sx={{
                        color: 'neutral.white',
                        ['&:hover']: { color: 'neutral.white !important' },
                      }}
                    />
                  </IconButton>
                )}
                {hasSubMenu && (
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      onMouseLeave: handleMenuClose,
                    }}
                  >
                    {subMenu?.map((subItem) => (
                      <MenuItem>
                        <NavLink
                          key={value}
                          to={appPaths[subItem.value]}
                          style={{ textDecoration: 'none' }}
                        >
                          <Typography
                            variant="body1.700"
                            color={
                              isSelected ? 'primary.main' : 'neutral.white'
                            }
                            component={'p'}
                          >
                            {subItem.label}
                          </Typography>
                        </NavLink>
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </NavLink>
            </>
          )
        })}
      </MenuItemsWrapperStyled>

      <div>
        <Button variant="contained">GET STARTED</Button>
      </div>
    </NavbarWrapperStyled>
  )
}
