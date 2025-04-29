import React from 'react';
import useIsMobile from '../../shared/helpers/useIsMobile';
import { JournalMobile } from '../../widgets/Journal/JournalMobile';
import { JournalDesktop } from '../../widgets/Journal/JournalDesktop';

export const JournalPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<JournalMobile />) : (<JournalDesktop />)
}
