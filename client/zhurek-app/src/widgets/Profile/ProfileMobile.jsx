import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import profilePic from '../../shared/assets/images/avatar.jpg';
import bgImage from '../../shared/assets/images/9621870.jpg';
import editIcon from '../../shared/assets/icons/edit_white.svg';
import { getUser } from '../../shared/api/getUser';
import { MentalWidgetsCarousel } from '../../features/MentalWidgets/MentalWidgets';

export const ProfileMobile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser();
        if (response.data && typeof response.data === 'object') {
          setUser(response.data);
        } else {
          console.error('response.data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="relative min-h-full w-full flex flex-col h-full overflow-hidden">
      {/* Шапка с фоном */}
      <div
        className="w-full h-[180px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Фото профиля */}
        <div className="absolute left-1/2 bottom-[-40px] transform -translate-x-1/2 w-[80px] h-[80px] rounded-full border-4 border-white overflow-hidden">
          <img src={profilePic} alt="profile" className="w-full h-full object-cover" />
        </div>

        {/* Иконка редактирования */}
        <div className="absolute right-4 top-4 w-8 h-8 rounded-full bg-[#4F3422] flex items-center justify-center cursor-pointer">
          <img src={editIcon} alt="edit" className="w-4 h-4" onClick={() => navigate('/profile/settings')} />
        </div>
      </div>

      {/* Информация о пользователе */}
      <div className="mt-14 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-[#4F3422]">{user?.fullName}</h2>
        <span className="mt-2 inline-block text-xs px-3 py-1 rounded-full border border-[#C0A091] text-[#4F3422]">
          {t('profile.membership')}
        </span>
      </div>

      {/* Статы */}
      <div className="flex justify-around w-full mt-6 text-center">
        <div>
          <p className="text-xs text-gray-500">{t('profile.age')}</p>
          <p className="text-lg font-bold text-[#4F3422]">{user?.age}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">{t('profile.weight')}</p>
          <p className="text-lg font-bold text-[#4F3422]">{user?.weight ?? 0} <span className="text-xs">кг</span></p>
        </div>
        <div>
          <p className="text-xs text-gray-500">{t('profile.height')}</p>
          <p className="text-lg font-bold text-[#4F3422]">{user?.height ?? 0} <span className="text-xs">см</span></p>
        </div>
      </div>

      {/* Карточки */}
      <div className='my-7'>
        <MentalWidgetsCarousel />
      </div>
    </div>
  );
};
