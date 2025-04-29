import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { getCategories, getTopics, getTopicHistory, postSendMessage, deleteTopic } from './apis';
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
import trashIcon from '../../shared/assets/icons/trash_brown.svg';
import './styles.css';
import AddTopicModal from './AddTopic';

const chatImages = [chat2, chat3, chat4, chat5, chat6, chat7];

export const ChatbotMobile = () => {
  const { t, i18n } = useTranslation();
  const messagesEndRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [addTopic, setAddTopic] = useState(false);
  const [currentPanel, setCurrentPanel] = useState('categories');

  const categoryIcons = {
    1: dashboard,
    2: mouse,
    3: star,
    4: trash,
    5: question,
  };

  const fetchCategories = useCallback(async () => {
    try {
      const response = await getCategories();
      if (Array.isArray(response.data)) {
        setCategories(response.data);
        if (!response.data.some(category => category.id === selectedCategory)) {
          setSelectedCategory(response.data[0]?.id || null);
        }
      } else {
        console.error('response.data is not an array:', response.data);
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    if (selectedCategory) {
      const fetchTopics = async () => {
        try {
          const response = await getTopics(selectedCategory);
          if (Array.isArray(response.data)) {
            const topicsWithImages = response.data.map(topic => ({
              ...topic,
              icon: chatImages[Math.floor(Math.random() * chatImages.length)]
            }));
            setTopics(topicsWithImages);
            setSelectedTopic(response.data[0]?.id || null);
          } else {
            console.error('response.data is not an array:', response.data);
          }
        } catch (error) {
          console.error('Failed to fetch topics:', error);
        }
      };
      fetchTopics();
    }
  }, [selectedCategory]);

  const fetchTopicHistory = useCallback(async () => {
    try {
      const response = await getTopicHistory(selectedTopic);
      if (Array.isArray(response.data)) {
        setMessages(response.data);
      } else {
        console.error('response.data is not an array:', response.data);
      }
    } catch (error) {
      console.error('Failed to fetch topic history:', error);
    }
  }, [selectedTopic]);

  useEffect(() => {
    if (selectedTopic) {
      fetchTopicHistory();
    }
  }, [fetchTopicHistory, selectedTopic]);

  const handleSendMessage = async () => {
    if (!messageText.trim() || isSending) return;

    setIsSending(true);

    const requestBody = {
      chatId: selectedTopic,
      message: messageText,
      language: i18n.language
    };

    try {
      const response = await postSendMessage(requestBody);
      // eslint-disable-next-line no-unused-vars
      const { messageId, chatId, response: responseText } = response.data;

      setMessages(prevMessages => [
        ...prevMessages,
        { role: 'user', content: messageText },
        { role: 'assistant', content: responseText }
      ]);

      setMessageText('');
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsSending(false);
    }
  };

  const fetchTopics = async () => {
    try {
      const response = await getTopics(selectedCategory);
      if (Array.isArray(response.data)) {
        const topicsWithImages = response.data.map(topic => ({
          ...topic,
          icon: chatImages[Math.floor(Math.random() * chatImages.length)]
        }));
        setTopics(topicsWithImages);
      } else {
        console.error('response.data is not an array:', response.data);
      }
    } catch (error) {
      console.error('Failed to fetch topics:', error);
    }
  };

  const handleDeleteTopic = async (topicId) => {
    try {
      const res = await deleteTopic(topicId);
      if (res.status === 204) {
        fetchCategories();
        fetchTopics();
      }
    } catch {
      console.error('Ошибка при удалении темы');
    }
  }

  const handleTopicAdded = async (newTopic) => {
    await fetchCategories();
    await fetchTopics();

    if (newTopic && newTopic.id) {
      setTimeout(() => {
        setSelectedTopic(newTopic.id);
      }, 0);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [messages]);

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Chat Category */}
      {(currentPanel === 'categories') && (
        <div className="w-full h-[calc(100vh-75px)] bg-[#E8DDD9] flex flex-col justify-between">
          <div>
            <div className="text-2xl font-semibold mb-4 p-4">{t('sidebar.chats')}</div>
            <ul className="w-full text-sm text-[#4F3422]">
              {categories.map(category => (
                <li
                  key={category.id}
                  onClick={() => { setSelectedCategory(category.id); setCurrentPanel('topics') }}
                  className={`cursor-pointer w-full py-4 px-3 ${category.id === selectedCategory ? 'bg-[#FFEDD5] border-r-2 border-r-[#FB8728]' : ''} font-semibold text-lg border-y-2 border-b-[#C0A091] flex flex-row justify-between items-center`}
                >
                  <div className="flex flex-row items-center gap-x-2">
                    <img src={categoryIcons[category.id]} alt="" />
                    {i18n.language === 'ru' ? category.titleRu : category.titleKk}
                  </div>
                  <div>({category.count})</div>
                </li>
              ))}
            </ul>
          </div>
        </div>)}

      {/* Topics Panel */}
      {(currentPanel === 'topics') && (
        <div className="w-full h-[calc(100vh-80px)] bg-[#F3EEE9] border-r border-gray-200 flex flex-col">
          <div className="flex justify-between items-center mb-4 pt-4 px-4">
            <div className="flex flex-row gap-x-2">
              <img src={chats} alt="" className="" />
              <h2 className="text-2xl font-semibold text-[#4F3422]">{t('topics.title')}</h2>
            </div>
          </div>
          <div className="flex flex-col h-full">
            <ScrollArea className="w-full h-[77%]">
              {topics.map(topic => (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={clsx("w-full cursor-pointer flex flex-row items-center justify-between py-4 px-3 border-b-2 border-b-[#E8DDD9]",
                    topic.id === selectedTopic && "bg-[#d0e4bc] border-r-2 border-r-[#91AD75]"
                  )}
                >
                  <div className="w-full flex flex-row gap-x-3 justify-between items-center text-[#4F3422]">
                    <div className="w-[90%] flex flex-row items-center gap-x-2">
                      <img src={topic.icon} alt={topic.titleRu} className="w-8 h-8" />
                      <div className="font-semibold text-lg truncate w-full">
                        {i18n.language === 'ru' ? topic.titleRu : topic.titleKk}
                      </div>
                    </div>
                    <img src={trashIcon} alt=""
                      className='w-[10%]'
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTopic(topic.id);
                      }} />
                  </div>
                </div>
              ))}
            </ScrollArea>
            <div className="">
              <div className="mt-5 mx-4">
                <button
                  className="flex-1 w-full  bg-[#91AD75] text-white py-3 rounded-full text-sm font-semibold"
                  onClick={() => setAddTopic(true)}
                >
                  + {t('topics.addNew')}
                </button>
              </div>
              <div className="flex gap-2 p-4">
                <button
                  className="flex-1 bg-[#91AD75] text-white py-3 rounded-full text-sm font-semibold"
                  onClick={() => setCurrentPanel('categories')}
                >
                  {t('topics.back')}
                </button>
                <button
                  className="flex-1 bg-[#91AD75] text-white py-3 rounded-full text-sm font-semibold"
                  onClick={() => setCurrentPanel('chat')}
                >
                  {t('topics.startchat')}
                </button>
              </div>
            </div>
          </div>
        </div>)}

      {/* Chat Window */}
      {(currentPanel === 'chat') && (
        <div className="flex flex-col h-[calc(100vh-80px)] w-full bg-white p-4">

          {/* Верх: заголовок */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setCurrentPanel('topics')}
              className="text-[#91AD75] font-bold text-lg"
            >
              ← {t('topics.back')}
            </button>
            <h1 className="text-2xl font-bold text-[#4F3422]">Zhurek AI</h1>
          </div>

          {/* Сообщения: прокручиваемая часть */}
          <div className="flex-1 overflow-y-auto flex flex-col space-y-4 pr-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={clsx(
                  "px-4 py-3 rounded-2xl shadow-md",
                  message.role === 'user'
                    ? "self-end bg-[#4F3422] text-white rounded-br-sm max-w-[85%]"
                    : "self-start bg-[#F5F0EC] text-[#4F3422] rounded-bl-sm max-w-[85%]"
                )}
              >
                {message.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Поле ввода снизу */}
          <div className="mt-4 flex items-center gap-2">
            <Input
              placeholder={t('chat.placeholder')}
              className="flex-1 bg-[#F3EEE9] text-[#4F3422] p-3 rounded-lg text-sm"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <button
              className="bg-[#91AD75] p-3 rounded-full"
              onClick={handleSendMessage}
              disabled={isSending}
            >
              {isSending ? (
                <span className="loader inline-block h-4 w-4 border-2 border-white border-b-transparent rounded-full animate-spin"></span>
              ) : (
                <img src={sendWhite} alt="send" />
              )}
            </button>
          </div>

        </div>


      )}
      {addTopic &&
        <AddTopicModal
          isOpen={addTopic}
          onClose={() => { setAddTopic(false) }}
          onTopicAdded={handleTopicAdded}
          categoryId={selectedCategory}
        />
      }
    </div>
  );
};
