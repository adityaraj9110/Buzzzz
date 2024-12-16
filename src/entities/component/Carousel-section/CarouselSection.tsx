import React from 'react'
import Slider from 'react-slick'
import { Stack, styled, useTheme } from '@mui/material'
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Paper,
  Typography,
} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { publicImages } from 'shared/config'
import ReactStars from 'react-stars'
import { useScreenSize } from 'shared/hooks'

const testimonials = [
  {
    name: 'Vikram Singh',
    text: 'Driving with BuzzCabs has been a rewarding experience. The app makes it easy to find rides.',
    rating: 4.5,
    joined: '2024',
  },
  {
    name: 'Rajesh Kumar',
    text: "I've been with BuzzCabs for over a year now, and the flexibility it offers is perfect for my schedule. I get consistent rides and reliable earnings. They provide a lot of support.",
    rating: 4,
    joined: '2024',
  },
  {
    name: 'Sunita Mishra',
    text: 'As a driver, safety is my top priority, and BuzzCabs ensures that both drivers and passengers have a secure experience. The in-app navigation is also a big help!',
    rating: 4.2,
    joined: '2024',
  },
]

// Styled component for the slider container
const StyledSlider = styled(Slider)(({ theme }) => ({
  '.slick-track': {
    display: 'flex',
    alignItems: 'center',
  },
  '.slick-slide': {
    display: 'flex',
    justifyContent: 'center',
    outline: 'none',
  },
  '.slick-prev, .slick-next': {
    zIndex: 2,
    width: '30px',
    height: '30px',
    background: theme.palette.primary.main,
    color: '#fff',
    borderRadius: '50%',
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      background: theme.palette.sectionBackground,
    },
  },
  '.slick-prev': {
    left: '-40px',
  },
  '.slick-next': {
    right: '-40px',
  },
  '.slick-dots': {
    bottom: '-30px',
    '& li': {
      '& button:before': {
        fontSize: '10px',
        color: theme.palette.grey[500],
      },
    },
    '& .slick-active button:before': {
      color: theme.palette.primary.main,
    },
  },
}))

const ZoomedCard = styled(Paper)(({ theme }) => ({
  elevation: 2,
}))

const StyledArrow = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}))
const Arrow = ({
  direction,
  onClick,
}: {
  direction: string
  onClick?: () => void
}) => {
  const { smallScreen: smallscreen } = useScreenSize()

  return (
    <StyledArrow
      onClick={onClick}
      sx={{
        position: 'absolute',
        bottom: smallscreen ? '12px' : '0px',
        transform: 'translateY(-50%)',
        left: direction === 'prev' ? (smallscreen ? '38%' : '46%') : 'auto',
        right: direction === 'next' ? (smallscreen ? '38%' : '46%') : 'auto',
        zIndex: 1,
      }}
    >
      {direction === 'prev' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
    </StyledArrow>
  )
}

export const Carousel = () => {
  const [activeSlide, setActiveSlide] = React.useState(1)
  const { palette } = useTheme()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    beforeChange: (current: number, next: number) => {
      setActiveSlide((next + 1) % testimonials.length)
    },
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '300px',
        margin: '0 auto',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <StyledSlider {...settings}>
        {testimonials.map((item, index) => {
          const isActive = index === activeSlide
          return (
            <Box key={index} px={1}>
              <Card
                sx={{
                  textAlign: 'left',
                  p: 1,
                  minWidth: '100%',
                  minHeight: '285px',
                  maxWidth: '420px',
                  maxHeight: '285px',
                  display: 'flex',
                  gap: '40px',
                  background: isActive ? palette.action.hover : 'unset',
                  transition: 'background 0.3s ease',
                  boxShadow: isActive
                    ? '0px 8px 16px rgba(0, 0, 0, 0.2)'
                    : 'unset',
                }}
              >
                <CardContent>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                    }}
                  >
                    <img src={publicImages.avatar} alt="Avatar" />

                    <Stack>
                      <Typography variant="h6" fontWeight="bold">
                        {item.name}
                      </Typography>
                      <ReactStars
                        count={5}
                        size={15}
                        value={item.rating}
                        color2={palette.primary.main}
                        edit={false}
                      />
                    </Stack>
                  </div>

                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {item.text}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, fontStyle: 'italic', color: 'grey.600' }}
                  >
                    ~ Joined Since {item.joined}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          )
        })}
      </StyledSlider>
    </Box>
  )
}
