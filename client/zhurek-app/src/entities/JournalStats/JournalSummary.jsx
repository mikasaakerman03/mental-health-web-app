import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../../shared/helpers/axiosConfig';
import { format } from 'date-fns';

export const JournalSummary = ({ selectedDate }) => {
  const { t, i18n } = useTranslation();
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const formattedDate = format(selectedDate, 'yyyy-MM-dd');
        const response = await api.get(`/chat/journal/summary?date=${formattedDate}`);
        setSummary(i18n.language === "ru" ? response.data.summaryRu : response.data.summaryKk);
      } catch (error) {
        console.error('Ошибка загрузки саммари:', error);
        setSummary('');
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [selectedDate, i18n.language]);

  return (
    <div className="w-full bg-[#FAF7F4] p-4 rounded-2xl shadow my-5">
      <h2 className="text-lg font-bold text-[#4F3422] mb-2">{t('aiSuggestions')}</h2>
      {loading ? (
        <div className="h-20 bg-gray-200 animate-pulse rounded-lg" />
      ) : summary ? (
        <p className="text-[#4F3422] text-sm">{summary}</p>
      ) : (
        <p className="text-gray-400 text-sm">{t('noSummaryAvailable')}</p>
      )}
    </div>
  );
};
