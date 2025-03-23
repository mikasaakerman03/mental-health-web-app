import React from 'react'
import useIsMobile from '../../shared/helpers/useIsMobile';
import { ContactUsDesktop } from '../../widgets/ContactUs/ContactUsDesktop';
import { ContactUsMobile } from '../../widgets/ContactUs/ContactUsMobile';

export const ContactUsPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<ContactUsMobile />) : (<ContactUsDesktop />)
}