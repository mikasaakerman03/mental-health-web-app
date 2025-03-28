import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AddressList } from '../../features/AddressList/AddressList';

export const EditDesktop = () => {
  const { t } = useTranslation();
  const [weight, setWeight] = useState(55);
  const [height, setHeight] = useState(160);
  const [postalCode, setPostalCode] = useState({ label: '', value: '' });

  return (
    <div className="w-full p-8 space-y-6">
      <h2 className="text-2xl font-bold text-[#4F3422]">{t('settings.personalInfo')}</h2>

      {/* Password */}
      <InputGroup label={t('form.password')} icon="🔒" type="password" />

      {/* Date of Birth */}
      <InputGroup label={t('form.birthDate')} icon="📅" value="2005-06-24" type="date" />

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
        <button className="w-full bg-[#4F3422] text-white py-3 rounded-full font-semibold">
          {t('form.save')}
        </button>
      </div>
    </div>
  );
};

const InputGroup = ({ label, icon, value = '', type = 'text' }) => (
  <div>
    <p className="text-sm font-semibold text-[#4F3422] mb-2">{label}</p>
    <div className="flex items-center bg-[#F5F2F0] px-4 py-3 rounded-xl">
      <span className="mr-2 text-[#4F3422]">{icon}</span>
      <input
        type={type}
        defaultValue={value}
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
