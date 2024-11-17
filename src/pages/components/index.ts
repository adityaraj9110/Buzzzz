import { lazy } from 'react'

// TODO: Use this when you want to lazy load all the components
export const HomePage = lazy(async () => {
  const { HomePage } = await import('./home/Home')
  return { default: HomePage }
})

export const AboutUsPage = lazy(async () => {
  const { AboutUsPage } = await import('./about-us/AboutUs')
  return { default: AboutUsPage }
})

export const HelpSupportPage = lazy(async () => {
  const { HelpSupportPage } = await import('./help-support/HelpSupport')
  return { default: HelpSupportPage }
})

export const ServicesPage = lazy(async () => {
  const { ServicesPage } = await import('./services/Services')
  return { default: ServicesPage }
})

export const CabServicesPage = lazy(async () => {
  const { CabServicesPage } = await import('./cab-services/CabServices')
  return { default: CabServicesPage }
})

export const TicketBookingPage = lazy(async () => {
  const { TicketBookingServicesPage } = await import(
    './ticket-booking-services/TicketBookingServices'
  )
  return { default: TicketBookingServicesPage }
})

export const GroceryDeliveryPage = lazy(async () => {
  const { GroceriesDeliveryServicesPage } = await import(
    './grocery-delivery-services/GroceriesDeliveryServices'
  )
  return { default: GroceriesDeliveryServicesPage }
})
