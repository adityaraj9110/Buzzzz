import {
  AboutUsLayout,
  CareerLayout,
  HelpSupportLayout,
  HomeLayout,
  ServiceLayout,
} from 'app/layout'
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
      <Route element={<HomeLayout />}>
        <Route path={appPaths['/']} element={<HomePage />} />
      </Route>

      <Route element={<AboutUsLayout />}>
        <Route path={appPaths.about} element={<AboutUsPage />} />
      </Route>

      <Route element={<HelpSupportLayout />}>
        <Route path={appPaths.helpAndSupport} element={<HelpSupportPage />} />
      </Route>

      <Route element={<CareerLayout />}>
        <Route path={appPaths.career} element={<CareerPage />} />
      </Route>

      <Route element={<ServiceLayout />}>
        <Route path={appPaths.services} element={<ServicesPage />} />
        <Route path={appPaths.cabServices} element={<CabServicesPage />} />
        <Route
          path={appPaths.ticketBookingServices}
          element={<TicketBookingServicesPage />}
        />
      </Route>

      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>
  )
)

export default Router
