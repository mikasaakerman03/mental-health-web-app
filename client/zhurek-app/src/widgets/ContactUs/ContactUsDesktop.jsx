import React from 'react';
import { useTranslation } from 'react-i18next';

import locationIcon from '../../shared/assets/icons/location_green.svg';
import phoneIcon from '../../shared/assets/icons/mouth_green.svg';
import arrowDownIcon from '../../shared/assets/icons/arrowdown_white.svg';
import contactIllustration from '../../shared/assets/images/abs3.png';
import { Footer } from '../../shared/ui/Footer/Footer';
import { ColorfulMap } from '../../entities/Map/Map';

export const ContactUsDesktop = () => {
  const { t } = useTranslation();

  return (
    <div className='relative min-h-[100vh] w-full flex flex-col h-full overflow-hidden'>
      {/* Block 1 */}
      <div className="relative flex h-[70vh] flex-col md:flex-row items-center justify-between p-[100px]">
        <div >
          <img src={contactIllustration} alt="" className="absolute -top-3 -right-[1%] w-[700px] h-[700px] bg-[#E1E1E0] z-0" />
        </div>
        {/* Left Content */}
        <div className="w-full ml-[100px] space-y-16 relative z-10">
          <h1 className="text-[60px] md:text-5xl font-extrabold text-[#4F3422] leading-tight">
            {t('contact.title')} <br />
          </h1>
          <p className="text-[#777] text-lg w-1/3">
            {t('contact.subtitle')}
          </p>

          <div className="flex gap-6 mt-4">
            <div className="flex items-start gap-2">
              <img src={locationIcon} alt="location" className="w-6 h-6 mt-1" />
              <div>
                <p className="font-bold text-[#4F3422] text-sm">{t('contact.address')}</p>
                <p className="text-sm text-gray-600 leading-tight">{t('contact.addressText')}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <img src={phoneIcon} alt="phone" className="w-6 h-6 mt-1" />
              <div>
                <p className="font-bold text-[#4F3422] text-sm">{t('contact.phone')}</p>
                <p className="text-sm text-gray-600">+7 776 856 8556</p>
                <p className="text-sm text-gray-600">+7 776 920 0807</p>
              </div>
            </div>
          </div>

          <button className="mt-6 flex items-center gap-2 bg-[#4F3422] text-white font-semibold px-5 py-3 rounded-full text-sm hover:opacity-90 transition">
            {t('contact.formCta')}
            <img src={arrowDownIcon} alt="arrow down" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Block 2 */}
      <div className='mx-3 mt-[100px]'>
        <div className="w-full h-[70vh]">
          <ColorfulMap />
        </div>
      </div>

      {/* Block 3 */}
      <div className="w-[90%] mx-auto flex flex-row justify-between gap-x-12">
        <div className="ml-[100px] flex flex-col items-center h-full my-auto">
          <h2 className="text-3xl font-extrabold text-center mb-2">
            <span className="text-[#4F3422]">{t('contact.formTitle1')} </span>
            <span className="text-[#A4532C]">{t('contact.formTitle2')}</span> {t('contact.formTitle3')}
          </h2>
          <p className="text-center text-gray-500 mb-10">
            {t('contact.formNote')}
          </p>
        </div>

        {/* Форма */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[60%]">
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-[#4F3422]">{t('contact.fullName')}</label>
            <input type="text" placeholder={t('contact.fullName')} className="rounded-xl px-4 py-3 border border-green-300 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-[#4F3422]">{t('contact.jobPosition')}</label>
            <input type="text" placeholder={t('contact.jobPosition')} className="rounded-xl px-4 py-3 border border-gray-200 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-[#4F3422]">{t('contact.email')}</label>
            <input type="email" placeholder={t('contact.email')} className="rounded-xl px-4 py-3 border border-gray-200 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-[#4F3422]">{t('contact.phoneNumber')}</label>
            <input type="tel" placeholder={t('contact.phoneNumber')} className="rounded-xl px-4 py-3 border border-gray-200 focus:outline-none" />
          </div>

          <div className="flex flex-col col-span-1 md:col-span-2">
            <label className="text-sm font-semibold mb-1 text-[#4F3422]">{t('contact.message')}</label>
            <textarea placeholder={t('contact.messagePlaceholder')} maxLength={500} className="rounded-xl px-4 py-3 border border-gray-200 h-32 resize-none focus:outline-none" />
            <div className="text-right text-xs text-gray-400 mt-1">250/500</div>
          </div>

          <div className="col-span-2 text-red-500 text-sm flex items-center gap-2 bg-red-100 border border-red-300 px-4 py-2 rounded-xl">
            <span>⚠️</span> {t('contact.error')}
          </div>

          <div className="col-span-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" className="mr-2" /> {t('contact.agree')}
            </label>
            <button
              type="submit"
              className="bg-[#4F3422] text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#3d2719] transition flex items-center gap-2"
            >
              {t('contact.submit')}
            </button>
          </div>
        </form>

      </div>

      {/* Block 4 */}
      <div className="m-3">
        <div className="w-full bg-[#FFD54F] py-16 px-8 rounded-3xl mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 space-y-6">
              <button className="bg-white text-[#4F3422] font-semibold px-5 py-2 rounded-full text-sm shadow-md">
                {t('contact.getHealthy')}
              </button>
              <h2 className="text-5xl font-extrabold text-[#4F3422] leading-tight">
                {t('contact.getStarted')} <br />
                <span className="text-[#3D2B1F]">{t('contact.getFree')}</span>
              </h2>
              <p className="text-[#5B4B3D] text-lg max-w-md">
                {t('contact.getDescription')}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center relative">
              {/* Images вставишь позже */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}
