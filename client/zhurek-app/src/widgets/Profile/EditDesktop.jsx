import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AddressList } from '../../features/AddressList/AddressList';
import { getUser } from '../../shared/api/getUser';
import api from '../../shared/helpers/axiosConfig';

export const EditDesktop = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [postalCode, setPostalCode] = useState({ label: '', value: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser();
        if (response.data && typeof response.data === 'object') {
          const userData = response.data;
          setUser(userData);

          // Заполнение значений формы
          setFullName(userData.fullName || '');
          setBirthDate(userData.birthDate || '');
          setGender(userData.gender || '');
          setWeight(userData.weight || 0);
          setHeight(userData.height || 0);
          setPostalCode({ label: userData.address || '', value: userData.address || '' });
        } else {
          console.error('Invalid response data:', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Функция для расчёта возраста
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    // Если месяц рождения ещё не наступил или наступил, но день меньше – уменьшаем возраст
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleSave = async () => {
    const requestBody = {
      fullName,
      birthDate,
      age: calculateAge(birthDate),
      gender,
      address: postalCode.label,
      weight: parseFloat(weight),
      height: parseFloat(height),
    };

    try {
      const response = await api.put(
        '/chat/user/edit',
        requestBody,
      );

      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Ошибка при сохранении данных:', error);
      alert('Не удалось сохранить данные.');
    }
  };

  if (!user) {
    return <div>Загрузка данных...</div>;
  }

  return (
    <div className="w-full p-8 space-y-6">
      <h2 className="text-2xl font-bold text-[#4F3422]">{t('settings.personalInfo')}</h2>

      <InputGroup
        label={t('signup.fio')}
        icon="👤"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      {/* Date of Birth */}
      <InputGroup
        label={t('form.birthDate')}
        icon="📅"
        value={birthDate}
        type="date"
        onChange={(e) => { setBirthDate(e.target.value) }}
      />

      {/* Gender */}
      <SelectGroup label={t('form.gender')} options={[t('form.female'), t('form.male')]} />

      {/* Location */}
      <AddressList
        label="Адрес"
        name="postalCode"
        onChange={newPostalCode => setPostalCode(newPostalCode)}
        value={postalCode}
      />

      {/* Weight Slider */}
      <div>
        <p className="text-sm font-semibold text-[#4F3422] mb-2">{t('form.weight')}</p>
        <input
          type="range"
          min="30"
          max="100"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full accent-[#B5C793]"
        />
        <div className="flex justify-between text-sm text-[#4F3422] mt-1">
          <span>30 кг</span>
          <span className='font-bold'>{weight} кг</span>
          <span>100 кг</span>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-[#4F3422] mb-2">{t('profile.height')}</p>
        <input
          type="range"
          min="150"
          max="180"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full accent-[#B5C793]"
        />
        <div className="flex justify-between text-sm text-[#4F3422] mt-1">
          <span>150 см</span>
          <span className='font-bold'>{height} см</span>
          <span>180 см</span>
        </div>
      </div>
      {/* Save Button */}
      <div className="pt-4">
        <button className="w-full bg-[#4F3422] text-white py-3 rounded-full font-semibold"
          onClick={handleSave}>
          {t('form.save')}
        </button>
      </div>
    </div>
  );
};

const InputGroup = ({ label, icon, value = '', type = 'text', onChange }) => (
  <div>
    <p className="text-sm font-semibold text-[#4F3422] mb-2">{label}</p>
    <div className="flex items-center bg-[#F5F2F0] px-4 py-3 rounded-xl">
      <span className="mr-2 text-[#4F3422]">{icon}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="bg-transparent outline-none w-full text-[#4F3422]"
      />
    </div>
  </div>
);

const SelectGroup = ({ label, options = [] }) => (
  <div>
    <p className="text-sm font-semibold text-[#4F3422] mb-2">{label}</p>
    <select className="w-full px-4 py-3 bg-[#F5F2F0] rounded-xl text-[#4F3422]">
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);
