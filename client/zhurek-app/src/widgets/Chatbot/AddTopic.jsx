import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { postAddTopic } from './apis';
import { Input } from '../../shared/ui/Input/Input';

const AddTopicModal = ({ isOpen, onClose, onTopicAdded, categoryId }) => {
  const { t } = useTranslation();
  const [titleKk, setTitleKk] = useState('');

  const handleSubmit = async () => {
    const requestBody = {
      titleRu: titleKk,
      titleKk,
      categoryId: Number(categoryId),
    };

    try {
      await postAddTopic(requestBody);
      onTopicAdded();
      onClose();
    } catch (error) {
      console.error('Failed to add topic:', error);
      alert('Failed to add topic.');
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">{t('addTopic')}</h2>
            <div className="space-y-4">
              <Input value={titleKk} onChange={(e) => setTitleKk(e.target.value)} placeholder={t('topicLabel')} />
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">{t('cancel')}</button>
              <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">{t('add')}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTopicModal;
