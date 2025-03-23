import React from 'react';
import { Outlet } from 'react-router-dom';

import { NavbarDesktop } from '../../shared/ui/Navbar/NavbarDesktop';
import { NavbarMobile } from '../../shared/ui/Navbar/NavbarMobile';
import useIsMobile from '../../shared/helpers/useIsMobile';

export const GuestLayout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col flex-auto w-full min-w-0">
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      <div className="flex flex-col flex-auto overflow-y-auto mt-[105px] w-full">
        <Outlet />
      </div>
    </div>
  )
}
