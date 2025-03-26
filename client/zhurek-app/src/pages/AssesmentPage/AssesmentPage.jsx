import React from 'react';

import useIsMobile from '../../shared/helpers/useIsMobile';
import { AssesmentDesktop } from '../../widgets/Assesment/AssesmentDesktop';
import { AssesmentMobile } from '../../widgets/Assesment/AssesmentMobile';

export const AssesmentPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<AssesmentMobile />) : (<AssesmentDesktop />)
}
