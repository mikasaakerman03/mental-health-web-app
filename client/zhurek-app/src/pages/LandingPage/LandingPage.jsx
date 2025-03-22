import React from 'react'
import arrowRightIcon from "../../shared/assets/icons/arrowright_white.png";
import { PartnersCarousel } from '../../entities/PartnersCarousel/PartnersCarousel';


export const LandingPage = () => {
  return (
    <div className='relative min-h-[100vh] w-full flex flex-col h-full font-bold overflow-hidden'>
      {/* Block 1 */}
      <div className='relative w-full h-[80vh] z-10 overflow-hidden'>
        <div className="absolute -top-3 -right-[45%] w-[1500px] h-[1500px] bg-[#E1E1E0] rounded-full opacity-30 z-0"></div>
        <div className="w-full p-[100px] relative z-10">
          <div className='flex flex-col w-[70%]'>
            <p className='text-[#736B66] p-3 rounded-3xl bg-[#F5F5F5] max-w-max'>
              Our Mission
            </p>

            <div className="mt-6 flex flex-col gap-y-0 leading-tight">
              <p className='m-0 p-0 text-[55px] text-[#4F3422]'>
                Empathic
              </p>
              <p className='m-0 p-0 text-[55px] text-[#4F3422]'>
                Mental Health
              </p>
              <p className='m-0 p-0 text-[55px] text-[#966A51]'>
                AI Companion
              </p>
            </div>

            <p className='mt-5 w-[60%] text-[#736B66] font-medium text-[20px]'>Step into a world of cutting-edge technology and compassionate care, tailored to your unique needs.</p>

            <div className="flex mt-4 gap-4">
              {/* Кнопка "Get In Touch" */}
              <button className="flex items-center gap-2 bg-[#4F3422] text-white font-bold px-6 py-3 rounded-full text-lg transition-all duration-300 hover:opacity-80">
                Try Demo
                <img src={arrowRightIcon} alt="arrow right" className="w-5 h-5" />
              </button>

              {/* Кнопка "Download App" */}
              <button className="flex items-center gap-2 bg-[#F7F4F2] text-[#4F3422] font-bold px-6 py-3 rounded-full text-lg transition-all duration-300 hover:opacity-80">
                Зарегистрироваться
                <img src={arrowRightIcon} alt="download icon" className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Block 2 */}
      <div className='my-7'>
        <PartnersCarousel />
      </div>

      {/* Block 3 */}
    </div>
  )
}
