import React from 'react';
import { useTranslation } from 'react-i18next';

import { ScrollArea } from '../../shared/ui/ScrollArea/ScrollArea';
import { Input } from '../../shared/ui/Input/Input';
import sendWhite from '../../shared/assets/icons/send_white.svg';
import question from '../../shared/assets/icons/question_brown.svg';
import dashboard from '../../shared/assets/icons/current_brown.svg';
import mouse from '../../shared/assets/icons/mouse_brown.svg';
import star from '../../shared/assets/icons/star_brown.svg';
import trash from '../../shared/assets/icons/trash_brown.svg';
import chats from '../../shared/assets/icons/2chats_brown.svg';
import chat2 from '../../shared/assets/images/chat2.svg';
import chat3 from '../../shared/assets/images/chat3.svg';
import chat4 from '../../shared/assets/images/chat4.svg';
import chat5 from '../../shared/assets/images/chat5.svg';
import chat6 from '../../shared/assets/images/chat6.svg';
import chat7 from '../../shared/assets/images/chat7.svg';

export const ChatbotDesktop = () => {
  const { t } = useTranslation();

  const topics = [
    { title: t('topics.mentalHealth'), icon: chat4, count: 8, active: true },
    { title: t('topics.stress'), icon: chat2, count: 7 },
    { title: t('topics.becomingHappy'), icon: chat3, count: '✔️' },
    { title: t('topics.notEnough'), icon: chat4, count: 2 },
    { title: t('topics.statusAnxiety'), icon: chat5, count: '✔️' },
    { title: t('topics.findingPurpose'), icon: chat6, count: 5 },
    { title: t('topics.alanWatts'), icon: chat7, count: '✔️' },
    { title: t('topics.bestMeditation'), icon: chat2, count: 2 },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden">

      {/* Chat Category */}
      <div className="w-[260px] bg-[#E8DDD9] flex flex-col justify-between">
        <div>
          <div className="text-2xl font-semibold mb-4 p-4">{t('sidebar.chats')}</div>
          <ul className="space-y-2 w-full text-sm text-[#4F3422]">
            <li className="w-full py-4 px-3 bg-[#FFEDD5] border-b-2 border-b-[#C0A091] font-semibold text-lg border-r-2 border-r-[#FB8728] flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-x-2">
                <img src={dashboard} alt="" />
                {t('sidebar.current')}
              </div>
              <div className="">(12)</div>
            </li>
            <li className="w-full py-4 px-3 font-semibold text-lg border-b-2 border-b-[#C0A091] flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-x-2">
                <img src={mouse} alt="" />
                {t('sidebar.bookmarks')}
              </div>
              <div className="">(25)</div>
            </li>
            <li className="w-full py-4 px-3 font-semibold text-lg border-b-2 border-b-[#C0A091] flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-x-2">
                <img src={star} alt="" />
                {t('sidebar.favorites')}
              </div>
              <div className="">(10)</div>
            </li>
            <li className="w-full py-4 px-3 font-semibold text-lg border-b-2 border-b-[#C0A091] flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-x-2">
                <img src={trash} alt="" />
                {t('sidebar.trash')}
              </div>
              <div className="">(1)</div>
            </li>
            <li className="w-full py-4 px-3 font-semibold text-lg border-b-2 border-b-[#C0A091] flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-x-2">
                <img src={question} alt="" />
                {t('sidebar.unassigned')}
              </div>
              <div className="">(1)</div>
            </li>
          </ul>
        </div>
      </div>

      {/* Topics Panel */}
      <div className="w-[300px] bg-[#F3EEE9] border-r border-gray-200 flex flex-col">
        <div className="flex justify-between items-center mb-4 p-4">
          <div className="flex flex-row gap-x-2">
            <img src={chats} alt="" className="" />
            <h2 className="text-2xl font-semibold text-[#4F3422]">{t('topics.title')}</h2>
          </div>
          <span className="text-[#4F3422] font-bold text-sm">24</span>
        </div>
        <div className="flex flex-col justify-between h-full">
          <ScrollArea className="">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`flex flex-row items-center justify-between py-4 px-3 border-b-2 border-b-[#E8DDD9] ${topic.active ? 'bg-[#E5EAD7] border-r-2 border-r-[#9BB167]' : 'bg-white'}`}
              >
                <div className="flex flex-row gap-x-3 items-center text-[#4F3422]">
                  <img src={topic.icon} alt={topic.title} className="w-8 h-8" />
                  <div className="font-semibold text-lg truncate w-[140px]">{topic.title}</div>
                </div>
              </div>
            ))}
          </ScrollArea>

          <button className="bg-[#91AD75] text-white m-4 py-5 rounded-[1000px] text-sm font-medium">
            + {t('topics.addNew')}
          </button>
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 bg-white p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-[#4F3422]">Zhurek AI</h1>
        </div>

        <ScrollArea className="flex-1 space-y-4 pr-2 flex flex-col">
          <div className="self-end bg-[#4F3422] text-white text-sm px-4 py-3 max-w-[70%] rounded-2xl rounded-br-sm shadow-md">
            {t('chat.msg1')}
          </div>

          <div className="self-start bg-[#F5F0EC] text-[#4F3422] text-sm px-4 py-3 max-w-[70%] rounded-2xl rounded-bl-sm shadow">
            {t('chat.msg2')}
          </div>

          <div className="self-end bg-[#4F3422] text-white text-sm px-4 py-3 max-w-[70%] rounded-2xl rounded-br-sm shadow-md">
            {t('chat.msg3')}
          </div>

          <div className="self-end bg-[#4F3422] text-white text-sm px-4 py-3 max-w-[70%] rounded-2xl rounded-br-sm shadow-md">
            {t('chat.msg4')}
            <div className="mt-2 flex flex-wrap gap-2">
              <div className="bg-white border text-xs px-3 py-1 rounded-full text-[#4F3422] shadow-sm">
                DANA_Medical.PDF
              </div>
              <div className="bg-white border text-xs px-3 py-1 rounded-full text-[#4F3422] shadow-sm">
                EKG.PDF
              </div>
            </div>
          </div>

          <div className="self-start bg-[#F5F0EC] text-[#4F3422] text-sm px-4 py-3 max-w-[70%] rounded-2xl rounded-bl-sm shadow">
            {t('chat.msg5')}
          </div>
        </ScrollArea>

        <div className="mt-4 flex items-center gap-2">
          <Input placeholder={t('chat.placeholder')} className="flex-1 bg-[#F3EEE9] text-[#4F3422] p-3 rounded-lg" />
          <button className="bg-[#91AD75] p-3 rounded-full">
            <img src={sendWhite} alt="send" />
          </button>
        </div>
      </div>

    </div>
  );
};
