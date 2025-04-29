import React from 'react';
import { Outlet } from 'react-router-dom';

import useIsMobile from '../../shared/helpers/useIsMobile';
import { Sidebar } from '../../shared/ui/Sidebar/Sidebar';
import { SidebarMobile } from '../../shared/ui/Sidebar/SidebarMobile';

export const UserLayout = () => {
  const isMobile = useIsMobile();

  return isMobile ?
    (
      <div className="flex flex-col flex-auto h-screen w-full min-w-0 p-3  bg-[#4F3422]">
        <div className="h-10 mb-3">
          <SidebarMobile />
        </div>
        <div className="flex flex-col flex-auto overflow-y-auto rounded-3xl bg-white w-full">
          <div className="bg-white rounded-3xl">
            <Outlet />
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-row flex-auto h-screen w-full min-w-0 bg-[#4F3422]">
        <div className="my-3 ml-3">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-auto overflow-y-auto m-3 rounded-3xl bg-white w-full">
          <Outlet />
        </div>
      </div>
    )
}
