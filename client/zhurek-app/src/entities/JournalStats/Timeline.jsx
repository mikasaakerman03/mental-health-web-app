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

const timelineData = [
  {
    time: '10:00',
    emotionId: 5,
    title: 'Бүгін көңілім өте жақсы!',
    description: 'Бүгін досыммен телефон арқылы сөйлесіп, қолдау алып, қуандым.',
    tagBg: '#C6E5B1',
  },
  {
    time: '09:30',
    emotionId: 4,
    title: 'Жігітім сыйлық берді!',
    description: 'Бүгін итіммен саябақта ойнап, нағыз қуаныш сезіндім.',
    tagBg: '#FFF0C7',
  },
  {
    time: '09:00',
    emotionId: 3,
    title: 'Бүгін біраз қобалжу болды.',
    description: 'Команда жиналысында аздап қобалжыдым, бірақ бәрі жақсы өтті.',
    tagBg: '#EFECE9',
  },
  {
    time: '08:00',
    emotionId: 2,
    title: 'Бүгін қайғы мен мұң сезіндім.',
    description: 'Жүректі ауыртатын жаңалық естіп, көңілім түсіп кетті.',
    tagBg: '#FDE1CE',
  },
];


export const TimelineComponent = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ bgcolor: '#FAF7F4', p: 4, borderRadius: 4, width: '100%' }}>
      <Typography variant="h6" fontWeight="bold" color="#4F3422" mb={3}>
        {t('timeline')}
      </Typography>
      <Timeline sx={{ width: '100%', p: 0, m: 0 }}>
        {timelineData.map((entry, idx) => (
          <TimelineItem key={idx} sx={{ minHeight: 'auto', '&::before': { display: 'none' } }}>
            <TimelineSeparator>
              <TimelineDot sx={{ fontSize: '20px', color: '#FFF', fontWeight: 'bold', padding: '5px', borderRadius: '12px', backgroundColor: '#4F3422', maxWidth: 'content', flex: 'block', justifyItems: 'center', alignItems: 'center' }}>
                <Typography sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={clockIcon} alt="clock" />
                  {entry.time}
                </Typography>
              </TimelineDot>
              {idx !== timelineData.length - 1 && <TimelineConnector sx={{ bgcolor: '#E8E3DF' }} />}
            </TimelineSeparator>
            <TimelineContent sx={{ pl: 5 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: 4,
                  backgroundColor: entry.tagBg,
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
                    <img src={emojiIcons[entry.emotionId - 1]} alt={`emo${entry.emotionId}`} width={16} height={16} />
                  </Box>
                  <Typography variant="caption" fontWeight="bold" color="#948B84">
                    {t('emotion')} {entry.emotionId}
                  </Typography>
                </Box>
                <Typography variant="subtitle2" fontWeight="bold" color="#4F3422">
                  {entry.title}
                </Typography>
                <Typography variant="body2" color="#4F3422" mt={0.5}>
                  {entry.description}
                </Typography>
                <Box display="flex" justifyContent="space-between" mt={1} color="#948B84" fontSize="0.75rem">
                  <span>{t('ai_suggestions')}</span>
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};
