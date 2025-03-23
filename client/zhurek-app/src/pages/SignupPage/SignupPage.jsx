import React from 'react'

import useIsMobile from '../../shared/helpers/useIsMobile';
import { SignUpDesktop } from '../../widgets/Signup/SignupDesktop';
import { SignupMobile } from '../../widgets/Signup/SignupMobile';

export const SignupPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<SignupMobile />) : (<SignUpDesktop />)
}
