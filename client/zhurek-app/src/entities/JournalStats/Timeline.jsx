import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Typography, Paper, Box } from '@mui/material';
import clockIcon from '../../shared/assets/icons/clock_white.svg';
import emo1 from '../../shared/assets/icons/1emo_white.svg';
import emo2 from '../../shared/assets/icons/2emo_white.svg';
import emo3 from '../../shared/assets/icons/3emo_white.svg';
import emo4 from '../../shared/assets/icons/4emo_white.svg';
import emo5 from '../../shared/assets/icons/5emo_white.svg';

const emojiIcons = [emo1, emo2, emo3, emo4, emo5];

export const TimelineComponent = ({ selectedDate, entries, setEntries }) => {
  const { t } = useTranslation();

  const emotionColors = {
    1: '#FDE1CE',
    2: '#FDE1CE',
    3: '#EFECE9',
    4: '#FFF0C7',
    5: '#C6E5B1',
  };

  return (
    <Box sx={{ bgcolor: '#FAF7F4', p: 4, borderRadius: 4, width: '100%' }}>
      <Typography variant="h6" fontWeight="bold" color="#4F3422" mb={3}>
        {t('timeline')}
      </Typography>
      {
        entries.length === 0 ? (
          <Typography color="#948B84">{t('journalForm.noEntries')}</Typography>
        ) :
          <Timeline sx={{ width: '100%', p: 0, m: 0 }}>
            {entries.map((entry, idx) => (
              <TimelineItem key={entry.id} sx={{ minHeight: 'auto', '&::before': { display: 'none' } }}>
                <TimelineSeparator>
                  <TimelineDot sx={{ fontSize: '20px', color: '#FFF', fontWeight: 'bold', padding: '5px', borderRadius: '12px', backgroundColor: '#4F3422', maxWidth: 'content', flex: 'block', justifyItems: 'center', alignItems: 'center' }}>
                    <Typography sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <img src={clockIcon} alt="clock" />
                      {entry.time}
                    </Typography>
                  </TimelineDot>
                  {idx !== entries.length - 1 && <TimelineConnector sx={{ bgcolor: '#E8E3DF' }} />}
                </TimelineSeparator>
                <TimelineContent sx={{ pl: 5 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      borderRadius: 4,
                      backgroundColor: emotionColors[entry.emotionId] || '#FFF',
                    }}
                  >
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          backgroundColor: entry.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1rem',
                          color: 'white',
                        }}
                      >
                        <img src={emojiIcons[entry.emotionId - 1]} alt={`emo${entry.emotionId}`} width={20} height={20} />
                      </Box>
                      <Typography variant="caption" fontWeight="bold" color="#948B84">
                        {t('emotion')} {entry.emotionId}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle2" fontWeight="bold" color="#4F3422">
                      {entry.title}
                    </Typography>
                    <Typography variant="body2" color="#4F3422" mt={0.5}>
                      {entry.entry}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))
            }
          </Timeline>
      }
    </Box>
  );
};
