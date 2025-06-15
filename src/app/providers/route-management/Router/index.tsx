import {
  AboutUsLayout,
  CareerLayout,
  HelpSupportLayout,
  HomeLayout,
  ServiceLayout,
} from 'app/layout'
import { MainLayout } from 'app/layout/MainLayout/MainLayout'
import { appPaths } from 'entities/config'
import { AboutUsPage } from 'pages/components/about-us/AboutUs'
import { CabServicesPage } from 'pages/components/cab-services/CabServices'
import { CareerPage } from 'pages/components/carrer'
import { HelpSupportPage } from 'pages/components/help-support/HelpSupport'
import { HomePage } from 'pages/components/home/Home'
import { ServicesPage } from 'pages/components/services/Services'
import { TicketBookingServicesPage } from 'pages/components/ticket-booking-services/TicketBookingServices'

import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Outlet />}>
      <Route element={<MainLayout />}>
        <Route path={appPaths['/']} element={<HomePage />} />

        <Route path={appPaths.about} element={<AboutUsPage />} />

        <Route path={appPaths.helpAndSupport} element={<HelpSupportPage />} />

        <Route path={appPaths.career} element={<CareerPage />} />

        <Route path={appPaths.services} element={<ServicesPage />} />
        <Route path={appPaths.cabServices} element={<CabServicesPage />} />
        <Route
          path={appPaths.ticketBookingServices}
          element={<TicketBookingServicesPage />}
        />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Route>
  )
)

export default Router
