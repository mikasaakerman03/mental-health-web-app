import React from 'react'
import locationIcon from '../../shared/assets/icons/location_green.svg';
import phoneIcon from '../../shared/assets/icons/mouth_green.svg';
import arrowDownIcon from '../../shared/assets/icons/arrowdown_white.svg';
import contactIllustration from '../../shared/assets/images/abs3.png';

export const ContactUsDesktop = () => {
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
            Let’s Get in Touch <br /> <span className="text-[#4F3422]">with Us.</span>
          </h1>
          <p className="text-[#777] text-lg w-1/3">
            Have questions or need assistance? We're here to help you out every step of the way!
          </p>

          <div className="flex gap-6 mt-4">
            <div className="flex items-start gap-2">
              <img src={locationIcon} alt="location" className="w-6 h-6 mt-1" />
              <div>
                <p className="font-bold text-[#4F3422] text-sm">Our Address</p>
                <p className="text-sm text-gray-600 leading-tight">Asklepios Tower<br />Makima Street 251</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <img src={phoneIcon} alt="phone" className="w-6 h-6 mt-1" />
              <div>
                <p className="font-bold text-[#4F3422] text-sm">Our Contact Info</p>
                <p className="text-sm text-gray-600">+123 456 789</p>
              </div>
            </div>
          </div>

          <button className="mt-6 flex items-center gap-2 bg-[#4F3422] text-white font-semibold px-5 py-3 rounded-full text-sm hover:opacity-90 transition">
            Or Fill The Form Below
            <img src={arrowDownIcon} alt="arrow down" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
