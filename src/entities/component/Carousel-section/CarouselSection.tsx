import React from 'react'
import { Stack, useTheme } from '@mui/material'
import { Box, Card, CardContent, Typography } from '@mui/material'

import { publicImages } from 'shared/config'
import ReactStars from 'react-stars'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { useScreenSize } from 'shared/hooks'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'

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
    text: 'As a driver, ',
    rating: 4.2,
    joined: '2024',
  },
]

export const Carousel = () => {
  const { palette } = useTheme()
  const { smallScreen, screen } = useScreenSize()
  console.log(smallScreen, screen, 'this')

  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
        ['& .swiper-button-next']: {
          color: palette.primary.main + '!important',
          fontSize: '1rem !important',
        },
        ['& .swiper-button-prev']: {
          color: palette.primary.main + '!important',
        },
        ['& .swiper-pagination-bullet-active']: {
          background: palette.primary.main + '!important',
        },
      }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={screen === 'xs' ? 1 : 3}
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isNext }) => {
              return (
                <Card
                  sx={{
                    textAlign: 'left',
                    p: 1,
                    minHeight: '285px',
                    maxWidth: '420px',
                    maxHeight: '285px',
                    display: 'flex',
                    gap: '40px',
                    background: isNext ? palette.action.hover : 'unset',
                    boxShadow: isNext
                      ? '0px 8px 16px rgba(0, 0, 0, 0.2)'
                      : 'unset',

                    transition: 'background 0.3s ease',
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
              )
            }}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
