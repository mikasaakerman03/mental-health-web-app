import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CheckCircle,
  RadioButtonUnchecked,
  Forum,
  Hotel,
  MenuBook,
  SelfImprovement,
} from '@mui/icons-material';
import api from '../../shared/helpers/axiosConfig';

const goalIcons = {
  chatbot: <Forum fontSize="medium" />,
  sleep: <Hotel fontSize="medium" />,
  journal: <MenuBook fontSize="medium" />,
  meditation: <SelfImprovement fontSize="medium" />,
};

export const DailyGoals = () => {
  const { t } = useTranslation();
  const [goals, setGoals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];
        const res = await api.get('/chat/goals/daily', {
          params: { date: today },
        });
        const mapped = res.data.goals.map((g, index) => ({
          id: index + 1,
          type: g.goalType,
          label: t(g.goalType),
          goal: g.goalValue,
          current: g.done ? g.goalValue : 0,
          icon: goalIcons[g.goalType] || <RadioButtonUnchecked />,
        }));
        setGoals(mapped);
        setError(null);
      } catch (err) {
        if (err.response?.status === 404) {
          setError('Пожалуйста, поставьте цели на сегодня в Профиле');
        } else {
          setError('Произошла ошибка при загрузке целей');
        }
      }
    };
    fetchGoals();
  }, [t]);


  const toggleGoal = async (goalId) => {
    setGoals((prevGoals) => {
      return prevGoals.map((goal) => {
        if (goal.id === goalId) {
          const isNowDone = goal.current < goal.goal;
          const newCurrent = isNowDone ? goal.goal : 0;

          api.put('/chat/goals/update', {
            goalType: goal.type,
            newGoalValue: goal.goal,
            done: isNowDone,
          }).catch((err) => {
            console.error('Ошибка при переключении статуса цели:', err);
          });

          return { ...goal, current: newCurrent };
        }
        return goal;
      });
    });
  };

  return (
    <div className="w-full h-full bg-[#FAF7F4] p-5 rounded-3xl shadow space-y-4">
      <h2 className="text-2xl font-bold text-[#4F3422]">{t('dailyGoals')}</h2>

      {
        goals.length === 0 ? (
          <p className="text-red-500 text-sm" > {error}</p>
        ) : (goals.map((goal) => (
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
                <p className="text-[#4F3422] font-semibold">{goal.label}</p>
                <p className="text-sm text-[#948B84]">
                  {goal.current}/{goal.goal}{' '}
                  {goal.type === 'sleep' || goal.type === 'meditation'
                    ? t('hours2')
                    : t('messages')}
                </p>
              </div>
            </div>

            {goal.current >= goal.goal ? (
              <CheckCircle fontSize="large" className="text-green-500" />
            ) : (
              <RadioButtonUnchecked fontSize="large" className="text-gray-400" />
            )}
          </div>
        )))}
    </div>
  );
};
