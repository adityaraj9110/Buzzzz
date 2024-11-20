import { publicImages } from 'shared/config'
import { CardDataType } from 'shared/model'

export const whyChooseUseCardData: CardDataType[] = [
  {
    title: 'Instant Cab Booking',
    desc: 'No more waiting. With BuzzCabs, book your ride in seconds and get a cab right when you need it.',
    iconUrl: publicImages.clock,
  },
  {
    title: 'Real-Time Ride Tracking',
    desc: 'Stay informed at every step. Track your cab’s location in real-time, from pickup to drop-off.',
    iconUrl: publicImages.location,
  },
  {
    title: 'Affordable Fares',
    desc: 'We offer competitive, transparent pricing with no hidden fees and extra charge.',
    iconUrl: publicImages.rupees,
  },
  {
    title: 'Safety First',
    desc: 'Your safety is our top priority. All our drivers are professionally trained.',
    iconUrl: publicImages.safety,
  },
  {
    title: '24/7 Availability',
    desc: 'BuzzCabs is ready when you are. Whether it’s day or night, we ensure you never miss a ride.',
    iconUrl: publicImages['24HrsImage'],
  },
  {
    title: 'Multiple Ride Options',
    desc: 'Choose the ride that fits your needs. From standard cabs to premium services.',
    iconUrl: publicImages.bike,
  },
]
