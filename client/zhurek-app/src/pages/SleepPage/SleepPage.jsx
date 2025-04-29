import React from 'react'
import useIsMobile from '../../shared/helpers/useIsMobile';
import { SleepMobile } from '../../widgets/Sleep/SleepMobile';
import { SleepDesktop } from '../../widgets/Sleep/SleepDesktop';

export const SleepPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<SleepMobile />) : (<SleepDesktop />)
}
