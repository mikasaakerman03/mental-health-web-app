import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Add } from '@mui/icons-material';
import MeditationStats from '../../features/Meditation/MeditationScores';
import MeditationDonutChart from '../../features/Meditation/MeditationDonutChart';
import MeditationScoreList from '../../features/Meditation/MeditationScoreList';
import MeditationHistory from '../../features/Meditation/MeditationHistory';
import MeditationRecommendations from '../../features/Meditation/Recommendations';
import MeditationStepperModal from '../../features/Meditation/MeditationStepper';

export const MeditationMobile = () => {
  const { t } = useTranslation();
  const [isStepperOpen, setIsStepperOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-[#FAF7F4]">  {/* Container for vertical layout */}
      {/* 1. Header and Start Meditation Button */}
      <div className="flex flex-col h-[100vh]">
        <div className="h-[99vh] overflow-y-auto">
          <section className="p-4 mb-4">
            <h1 className="text-3xl text-center font-bold">
              {t('meditation')}
            </h1>
          </section>

          {/* 2. Statistics: Donut Chart + Score List */}
          <section className="p-4 mb-4">
            <div className="flex flex-col justify-center gap-y-5">  {/* Center the stats content */}
              <div className="mx-auto">
                <MeditationDonutChart />
              </div>
              <MeditationScoreList className="mt-4" />
            </div>
          </section>

          {/* 3. Recommendations Section */}
          <section className="p-4 mb-4">
            <MeditationRecommendations />
          </section>

          {/* 4. History Section */}
          <section className="p-4 mb-4">
            <MeditationHistory />
          </section>

          {/* 5. Additional Stats (former sidebar content) */}
          <section className="p-4 mb-4">
            <MeditationStats />
          </section>
        </div>
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-10">
          <button
            className="bg-[#91AD75] p-5 ring-8 animate-pulse ring-[#d4e2c7] font-bold rounded-full text-white"
            onClick={() => setIsStepperOpen(true)}
          >
            <Add />
          </button>
        </div>
      </div>
      {/* Modal: Meditation Stepper (opens when Start button is clicked) */}
      {isStepperOpen && (
        <MeditationStepperModal onClose={() => setIsStepperOpen(false)} />
      )}
    </div>
  );
};
