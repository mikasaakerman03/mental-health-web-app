import React, { useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { Input } from '../../shared/ui/Input/Input';
import { Textarea } from '../../shared/ui/Textarea/Textarea';
import logoIcon from '../../shared/assets/images/logo_brown.png';

const OptionButton = ({ label, selected, onClick, color = 'bg-gray-100', className = '' }) => (
  <button
    onClick={onClick}
    className={clsx(
      'flex items-center gap-2 px-4 py-2 rounded-full font-medium text-lg transition-all border',
      selected ? `${color} border-transparent text-white` : 'bg-white border-gray-300 text-gray-700',
      className
    )}
  >
    {label}
  </button>
);

const Button = ({ children, onClick, disabled = false, variant = 'solid', className = '' }) => {
  const base = 'px-6 py-2 rounded-full font-semibold text-lg transition-all';
  const styles = {
    solid: 'bg-[#4F3422] text-white hover:bg-[#3e2717]',
    outline: 'border border-[#4F3422] text-[#4F3422] hover:bg-[#f5f5f5]'
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export const MentalHealthAssessmentMobile = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const totalSteps = 8;
  const [form, setForm] = useState({
    gender: 'female',
    genderNote: '',
    age: '',
    medication: '',
    medsList: '',
    happyThings: [],
    emotion: '',
    worry: '',
    rating: 0,
    freeText: '',
  });

  const toggleArrayItem = (arr, item) =>
    arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item];

  const nextStep = () => setStep((s) => Math.min(totalSteps, s + 1));
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const submitForm = async () => {
    try {
      await axios.post('/api/mental-health-assessment', form);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-full min-h-full bg-white py-10 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-[#4F3422] mb-6">{t('assessment.title')}</h2>
        <div className="flex items-center gap-2 mb-6">
          {[...Array(totalSteps)].map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${i + 1 <= step ? 'bg-[#4F3422] w-6' : 'bg-[#E1DAD3] w-3'}`} />
          ))}
          <span className="text-lg ml-2 text-[#4F3422] font-medium">{step}/{totalSteps} {t('assessment.steps')}</span>
        </div>

        <div className="space-y-6">
          {step === 1 && (
            <div className="p-6 rounded-2xl bg-[#F9F6F5] space-y-4">
              <p className="font-semibold">{t('assessment.gender')}</p>
              <div className="flex flex-wrap gap-2">
                <OptionButton label={t('assessment.male')} selected={form.gender === 'male'} onClick={() => setForm({ ...form, gender: 'male' })} />
                <OptionButton label={t('assessment.female')} selected={form.gender === 'female'} onClick={() => setForm({ ...form, gender: 'female' })} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-6 rounded-2xl bg-[#F9F6F5] space-y-4">
              <p className="font-semibold">{t('assessment.age')}</p>
              <Input value={form.genderNote} onChange={(e) => setForm({ ...form, genderNote: e.target.value })} />
            </div>
          )}

          {step === 3 && (
            <div className="p-6 rounded-2xl bg-[#F9F6F5] space-y-4">
              <p className="font-semibold">{t('assessment.medication')}</p>
              <div className="flex gap-2">
                <OptionButton label={t('assessment.yes')} selected={form.medication === 'yes'} onClick={() => setForm({ ...form, medication: 'yes' })} color="bg-[#B8D97C]" />
                <OptionButton label={t('assessment.no')} selected={form.medication === 'no'} onClick={() => setForm({ ...form, medication: 'no' })} />
              </div>
              {form.medication === 'yes' && (
                <Input value={form.medsList} onChange={(e) => setForm({ ...form, medsList: e.target.value })} />
              )}
            </div>
          )}

          {step === 4 && (
            <div className="p-6 rounded-2xl bg-[#F9F6F5] space-y-4">
              <p className="font-semibold">{t('assessment.happyThings')}</p>
              <div className="flex flex-wrap gap-2">
                {[t('assessment.friends'), t('assessment.jokes'), t('assessment.sport'), t('assessment.food'), t('assessment.family')].map(item => (
                  <OptionButton
                    key={item}
                    label={item[0].toUpperCase() + item.slice(1)}
                    selected={form.happyThings.includes(item)}
                    onClick={() => setForm({
                      ...form,
                      happyThings: toggleArrayItem(form.happyThings, item),
                    })}
                    color={form.happyThings.includes(item) ? 'bg-[#B8D97C]' : undefined} />
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="p-6 rounded-2xl bg-[#F9F6F5] space-y-4">
              <p className="font-semibold">{t('assessment.emotion')}</p>
              <div className="flex flex-wrap gap-2">
                {[t('assessment.sad'), t('assessment.ok'), t('assessment.neutral'), t('assessment.happy'), t('assessment.joy')].map(item => (
                  <OptionButton
                    key={item}
                    label={item[0].toUpperCase() + item.slice(1)}
                    selected={form.emotion === item}
                    onClick={() => setForm({ ...form, emotion: item })}
                    color={form.emotion === item && item === 'sad' ? 'bg-[#D87D4A]' : form.emotion === item ? 'bg-[#4F3422]' : undefined} />
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="p-6 rounded-2xl bg-[#F9F6F5] space-y-4">
              <p className="font-semibold">{t('assessment.worry')}</p>
              <div className="flex flex-wrap gap-2">
                {[t('assessment.yes'), t('assessment.no'), t('assessment.maybe')].map(item => (
                  <OptionButton
                    key={item}
                    label={item[0].toUpperCase() + item.slice(1)}
                    selected={form.worry === item}
                    onClick={() => setForm({ ...form, worry: item })}
                    color={form.worry === item && item === 'maybe' ? 'bg-[#F0C859]' : form.worry === item ? 'bg-[#4F3422]' : undefined} />
                ))}
              </div>
            </div>
          )}

          {step === 7 && (
            <div className="p-6 rounded-2xl bg-[#F9F6F5] space-y-4">
              <p className="font-semibold">{t('assessment.rating')}</p>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                  <OptionButton
                    key={num}
                    label={num.toString()}
                    selected={form.rating === num}
                    onClick={() => setForm({ ...form, rating: num })}
                    color={form.rating === num ? 'bg-[#B8D97C]' : undefined} />
                ))}
              </div>
            </div>
          )}

          {step === 8 && (
            <div className="p-6 rounded-2xl bg-[#F9F6F5] space-y-4">
              <p className="font-semibold">{t('assessment.freeText')}</p>
              <p className="text-lg text-gray-500">{t('assessment.freeTextDesc')}</p>
              <Textarea value={form.freeText} onChange={(e) => setForm({ ...form, freeText: e.target.value })} />
            </div>
          )}

          <div className="flex justify-between pt-6">
            <Button variant="outline" onClick={prevStep} disabled={step === 1}>
              {t('assessment.back')}
            </Button>

            {step < totalSteps ? (
              <Button onClick={nextStep}>
                {t('assessment.next')} →
              </Button>
            ) : (
              <Button className="bg-[#4F3422] hover:bg-[#3e2717] text-white" onClick={submitForm}>
                {t('assessment.submit')} →
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="m-5">
        <div className="bg-[#9BB167] rounded-[40px] flex flex-col md:flex-row items-center justify-between text-white">
          <div className="space-y-4 py-8">
            <h2 className="text-[30px] font-bold leading-tight text-center">{t('assessment.scoreTitle')}</h2>
            <div className="flex flex-col gap-x-3 items-center">
              <div className="text-[25px] text-white/80">{t('assessment.scoreLabel')}</div>
              <div className=" text-white text-[25px] font-semibold">
                {t('assessment.scoreStatus')}
              </div>
            </div>
            <p className="text-white/90 text-lg mt-4 mx-5 text-center">
              {t('assessment.scoreDescription')}
            </p>
          </div>

          <div className="flex flex-col items-center w-1/2">
            <div className="bg-white text-[35px] text-[#4F3422] px-10 py-6 rounded-[1000px] shadow-md font-bold flex items-center gap-3">
              <img src={logoIcon} alt="" className="w-5 h-5" />
              78.2
            </div>
            <div className="flex flex-col gap-10 my-6 text-white text-center">
              <div>
                <div className="text-3xl font-bold">102</div>
                <div className="text-2xl">{t('assessment.scoreSuggestions')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold">84</div>
                <div className="text-2xl">{t('assessment.scoreImprovements')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold">32</div>
                <div className="text-2xl">{t('assessment.scoreTips')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
