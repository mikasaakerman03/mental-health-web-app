import React from 'react';

import useIsMobile from '../../shared/helpers/useIsMobile';
import { AboutUsDesktop } from '../../widgets/AboutUs/AboutUsDesktop';
import { AboutUsMobile } from '../../widgets/AboutUs/AboutUsMobile';

export const AboutUsPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<AboutUsMobile />) : (<AboutUsDesktop />)
}
