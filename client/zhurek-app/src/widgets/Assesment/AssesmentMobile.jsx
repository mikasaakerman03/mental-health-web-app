import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import appleIcon from "../../shared/assets/icons/apple_white.svg";
import sirenIcon from "../../shared/assets/icons/siren_white.svg";
import starIcon from "../../shared/assets/icons/star_white.svg";
import groupIcon from "../../shared/assets/icons/group_white.svg";
import lightbulbIcon from "../../shared/assets/icons/lightbulb_white.svg";
import chatsIcon from "../../shared/assets/icons/2chats_white.svg";
import arrowRightIcon from "../../shared/assets/icons/arrowright_white.png";
import phoneImg from "../../shared/assets/images/laptop_mockup.png";
import { Footer } from '../../shared/ui/Footer/Footer';
import { MentalHealthAssessmentMobile } from '../../features/MentalHealthAsessment/MentalHealthAsessmentMobile';

export const AssesmentMobile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const benefits = [
    {
      title: t('benefits.instantAccessibility.title'),
      description: t('benefits.instantAccessibility.desc'),
      icon: appleIcon,
    },
    {
      title: t('benefits.personalizedGuidance.title'),
      description: t('benefits.personalizedGuidance.desc'),
      icon: sirenIcon,
    },
    {
      title: t('benefits.conversationalInteraction.title'),
      description: t('benefits.conversationalInteraction.desc'),
      icon: starIcon,
    },
    {
      title: t('benefits.continuousLearning.title'),
      description: t('benefits.continuousLearning.desc'),
      icon: lightbulbIcon,
    },
    {
      title: t('benefits.proactiveHealthMonitoring.title'),
      description: t('benefits.proactiveHealthMonitoring.desc'),
      icon: groupIcon,
    },
    {
      title: t('benefits.empoweringSelfCare.title'),
      description: t('benefits.empoweringSelfCare.desc'),
      icon: chatsIcon,
    },
  ];

  return (
    <div className='relative min-h-[100vh] w-full flex flex-col h-full overflow-hidden'>
      {/* Block 1 */}
      <div className='relative w-full h-[50vh] z-10 overflow-hidden'>
        <div className="relative z-10 h-full text-center w-full flex items-center">
          <div className="w-full flex flex-col font-bold">
            <div className=" flex flex-col gap-y-0 leading-tight">
              <p className='m-0 p-0 text-[45px] text-[#4F3422]'>{t('assessment.title1')}</p>
              <p className='m-0 p-0 text-[45px] text-[#4F3422]'>{t('assessment.title2')}</p>
              <div className="relative inline-block">
                <svg
                  className="absolute -bottom-1 right-[1%] -translate-x-1/2 z-0"
                  width="220"
                  height="20"
                  viewBox="0 0 320 70"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5 40 C60 80, 260 80, 315 40 C317 30, 280 10, 250 15 C200 30, 120 20, 70 10 C40 5, 20 20, 5 40 Z"
                    fill="#966A51"
                    fillOpacity="0.25"
                  />
                </svg>
                <span className="relative z-10 text-[45px] font-extrabold text-[#ab7d5f]">
                  {t('assessment.title3')}
                </span>
              </div>
            </div>
            <p className='w-[85%] mx-auto mt-5 text-[#736B66] font-medium text-[20px]'>
              {t('assessment.subtitle1')}
            </p>
            <p className='w-[85%] mx-auto text-[#736B66] font-medium text-[20px]'>
              {t('assessment.subtitle2')}
            </p>
          </div>
        </div>
      </div>

      {/* Block 2 */}
      <MentalHealthAssessmentMobile />

      {/* Block 3 */}
      <div className="bg-[#F9F6F5] rounded-[40px] p-10 my-10 mx-5">
        <div className="text-center mb-10">
          <p className="inline-block bg-white text-[#4F3422] px-4 py-1 rounded-full text-sm font-semibold">
            {t('landing.benefitsLabel')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4F3422] mt-4">{t('landing.benefitsTitle')}</h2>
          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            {t('landing.benefitsSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-[30px] p-6 flex flex-col gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#4F3422] flex items-center justify-center">
                <img src={b.icon} alt={b.title} className="w-5 h-5" />
              </div>
              <h3 className="text-[#4F3422] font-bold">{b.title}</h3>
              <p className="text-gray-600 text-sm">{b.description}</p>
              <button className="text-[#9BB167] text-sm font-semibold flex items-center gap-2 mt-auto hover:underline"
                onClick={() => { navigate('/guest/sign-in') }}>
                {t('buttons.getInTouch')} →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Block 4 */}
      <div className="bg-[#FB8728] mx-5 mb-10 rounded-3xl overflow-hidden relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between p-[60px] md:p-[80px] gap-16">
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            <img
              src={phoneImg}
              alt="Phone mockup"
              className="w-[80%] max-w-[600px] rounded-2xl shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-white relative z-10">
            <button className="border border-white px-4 py-2 rounded-full mb-6 text-sm hover:bg-white hover:text-[#4F3422] transition">
              {t('landing.downloadApp')}
            </button>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" dangerouslySetInnerHTML={{ __html: t('landing.appBlockTitle') }} />
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="flex items-center gap-2 bg-[#4F3422] text-white font-bold px-6 py-3 rounded-full text-lg hover:opacity-90" onClick={() => navigate('/guest/sign-in')}>
                {t('buttons.getInTouch')}
                <img src={arrowRightIcon} alt="arrow right" className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 bg-[#9BB167] text-white font-bold px-6 py-3 rounded-full text-lg hover:opacity-90" onClick={() => navigate('/guest/sign-up')}>
                {t('landing.signUp')}
                <img src={arrowRightIcon} alt="arrow right" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
