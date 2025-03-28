import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import downIcon from '../../shared/assets/icons/down_brown.svg';

export const HelpDesktop = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5'),
    },
    {
      question: t('faq.q6'),
      answer: t('faq.a6'),
    },
    {
      question: t('faq.q7'),
      answer: t('faq.a7'),
    },
    {
      question: t('faq.q8'),
      answer: t('faq.a8'),
    },
  ];

  return (
    <div className="w-full mx-auto space-y-6 p-8">
      <h2 className="text-2xl font-bold text-[#4F3422]">{t('help.title')}</h2>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden border border-[#e0d9d3] transition-all duration-300 ${isOpen ? 'bg-[#4F3422] text-white' : 'bg-white text-[#4F3422]'
              }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center font-semibold text-base"
            >
              {faq.question}
              <img
                src={downIcon}
                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                  }`}
                alt=""
              />
            </button>
            {isOpen && faq.answer && (
              <div className="px-6 pb-5 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
