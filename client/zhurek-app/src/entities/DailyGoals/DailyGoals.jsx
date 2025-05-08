import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, RadioButtonUnchecked, Forum, Hotel, MenuBook, SelfImprovement } from '@mui/icons-material'; // MUI иконки

const initialGoals = [
  { id: 1, type: 'chatbot', label: 'Chatbot Messages', goal: 20, current: 0, icon: <Forum fontSize="medium" /> },
  { id: 2, type: 'sleep', label: 'Sleep Hours', goal: 8, current: 0, icon: <Hotel fontSize="medium" /> },
  { id: 3, type: 'journal', label: 'Journal Entries', goal: 2, current: 0, icon: <MenuBook fontSize="medium" /> },
  { id: 4, type: 'meditation', label: 'Meditation Hours', goal: 1, current: 0, icon: <SelfImprovement fontSize="medium" /> },
];

export const DailyGoals = () => {
  const { t } = useTranslation();
  const [goals, setGoals] = useState(initialGoals);

  const toggleGoal = (goalId) => {
    setGoals(prevGoals =>
      prevGoals.map(goal =>
        goal.id === goalId
          ? { ...goal, current: goal.current >= goal.goal ? 0 : goal.goal }
          : goal
      )
    );
  };

  return (
    <div className="w-full bg-[#FAF7F4] p-5 rounded-3xl shadow space-y-4">
      <h2 className="text-2xl font-bold text-[#4F3422]">{t('dailyGoals')}</h2>

      {goals.map((goal) => (
        <div
          key={goal.id}
          className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm cursor-pointer"
          onClick={() => toggleGoal(goal.id)}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#E5DED8] rounded-full flex items-center justify-center">
              {goal.icon}
            </div>
            <div>
              <p className="text-[#4F3422] font-semibold">{t(goal.type)}</p>
              <p className="text-sm text-[#948B84]">
                {goal.current}/{goal.goal} {goal.type === 'sleep' || goal.type === 'meditation' ? t('hours2') : t('messages')}
              </p>
            </div>
          </div>
          {goal.current >= goal.goal ? (
            <CheckCircle fontSize="large" className="text-green-500" />
          ) : (
            <RadioButtonUnchecked fontSize="large" className="text-gray-400" />
          )}
        </div>
      ))}
    </div>
  );
};
