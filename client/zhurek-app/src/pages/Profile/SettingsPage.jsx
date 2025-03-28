import React from 'react';

import useIsMobile from '../../shared/helpers/useIsMobile';
import { SettingsDesktop } from '../../widgets/Profile/SettingsDesktop';
import { SettingsMobile } from '../../widgets/Profile/SettingsMobile';

export const SettingsPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<SettingsMobile />) : (<SettingsDesktop />)
}
