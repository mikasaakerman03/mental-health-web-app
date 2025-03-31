import React from 'react'
import { useTranslation } from 'react-i18next';

import abstractCircle from '../../shared/assets/images/abstract_circle.png';
import avatar from '../../shared/assets/images/avatar.jpg';
import supportIcon from '../../shared/assets/icons/messages_white.svg';
import motivationIcon from '../../shared/assets/icons/head_heart_white.svg';
import mindfulIcon from '../../shared/assets/icons/bag_white.svg';
import img1 from "../../shared/assets/images/img1.png";
import img2 from "../../shared/assets/images/img2.png";
import img3 from "../../shared/assets/images/img3.png";
import img4 from "../../shared/assets/images/img4.png";
import img5 from "../../shared/assets/images/img5.png";
import img6 from "../../shared/assets/images/img6.png";
import { WellnessCarousel } from '../../entities/WellnessCarousel/WellnessCarousel';
import { Footer } from '../../shared/ui/Footer/Footer';

export const AboutUsDesktop = () => {
  const { t, i18n } = useTranslation();

  const values = [
    { title: t('values.1.title'), description: t('values.1.text'), icon: img1 },
    { title: t('values.2.title'), description: t('values.2.text'), icon: img2 },
    { title: t('values.3.title'), description: t('values.3.text'), icon: img3 },
    { title: t('values.4.title'), description: t('values.4.text'), icon: img4 },
    { title: t('values.5.title'), description: t('values.5.text'), icon: img5 },
    { title: t('values.6.title'), description: t('values.6.text'), icon: img6 },
  ];

  return (
    <div className='relative min-h-[100vh] w-full flex flex-col h-full overflow-hidden'>
      {/* Block 1 */}
      <div className="relative flex h-[80vh] flex-col md:flex-row">
        <div>
          <img
            src={abstractCircle}
            alt=""
            className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] z-0 transform scale-y-[-1] brightness-[1] sepia-[0.2] saturate-[1.2] from-yellow-100 via-white to-transparent pointer-events-none"
          />
        </div>
        <div className="z-10 w-full h-full flex flex-col justify-between p-[100px]">
          <p className='self-start text-[80px] font-bold text-[#4F3422]'>{t('hero.intelligent')}</p>
          <p className='self-center text-[80px] font-bold text-[#4F3422]'>{i18n.language === 'kk' ? t('hero.mentalHealth') : t('hero.chatbot')}</p>
          <p className='self-end text-[80px] font-bold text-[#4F3422]'>{i18n.language === 'kk' ? t('hero.chatbot') : t('hero.mentalHealth')}</p>
        </div>
      </div>
      <div>
        <p className='text-gray-500 ml-5'>{t('hero.experience')}</p>
        <p className='text-gray-500 ml-5'>{t('hero.subtitle')}</p>
      </div>

      {/* Block 2 */}
      <div className="flex flex-row gap-x-[50px] justify-between items-center bg-[#4F3422] text-white rounded-[40px] my-10 mx-5 px-10 py-14">
        {/* Left: Text + Features */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {t('benefits.title')} <span className="text-[#D6BBA2]">{t('benefits.accessible')}</span>
          </h2>

          <p className="text-sm uppercase text-white tracking-wider mt-6">{t('benefits.subtitle')}</p>

          <div className="space-y-4">
            {/* Feature 1 */}
            <div className="bg-[#7A4F36] flex items-center p-4 rounded-full gap-4 max-w-md">
              <img src={supportIcon} alt="support" className="w-6 h-6" />
              <div>
                <p className="font-semibold">{t('benefits.supportTitle')}</p>
                <p className="text-sm text-[#E5D3C0]">{t('benefits.supportText')}</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-[#7A4F36] flex items-center p-4 rounded-full gap-4 max-w-md">
              <img src={mindfulIcon} alt="motivation" className="w-6 h-6" />
              <div>
                <p className="font-semibold">{t('benefits.motivationTitle')}</p>
                <p className="text-sm text-[#E5D3C0]">{t('benefits.motivationText')}</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="bg-[#7A4F36] flex items-center p-4 rounded-full gap-4 max-w-md">
              <img src={motivationIcon} alt="mindful" className="w-6 h-6" />
              <div>
                <p className="font-semibold">{t('benefits.resourcesTitle')}</p>
                <p className="text-sm text-[#E5D3C0]">{t('benefits.resourcesText')}</p>
              </div>
            </div>
          </div>

          <button className="bg-[#B8D97C] hover:bg-[#A0C86A] text-[#4F3422] font-semibold px-6 py-3 rounded-full mt-6 w-fit">
            {t('benefits.register')}
          </button>
        </div>

        {/* Right: Avatar */}
        <div className="w-full h-full md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
          <img
            src={avatar}
            alt="Дана"
            className="rounded-[30px] w-full h-auto object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white text-[#4F3422] text-sm p-6 rounded-[30px] shadow-lg border-2 border-[#B8D97C]">
            <p className="mb-4 italic text-md leading-relaxed">“{t('signin.testimonial.text')}”</p>
            <div className="text-yellow-400 text-md mb-2 flex items-center gap-1">
              <span>★★★★★</span>
              <span className="text-xs text-[#4F3422]">Рейтинг</span>
            </div>
            <p className="font-semibold text-lg">{t('signin.testimonial.name')}</p>
            <p className="text-sm text-gray-500">{t('signin.testimonial.role')}</p>
          </div>
        </div>
      </div>

      {/* Block 3 */}
      <div className="m-5">
        <div className="bg-[#9BB167] py-16 px-6 md:px-20 rounded-[40px]">
          <div className="text-center mb-10">
            <p className="inline-block bg-white text-[#4F3422] px-4 py-1 rounded-full text-sm font-semibold">
              {t('values.label')}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">{t('values.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-[30px] p-6 flex flex-col items-start gap-4 shadow-sm">
                <img src={value.icon} alt={value.title} className="w-12 h-12" />
                <h3 className="text-[#4F3422] font-bold">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Block 4 */}
      <div className="w-full py-20 px-6 md:px-24 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-10">
          {/* Left: Text */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4F3422] leading-tight">
              {t('carousel.title')}
            </h2>
          </div>

          {/* Right: Description */}
          <div className="md:w-1/2 space-y-4">
            <span className="inline-block bg-[#F6A86E] text-white text-lg font-semibold px-4 py-1 rounded-full">
              {t('carousel.label')}
            </span>
            <p className="text-gray-600 text-xl">
              {t('carousel.text')}
            </p>
          </div>
        </div>

        {/* Image Carousel */}
        <WellnessCarousel />
      </div>

      <Footer />

    </div>
  )
}

