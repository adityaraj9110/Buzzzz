import {
  AboutUsLayout,
  HelpSupportLayout,
  HomeLayout,
  ServiceLayout,
} from 'app/layout'
import { appPaths } from 'entities/config'
import {
  AboutUsPage,
  CabServicesPage,
  GroceryDeliveryPage,
  HelpSupportPage,
  HomePage,
  ServicesPage,
  TicketBookingPage,
} from 'pages/components'
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
        <Route path={appPaths.home} element={<HomePage />} />
      </Route>

      <Route element={<AboutUsLayout />}>
        <Route path={appPaths.about} element={<AboutUsPage />} />
      </Route>

      <Route element={<HelpSupportLayout />}>
        <Route path={appPaths.helpAndSupport} element={<HelpSupportPage />} />
      </Route>

      <Route element={<ServiceLayout />}>
        <Route path={appPaths.services} element={<ServicesPage />} />
        <Route path={appPaths.cabServices} element={<CabServicesPage />} />
        <Route
          path={appPaths.groceriesDelivery}
          element={<GroceryDeliveryPage />}
        />
        <Route
          path={appPaths.ticketBookingServices}
          element={<TicketBookingPage />}
        />
      </Route>

      <Route path="*" element={<h1>Page not found</h1>} />
      
    </Route>
  )
)

export default Router
