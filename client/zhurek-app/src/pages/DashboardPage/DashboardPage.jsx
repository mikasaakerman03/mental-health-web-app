import React from 'react';
import { DashboardDesktop } from '../../widgets/Dashboard/DashboardDesktop';
import { DashboardMobile } from '../../widgets/Dashboard/DashboardMobile';
import useIsMobile from '../../shared/helpers/useIsMobile';

export const DashboardPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<DashboardMobile />) : (<DashboardDesktop />)
}
