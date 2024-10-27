import React, { Suspense } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { I18nProvider, RouterProvider } from './providers'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => {
  return (
    <I18nProvider>
      {/* FIXME: Add theme provider  */}
      {/* <ThemeProvider> */}
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <RouterProvider />
        </Suspense>
      </QueryClientProvider>
      {/* </ThemeProvider> */}
    </I18nProvider>
  )
}

export default App
