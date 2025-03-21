import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '../../shared/ui/Navbar/Navbar';

export const GuestLayout = () => {
  return (
    <div className="flex flex-col flex-auto w-full min-w-0">
      <Navbar />
      <div className="flex flex-col flex-auto w-[70%] mx-auto overflow-y-auto mt-[105px]">
        <Outlet />
      </div>
    </div>
  )
}
