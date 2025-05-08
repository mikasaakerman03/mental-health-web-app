import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Fade, Box, Typography, TextField, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import api from '../../shared/helpers/axiosConfig';

export const SleepModal = ({ open, setOpen }) => {
  const { t } = useTranslation();

  const today = new Date().toISOString().split('T')[0];

  const [sleepAtDate, setSleepAtDate] = useState(today);
  const [sleepAtTime, setSleepAtTime] = useState('23:00');
  const [wakeUpAtDate, setWakeUpAtDate] = useState(today);
  const [wakeUpAtTime, setWakeUpAtTime] = useState('06:00');

  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    const startTime = `${sleepAtDate} ${sleepAtTime}`;
    const endTime = `${wakeUpAtDate} ${wakeUpAtTime}`;

    try {
      const response = await api.post('chat/sleep/sleep-entry', { startTime, endTime });

      if (response.status === 201) {
        console.log('Сон сохранён:', response.data);
        setOpen(false); // закрываем модалку
      } else {
        console.error('Не удалось сохранить сон:', response.status);
      }
    } catch (error) {
      console.error('Ошибка при сохранении сна:', error);
    }
  };


  if (!open) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
        style: { backgroundColor: 'rgba(0,0,0,0.5)' }
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            borderRadius: 4,
            p: 4,
            width: 400,
            boxShadow: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          <Typography variant="h6" fontWeight="bold" color="#4F3422">
            {t('sleep_record')}
          </Typography>

          {/* Sleep At */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography fontSize="0.9rem" fontWeight="bold" color="#4F3422">
              {t('sleep_at')}
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box display="flex" alignItems="center" bgcolor="#FAF7F4" borderRadius="999px" p={1.5}>
                <CalendarTodayIcon sx={{ color: '#4F3422', mr: 1 }} />
                <TextField
                  type="date"
                  value={sleepAtDate}
                  onChange={(e) => setSleepAtDate(e.target.value)}
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  sx={{ flex: 1, color: '#4F3422' }}
                />
              </Box>
              <Box display="flex" alignItems="center" bgcolor="#FAF7F4" borderRadius="999px" p={1.5}>
                <AccessTimeIcon sx={{ color: '#4F3422', mr: 1 }} />
                <TextField
                  type="time"
                  value={sleepAtTime}
                  onChange={(e) => setSleepAtTime(e.target.value)}
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  sx={{ flex: 1, color: '#4F3422' }}
                />
              </Box>
            </Box>
          </Box>

          {/* Wake Up At */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography fontSize="0.9rem" fontWeight="bold" color="#4F3422">
              {t('wake_up_at')}
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box display="flex" alignItems="center" bgcolor="#FAF7F4" borderRadius="999px" p={1.5}>
                <CalendarTodayIcon sx={{ color: '#4F3422', mr: 1 }} />
                <TextField
                  type="date"
                  value={wakeUpAtDate}
                  onChange={(e) => setWakeUpAtDate(e.target.value)}
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  sx={{ flex: 1, color: '#4F3422' }}
                />
              </Box>
              <Box display="flex" alignItems="center" bgcolor="#FAF7F4" borderRadius="999px" p={1.5}>
                <AccessTimeIcon sx={{ color: '#4F3422', mr: 1 }} />
                <TextField
                  type="time"
                  value={wakeUpAtTime}
                  onChange={(e) => setWakeUpAtTime(e.target.value)}
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  sx={{ flex: 1, color: '#4F3422' }}
                />
              </Box>
            </Box>
          </Box>

          {/* Buttons */}
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button
              onClick={handleClose}
              sx={{ bgcolor: '#E5DED8', color: '#4F3422', borderRadius: 999 }}
            >
              {t('cancel')}
            </Button>
            <Button
              onClick={handleSave}
              sx={{ bgcolor: '#91AD75', color: 'white', borderRadius: 999 }}
            >
              {t('save')}
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
