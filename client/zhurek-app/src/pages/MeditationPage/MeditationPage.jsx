import React from 'react'
import useIsMobile from '../../shared/helpers/useIsMobile';
import { MeditationDesktop } from '../../widgets/Meditation/MeditationDesktop';
import { MeditationMobile } from '../../widgets/Meditation/MeditationMobile';

export const MeditationPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<MeditationMobile />) : (< MeditationDesktop />)
}
