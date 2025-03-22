import React from 'react'
import arrowRightIcon from "../../shared/assets/icons/arrowright_white.png";
import img1 from "../../shared/assets/images/img1.png";
import img2 from "../../shared/assets/images/img2.png";
import img3 from "../../shared/assets/images/img3.png";
import img4 from "../../shared/assets/images/img4.png";
import img5 from "../../shared/assets/images/img5.png";
import img6 from "../../shared/assets/images/img6.png";
import { StatCard } from "../../shared/ui/StatCard/StatCard";
import { FeatureCard } from "../../shared/ui/FeatureCard/FeatureCard";
import { PartnersCarousel } from '../../entities/PartnersCarousel/PartnersCarousel';


export const LandingPage = () => {
  const features = [
    {
      image: img1,
      title: "Emotional Support",
      description:
        "Receive empathetic and compassionate guidance tailored to your unique mental health needs, helping you navigate challenges with confidence.",
    },
    {
      image: img2,
      title: "Personalized Insights",
      description:
        "Gain deep insights into your thoughts, emotions, and behaviors with our personalized AI-powered analysis.",
    },
    {
      image: img3,
      title: "Self-Discovery",
      description:
        "Unlock a deeper understanding of yourself through reflective exercises, empowering you to make positive changes and growth.",
    },
    {
      image: img4,
      title: "Cognitive Enhancement",
      description:
        "Receive empathetic and compassionate guidance tailored to your unique mental health needs, helping you navigate challenges with confidence.",
    },
    {
      image: img5,
      title: "24/7 Accessibility",
      description:
        "Access support anytime, anywhere, allowing you to address your mental well-being at your own pace and convenience.",
    },
    {
      image: img6,
      title: "Confidential and Secure",
      description:
        "Rest assured knowing that your privacy and data security are our top priorities, ensuring a safe space for your journey to healing.",
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
      <div className='my-7 mx-3'>
        <PartnersCarousel />
      </div>

      {/* Block 3 */}
      <div className='bg-[#F7F4F2] m-3 rounded-3xl'>
        <div className="mx-auto w-full  p-[80px] flex flex-col">
          <div className="w-full">
            <p className='text-[#736B66] max-w-max mx-auto text-center p-3 rounded-3xl border border-[#736B66]'>Our Singular Purpose</p>
            <p className='text-[#4F3422] w-2/3 mx-auto text-center py-10 text-5xl'>We design empathic <span className='text-[#966A51]'>AI Wellness</span> chatbot platform for everyone.</p>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl justify-items-center">
              <StatCard value="100,000" highlight="+" label="Lives Impacted" />
              <StatCard value="78.2" highlight="K" label="Advanced AI Models" />
              <StatCard value="550" highlight="M" label="Data LLMs Trained" />
              <StatCard value="99.8" highlight="%" label="User Satisfaction" />
            </div>

            <div className="mt-10 flex flex-row justify-between gap-4">
              <button className="flex items-center gap-2 px-6 py-3 border border-[#FB8728] text-[#FB8728] rounded-full text-sm bg-[#FFF5EE]">
                <span className="text-xl">⚠️</span> Where do we get the numbers? No idea.
              </button>

              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#4F3422] text-white font-semibold text-sm">
                See All Statistics
                <img src={arrowRightIcon} className="w-4 h-4" alt="arrow icon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Block 4 */}
      <div className="bg-[#9BB167] m-3 rounded-3xl">
        <div className="mx-auto w-full  p-[80px] flex flex-col">
          <p className='text-white max-w-max p-3 mb-7 rounded-3xl border border-white'>Our Core Features</p>
          <p className='text-white pb-10 text-5xl font-[800]'>Zhurek Features</p>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="w-full">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
