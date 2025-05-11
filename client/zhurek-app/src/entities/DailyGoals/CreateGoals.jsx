import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../../shared/helpers/axiosConfig';
import {
  Forum,
  Hotel,
  MenuBook,
  SelfImprovement,
  CheckCircle
} from '@mui/icons-material';

const categories = [
  { id: 'chatbot',    labelKey: 'chatbot',    icon: <Forum fontSize="medium" />,         unitKey: 'messages' },
  { id: 'sleep',      labelKey: 'sleep',      icon: <Hotel fontSize="medium" />,         unitKey: 'hours2' },
  { id: 'journal',    labelKey: 'journal',    icon: <MenuBook fontSize="medium" />,      unitKey: 'entries' },
  { id: 'meditation', labelKey: 'meditation', icon: <SelfImprovement fontSize="medium" />, unitKey: 'hours2' },
];

export function CustomDailyGoals() {
  const { t } = useTranslation();
  const today = new Date().toISOString().slice(0, 10);
  const [goalValues, setGoalValues] = useState(
    Object.fromEntries(categories.map(c => [c.id, '']))
  );
  const [created, setCreated] = useState({});

  const handleChange = (id, value) => {
    // разрешаем только цифры
    if (/^\d*$/.test(value)) {
      setGoalValues(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleCreate = async (cat) => {
    const val = goalValues[cat.id];
    if (!val) return;
    try {
      await api.post(
        '/chat/goals/create',
        {
          date: today,
          goalType: cat.id,
          goalValue: Number(val),
        }
      );
      setCreated(prev => ({ ...prev, [cat.id]: true }));
    } catch (err) {
      console.error('Ошибка создания цели:', err);
    }
  };

  return (
    <div className="w-full bg-[#FAF7F4] p-5 rounded-3xl shadow space-y-4">
      <h2 className="text-2xl font-bold text-[#4F3422]">{t('dailyGoals')}</h2>

      {categories.map(cat => (
        <div
          key={cat.id}
          className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#E5DED8] rounded-full flex items-center justify-center">
              {cat.icon}
            </div>
            <div>
              <p className="text-[#4F3422] font-semibold">{t(cat.labelKey)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={goalValues[cat.id]}
              onChange={e => handleChange(cat.id, e.target.value)}
              placeholder="0"
              className="w-16 p-1 border rounded text-center"
              disabled={created[cat.id]}
            />
            <span className="text-sm text-[#948B84]">
              {t(cat.unitKey)}
            </span>
            {created[cat.id] ? (
              <CheckCircle fontSize="large" className="text-green-500 ml-2" />
            ) : (
              <button
                onClick={() => handleCreate(cat)}
                className="ml-2 px-4 py-1 bg-[#4F3422] text-white rounded-full hover:opacity-90"
              >
                {t('setGoal')}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
