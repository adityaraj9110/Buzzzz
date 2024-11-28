import React, { useMemo, useState } from 'react'
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { AppPathsName, appPaths } from 'entities/config'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
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
      { label: 'Cab Service', value: 'cabServices' },
      { label: 'Ticket Service', value: 'bikeServices' },
      { label: 'Grocery Service', value: 'bikeServices' },
    ],
  },
  { label: 'Help & Support', value: 'helpAndSupport' },
]

export const Navbar = () => {
  const location = useLocation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const currentMenuItem = useMemo(() => {
    return (
      menuItem.find((item) =>
        location.pathname.split('/')[1].includes(item.value)
      ) || menuItem[0]
    )
  }, [location, menuItem])

  const handleMenuClose = () => {
    setMenuOpen(false)
    setAnchorEl(null)
  }

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setMenuOpen(true)
  }
  const handleNavigateToComingSoon = () => {
    handleMenuClose()
    navigate(appPaths['/'])
    setTimeout(() => {
      const comingSoonElement = document.getElementById('comingSoon')
      if (comingSoonElement) {
        comingSoonElement.scrollIntoView({ behavior: 'smooth' })
      }
    }, 0)
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
              {' '}
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
                  <IconButton
                    onClick={handleMenuOpen}
                    onMouseEnter={handleMenuOpen}
                  >
                    <ExpandMoreIcon
                      sx={{
                        color: 'neutral.white',
                        ['&:hover']: { color: 'neutral.white !important' },
                      }}
                    />
                  </IconButton>
                )}
              </NavLink>
              {hasSubMenu && (
                <Menu
                  anchorEl={anchorEl}
                  open={menuOpen}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    onMouseLeave: handleMenuClose,
                    onMouseEnter: () => setMenuOpen(true),
                  }}
                >
                  {subMenu?.map((subItem) => (
                    <MenuItem
                      key={subItem.value}
                      onClick={() => handleNavigateToComingSoon()}
                    >
                      <Box key={value}>
                        <Typography
                          variant="body1.700"
                          color={isSelected ? 'primary.main' : 'neutral.black'}
                          component={'p'}
                        >
                          {subItem.label}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Menu>
              )}
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
