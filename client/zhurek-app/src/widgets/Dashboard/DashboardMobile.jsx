import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';

import { getUser } from '../../shared/api/getUser';
import { MentalWidgetsCarousel } from '../../features/MentalWidgets/MentalWidgets';
import { MindfulTracker } from '../../features/MindfulTracker/MindfulTracker';
import { ResourceCarousel } from '../../entities/ResourcesCard/ResourcesCarousel';

export const DashboardMobile = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState();
  // const navigate = useNavigate();

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
        console.error('Failed to fetch categories:', error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <div className='relative min-h-[100vh] p-3 w-full flex flex-col h-full overflow-hidden'>
      <div className="mt-3 mb-6">
        <p className='text-xl font-bold text-[#4F3422]'>
          {t('hello', { name: user?.fullName })}
        </p>
      </div>
      <div>
        <MentalWidgetsCarousel />
      </div>
      <div className="my-4">
        <MindfulTracker />
      </div>
      <div className="">
        <h2 className="text-xl font-bold text-[#5A3E2B] mb-2">Mindful Resources</h2>
        <ResourceCarousel />
      </div>
    </div>
  )
}
