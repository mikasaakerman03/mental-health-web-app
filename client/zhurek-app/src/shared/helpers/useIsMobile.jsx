import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 1280); // Пороговое значение для 13" экрана - 1280px
    };

    checkMobile(); // Проверка при первой загрузке
    window.addEventListener('resize', checkMobile); // Отслеживаем изменение размера окна

    return () => window.removeEventListener('resize', checkMobile); // Очищаем слушатель
  }, []);

  return isMobile;
};

export default useIsMobile;
