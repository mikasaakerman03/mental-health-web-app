import React from 'react';
import { Outlet } from 'react-router-dom';

import useIsMobile from '../../shared/helpers/useIsMobile';
import { Sidebar } from '../../shared/ui/Sidebar/Sidebar';
import { SidebarMobile } from '../../shared/ui/Sidebar/SidebarMobile';

export const UserLayout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-row flex-auto h-screen w-full min-w-0 bg-[#4F3422]">
      <div className="my-3 ml-3">
        {isMobile ? <SidebarMobile /> : <Sidebar />}
      </div>
      <div className="flex flex-col flex-auto overflow-y-auto m-3 rounded-3xl bg-white w-full">
        <Outlet />
      </div>
    </div>
  )
}
