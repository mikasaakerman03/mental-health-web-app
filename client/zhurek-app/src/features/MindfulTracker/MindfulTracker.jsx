import React from 'react';
import { MindfulHoursCard } from './MindfulHoursCard';
import { SleepQualityCard } from './SleepQuality';
import { MindfulJournalCard } from './Journal';

export const MindfulTracker = () => {
  return (
    <div className="flex flex-col gap-4 w-full p-4 bg-[#FAF7F4] rounded-2xl">
      <h2 className="text-xl font-bold text-[#5A3E2B] mb-2">Mindful Tracker</h2>

      <MindfulHoursCard />
      <SleepQualityCard />
      <MindfulJournalCard />
    </div>
  );
};
