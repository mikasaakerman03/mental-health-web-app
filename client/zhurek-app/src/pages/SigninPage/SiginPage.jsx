import React from 'react'

import useIsMobile from '../../shared/helpers/useIsMobile';
import { SignInDesktop } from '../../widgets/Signin/SigInDesktop2';
import { SignInMobile } from '../../widgets/Signin/SiginMobile';

export const SigninPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<SignInMobile />) : (<SignInDesktop />)
}
