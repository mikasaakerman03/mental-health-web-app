import React from 'react'
import { useTranslation } from 'react-i18next';

import arrowRightIcon from "../../shared/assets/icons/arrowright_white.png";
import img1 from "../../shared/assets/images/img1.png";
import img2 from "../../shared/assets/images/img2.png";
import img3 from "../../shared/assets/images/img3.png";
import img4 from "../../shared/assets/images/img4.png";
import img5 from "../../shared/assets/images/img5.png";
import img6 from "../../shared/assets/images/img6.png";
import chatbotImg from "../../shared/assets/images/chatbot-screen.png";
import phoneImg from "../../shared/assets/images/laptop_mockup.png";
import { StatCard } from "../../shared/ui/StatCard/StatCard";
import { FeatureCard } from "../../shared/ui/FeatureCard/FeatureCard";
import { PartnersCarousel } from '../../entities/PartnersCarousel/PartnersCarousel';
import { Footer } from '../../shared/ui/Footer/Footer';


export const LandingPage = () => {
  const { t } = useTranslation();

  const features = [
    {
      image: img1,
      title: t('landing.feature1Title'),
      description: t('landing.feature1Desc'),
    },
    {
      image: img2,
      title: t('landing.feature2Title'),
      description: t('landing.feature2Desc'),
    },
    {
      image: img3,
      title: t('landing.feature3Title'),
      description: t('landing.feature3Desc'),
    },
    {
      image: img4,
      title: t('landing.feature4Title'),
      description: t('landing.feature4Desc'),
    },
    {
      image: img5,
      title: t('landing.feature5Title'),
      description: t('landing.feature5Desc'),
    },
    {
      image: img6,
      title: t('landing.feature6Title'),
      description: t('landing.feature6Desc'),
    },
  ];


  return (
    <div className='relative min-h-[100vh] w-full flex flex-col h-full font-bold overflow-hidden'>
      {/* Block 1 */}
      <div className='relative w-full h-[80vh] z-10 overflow-hidden'>
        <div className="absolute -top-3 -right-[45%] w-[1500px] h-[1500px] bg-[#E1E1E0] rounded-full opacity-30 z-0"></div>
        <div className="w-full p-[100px] relative z-10">
          <div className='flex flex-col w-[70%]'>
            <p className='text-[#736B66] p-3 rounded-3xl bg-[#F5F5F5] max-w-max'>
              {t('landing.missionTag')}
            </p>

            <div className="mt-6 flex flex-col gap-y-0 leading-tight">
              <p className='m-0 p-0 text-[55px] text-[#4F3422]'>{t('landing.title1')}</p>
              <p className='m-0 p-0 text-[55px] text-[#4F3422]'>{t('landing.title2')}</p>
              <p className='m-0 p-0 text-[55px] text-[#966A51]'>{t('landing.title3')}</p>
            </div>

            <p className='mt-5 w-[60%] text-[#736B66] font-medium text-[20px]'>{t('landing.promoText')}</p>

            <div className="flex mt-4 gap-4">
              {/* Кнопка "Get In Touch" */}
              <button className="flex items-center gap-2 bg-[#4F3422] text-white font-bold px-6 py-3 rounded-full text-lg transition-all duration-300 hover:opacity-80">
                {t('landing.tryDemo')}
                <img src={arrowRightIcon} alt="arrow right" className="w-5 h-5" />
              </button>

              {/* Кнопка "Download App" */}
              <button className="flex items-center gap-2 bg-[#F7F4F2] text-[#4F3422] font-bold px-6 py-3 rounded-full text-lg transition-all duration-300 hover:opacity-80">
                {t('landing.register')}
                <img src={arrowRightIcon} alt="download icon" className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Block 2 */}
      <div className='my-7 mx-3'>
        <PartnersCarousel />
      </div>

      {/* Block 3 */}
      <div className='bg-[#F7F4F2] m-3 rounded-3xl'>
        <div className="mx-auto w-full  p-[80px] flex flex-col">
          <div className="w-full">
            <p className='text-[#736B66] max-w-max mx-auto text-center p-3 rounded-3xl border border-[#736B66]'>{t('landing.singularPurpose')}</p>
            <p className='text-[#4F3422] w-2/3 mx-auto text-center py-10 text-5xl'>
              {t('landing.purposeTitle')}
            </p>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl justify-items-center">
              <StatCard value="100,000" highlight="+" label={t('landing.livesImpacted')} />
              <StatCard value="78.2" highlight="K" label={t('landing.aiModels')} />
              <StatCard value="550" highlight="M" label={t('landing.dataTrained')} />
              <StatCard value="99.8" highlight="%" label={t('landing.userSatisfaction')} />
            </div>

            <div className="mt-10 flex flex-row justify-between gap-4">
              <button className="flex items-center gap-2 px-6 py-3 border border-[#FB8728] text-[#FB8728] rounded-full text-xl bg-[#FFF5EE]">
                <span className="text-xl">⚠️</span> {t('landing.fakeStatsNote')}
              </button>

              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#4F3422] text-white font-semibold text-xl">
                {t('landing.seeAllStats')}
                <img src={arrowRightIcon} className="w-4 h-4" alt="arrow icon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Block 4 */}
      <div className="bg-[#9BB167] m-3 rounded-3xl">
        <div className="w-full p-[80px] flex flex-col">
          <p className='text-white max-w-max p-3 mb-7 rounded-3xl border border-white'>{t('landing.coreFeatures')}</p>
          <p className='text-white pb-10 text-5xl font-[800]'>{t('landing.featureTitle')}</p>
          <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="w-full">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Block 5 */}
      <div className="h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 p-[80px]">
        {/* Left content */}
        <div className="w-full md:w-1/2">
          <p className="text-[#736B66] max-w-max p-2 px-4 rounded-full border border-[#736B66] text-xl mb-8">
            {t('landing.mainBenefit1')}
          </p>
          <h2 className="text-[#4F3422] text-4xl font-extrabold mb-9">
            {t('landing.assessmentTitle')}
          </h2>
          <p className="text-[#736B66] text-lg mb-7 w-2/3">
            {t('landing.assessmentDesc1')}
          </p>
          <p className="text-[#736B66] text-lg mb-10 w-2/3">
            {t('landing.assessmentDesc2')}
          </p>

          <div className="flex gap-10 mt-4">
            <div>
              <p className="text-3xl text-[#4F3422] font-extrabold">99.5%</p>
              <p className="text-[#736B66] tracking-wide uppercase text-xl">Connect Rate</p>
            </div>
            <div>
              <p className="text-3xl text-[#4F3422] font-extrabold">25K*</p>
              <p className="text-[#736B66] tracking-wide uppercase text-xl">{t('landing.aiModels')}</p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          <div className="w-[650px] h-[650px] bg-[#4F3422] rounded-full absolute"></div>
          {/* <img src="/assets/images/assessment_mock.png" alt="Assessment" className="relative z-10 w-[320px] rounded-2xl shadow-lg" /> */}
        </div>
      </div>

      {/* Block 6 */}
      <div className="mt-10 h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12 p-[80px]">
        {/* Left image with orange circle */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          <div className="w-[650px] h-[650px] bg-[#FB8728] rounded-full absolute"></div>
          {/* <img src="/assets/images/selfcare_mock.png" alt="Self Care" className="relative z-10 w-[320px] rounded-2xl shadow-lg" /> */}
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2">
          <p className="text-[#736B66] max-w-max p-2 px-4 rounded-full border border-[#736B66] text-xl mb-8">
            {t('landing.mainBenefit2')}
          </p>
          <h2 className="text-[#4F3422] text-4xl font-extrabold mb-9">
            {t('landing.selfCareTitle')}
          </h2>
          <p className="text-[#736B66] text-lg mb-7 w-4/5">
            {t('landing.selfCareDesc1')}
          </p>
          <p className="text-[#736B66] text-lg mb-10 w-4/5">
            {t('landing.selfCareDesc2')}
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[#4F3422] font-semibold text-xl">
              ✅ <span className="font-[600]">{t('landing.selfCarePoint1')}</span>
            </li>
            <li className="flex items-center gap-2 text-[#4F3422] font-semibold text-xl">
              ✅ <span className="font-[600]">{t('landing.selfCarePoint2')}</span>
            </li>
            <li className="flex items-center gap-2 text-[#4F3422] font-semibold text-xl">
              ✅ <span className="font-[600]">{t('landing.selfCarePoint3')}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Block 7 */}
      <div className="mt-10 h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 p-[80px]">
        {/* Left content */}
        <div className="w-full md:w-1/2">
          <p className="text-[#736B66] max-w-max p-2 px-4 rounded-full border border-[#736B66] text-xl mb-8">
            {t('landing.mainBenefit3')}
          </p>
          <h2 className="text-[#4F3422] text-4xl font-extrabold mb-9">
            {t('landing.chatbotTitle')}
          </h2>
          <p className="text-[#736B66] text-lg mb-7 w-4/5">
            {t('landing.chatbotDesc1')}
          </p>
          <p className="text-[#736B66] text-lg mb-10 w-4/5">
            {t('landing.chatbotDesc2')}
          </p>

          {/* Статистика */}
          <div>
            <p className="text-3xl text-[#4F3422] font-extrabold">99.987%</p>
            <div className="w-[150px] h-[6px] bg-[#D9D9D9] mt-2 mb-1 rounded-full">
              <div className="h-full bg-[#4F3422] w-[95%] rounded-full"></div>
            </div>
            <p className="text-[#736B66] tracking-wide uppercase text-sm">{t('landing.aiAccuracy')}</p>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          <div className="w-[650px] h-[650px] bg-[#9BB167] rounded-full absolute"></div>
          {/* <img src="/assets/images/support_mock.png" alt="Support Chatbot" className="relative z-10 w-[320px] rounded-2xl shadow-lg" /> */}
        </div>
      </div>

      {/* Block 8 */}
      <div className="bg-[#F7F4F2] mt-10 m-3 rounded-3xl">
        <div className="w-full px-[80px] py-[100px]">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-[#4F3422] text-4xl font-extrabold mb-4" dangerouslySetInnerHTML={{ __html: t('landing.ctaTitle') }} />
            <p className="text-[#736B66] text-lg max-w-2xl mb-8">{t('landing.ctaText')}</p>
          </div>

          {/* Bottom image block */}
          <div className="w-full flex items-center justify-center mt-10">
            <img src={chatbotImg} alt="Chat Mock" className="rounded-2xl shadow-lg max-w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Block 9 */}
      <div className="bg-gradient-to-br from-[#A8C686] to-[#9BB167] m-3 rounded-3xl overflow-hidden relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between p-[60px] md:p-[80px] gap-16">

          {/* Image */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            <img
              src={phoneImg}
              alt="Phone mockup"
              className="w-[80%] max-w-[600px] rounded-2xl shadow-2xl"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-white relative z-10">
            <button className="border border-white px-4 py-2 rounded-full mb-6 text-sm hover:bg-white hover:text-[#4F3422] transition">
              {t('landing.downloadApp')}
            </button>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" dangerouslySetInnerHTML={{ __html: t('landing.appBlockTitle') }} />

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="flex items-center gap-2 bg-[#4F3422] text-white font-bold px-6 py-3 rounded-full text-lg hover:opacity-90">
                {t('landing.contact')}
                <img src={arrowRightIcon} alt="arrow right" className="w-5 h-5" />
              </button>

              <button className="flex items-center gap-2 bg-[#FB8728] text-white font-bold px-6 py-3 rounded-full text-lg hover:opacity-90">
                {t('landing.signUp')}
                <img src={arrowRightIcon} alt="arrow right" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
