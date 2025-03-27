import React from 'react';
import { useNavigate } from 'react-router-dom';

import logoIcon from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.jpg';
import bookIcon from '../../assets/icons/book_lightbrown.svg';
import dashboardIcon from '../../assets/icons/dashboard_lightbrown.svg';
import penIcon from '../../assets/icons/pen_lightbrown.svg';
import chatbotIcon from '../../assets/icons/chatbot_lightbrown.svg';
import brainIcon from '../../assets/icons/brain_lightbrown.svg';

export const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: dashboardIcon, link: 'dashboard' },
    { icon: chatbotIcon, link: '' },
    { icon: penIcon, link: '' },
    { icon: brainIcon, link: '' },
    { icon: bookIcon, link: '' }
  ];

  return (
    <div className='h-full w-[80px] border-2 border-[#a17354] rounded-[1000px]'>
      <div className='h-full w-full flex flex-col justify-between items-center p-3'>
        <div>
          <img src={logoIcon} alt="" />
        </div>

        <div className="flex flex-col gap-y-3 items-center justify-between">
          {menuItems.map((item, index) => (
            <div key={index} aria-hidden onClick={() => { navigate(item.link) }}>
              <img src={item.icon} alt={`menu-${index}`} className="w-10 h-10 p-2 hover:bg-[#c291715e] hover:rounded-full after:rounded-full cursor-pointer" />
            </div>
          ))}
        </div>

        <div>
          <img src={avatar} alt="" className="w-[60px] rounded-full border-2 border-white shadow-sm cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
