import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainLayout } from '../MainLayout/MainLayout'

export const HelpSupportLayout = () => {
  return (
    <MainLayout>
      HelpSupportLayout
      <Outlet />
    </MainLayout>
  )
}
