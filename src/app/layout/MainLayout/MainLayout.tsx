import React, { PropsWithChildren } from 'react'
import { Footer, Navbar } from 'entities/component'

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
