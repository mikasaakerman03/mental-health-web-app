import React from 'react';
import useIsMobile from '../../shared/helpers/useIsMobile';
import { AddJournalMobile } from '../../widgets/Journal/AddJournalMobile';
import { AddJournalDesktop } from '../../widgets/Journal/AddJournalDesktop';

export const AddJournalPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<AddJournalMobile />) : (<AddJournalDesktop />)
}
