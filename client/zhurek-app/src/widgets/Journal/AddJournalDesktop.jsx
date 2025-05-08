import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import api from '../../shared/helpers/axiosConfig';

import emo1 from '../../shared/assets/icons/1emo_white.svg';
import emo2 from '../../shared/assets/icons/2emo_white.svg';
import emo3 from '../../shared/assets/icons/3emo_white.svg';
import emo4 from '../../shared/assets/icons/4emo_white.svg';
import emo5 from '../../shared/assets/icons/5emo_white.svg';

export const AddJournalDesktop = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');
  const [stress, setStress] = useState(3);
  const [emotion, setEmotion] = useState(1);
  const [stressor, setStressor] = useState('');

  const emotions = [
    { id: 1, icon: emo1, bg: 'from-[#B79DF2] to-[#D5C4F8]' },
    { id: 2, icon: emo2, bg: 'from-[#F1895C] to-[#F7B28D]' },
    { id: 3, icon: emo3, bg: 'from-[#9C8876] to-[#C0B1A2]' },
    { id: 4, icon: emo4, bg: 'from-[#F9D77E] to-[#FFF3C2]' },
    { id: 5, icon: emo5, bg: 'from-[#A8C379] to-[#CFE6B3]' },
  ];

  const stressLevels = [
    { id: 1, label: 'Relaxed', color: '#A8C379' },
    { id: 2, label: 'Calm', color: '#C2CF75' },
    { id: 3, label: 'Okay', color: '#F9D77E' },
    { id: 4, label: 'Tense', color: '#F4A261' },
    { id: 5, label: 'Very Stressed', color: '#E76F51' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      entry,
      stressLevel: stress,
      emotionId: emotion,
      stressor,
    };

    try {
      const response = await api.post('/chat/journal/create-record', payload);
      if (response.status === 201) {
        navigate('/journal');
      } else {
        console.error('Ошибка при создании записи');
      }
      // Очистка формы
      setTitle('');
      setEntry('');
      setStress(3);
      setEmotion(1);
      setStressor('');
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className="w-[85vw]">
      <div className="w-full my-8 mx-6">
        <h2 className="text-4xl font-bold text-[#4F3422]">{t('journalPage.addRecord')}</h2>
      </div>
      <form
        className="w-full bg-[#FAF7F4] m-5 p-6 rounded-3xl flex flex-col gap-8 text-[#4F3422]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-2xl">{t('journalForm.journalTitle')}</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t('journalForm.placeholderTitle')}
            className="bg-white rounded-full px-6 py-4 text-xl font-medium outline-none border border-[#E2DDD9]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-2xl">{t('journalForm.writeEntry')}</span>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            rows={4}
            placeholder={t('journalForm.placeholderEntry')}
            className="bg-white rounded-3xl px-6 py-4 text-xl font-medium outline-none border border-[#D9D5D2]"
          />
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-semibold text-2xl">{t('journalForm.stressLevel')}</span>
          <input
            type="range"
            min={1}
            max={5}
            value={stress}
            onChange={(e) => setStress(Number(e.target.value))}
            className="accent-[#A8C379]"
          />
          <div className="flex justify-between text-sm font-semibold mt-2 text-[#4F3422]">
            {stressLevels.map((s) => (
              <div
                key={s.id}
                className="flex-1 text-center"
                style={{ color: stress === s.id ? s.color : '#4F3422' }}
              >
                {t(`journalForm.stressLevels.${s.id}`)}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-2xl">{t('journalForm.selectEmotion')}</span>
          <div className="flex gap-4">
            {emotions.map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() => setEmotion(e.id)}
                className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${e.bg} ${emotion === e.id ? 'ring-2 ring-[#4F3422]' : ''}`}
              >
                <img src={e.icon} alt={`emo${e.id}`} className="w-10 h-10" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-3">
          <span className="font-semibold text-2xl">{t('journalForm.selectStressor')}</span>
          <input
            type="text"
            value={stressor}
            onChange={(e) => setStressor(e.target.value)}
            placeholder={t('journalForm.stressor')}
            className="bg-white rounded-full px-6 py-4 text-xl font-medium outline-none border border-[#E2DDD9]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#4F3422] text-white py-4 rounded-full text-2xl font-semibold flex justify-center items-center gap-2"
        >
          {t('journalForm.createJournal')} +
        </button>
      </form>
    </div>
  );
};
