import React from 'react';

import useIsMobile from '../../shared/helpers/useIsMobile';
import { ChatbotDesktop } from '../../widgets/Chatbot/ChatbotDesktop';
import { ChatbotMobile } from '../../widgets/Chatbot/ChatbotMobile';

export const ChatbotPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? (<ChatbotMobile />) : (<ChatbotDesktop />)
}
