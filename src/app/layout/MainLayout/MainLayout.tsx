import React, { PropsWithChildren } from 'react'
import { Navbar } from 'entities/component'

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
