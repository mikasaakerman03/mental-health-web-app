import React from 'react'

import useIsMobile from '../../shared/helpers/useIsMobile';
import { ProfileDesktop } from '../../widgets/Profile/ProfileDesktop';
import { ProfileMobile } from '../../widgets/Profile/ProfileMobile';

export const ProfilePage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<ProfileMobile />) : (<ProfileDesktop />)
}
