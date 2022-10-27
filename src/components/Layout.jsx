import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <main className="font-[Quicksand] bg-teal-100 min-h-screen">
      <Header />
      <Outlet />
    </main>
  );
}

export default Layout