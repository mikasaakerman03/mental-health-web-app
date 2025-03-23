import React from 'react'
import useIsMobile from '../../shared/helpers/useIsMobile';
import { LandingDesktop } from '../../widgets/LandingPage/LandingDesktop';
import { LandingMobile } from '../../widgets/LandingPage/LandingMobile';

export const LandingPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<LandingMobile />) : (<LandingDesktop />)
}
