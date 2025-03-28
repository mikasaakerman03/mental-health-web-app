import React, { useState, useEffect, forwardRef } from 'react';

import clsx from 'clsx';
import { uniqueId } from '../../shared/helpers/uniqueId';
import { fetchSearchResults } from './fetchSearchResults';

export const AddressList = forwardRef(
  ({ onChange, name, label, value, isError, subText, ...inputProps }, ref) => {
    const [initialValue, setInitalValue] = useState(value);
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isToggle, setIsToggle] = useState(false);

    useEffect(() => {
      if (!searchTerm || initialValue?.label === searchTerm) {
        setResults([]);
        return;
      }

      if (searchTerm.length < 10) {
        setResults([]);
        return;
      }

      setLoading(true);
      if (!initialValue?.value) {
        fetchSearchResults(searchTerm).then(data => {
          setResults(data);
          setIsToggle(true);
          setLoading(false);
        });
      }
    }, [searchTerm, initialValue]);

    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setSearchTerm(newValue);
      setInitalValue({ label: '', value: '' });

      if (newValue === '') {
        onChange({ label: '', value: '' });
      }
    };

    const handleOptionClick = (option) => {
      if (onChange) {
        onChange(option);
        setInitalValue(option);
        setSearchTerm(option.label);
        setIsToggle(false);
      }
      setIsToggle(false);
    };

    return (
      <div className="relative w-full">
        <div className="mb-2 w-full">
          <div className="flex justify-between items-center">
            <label
              htmlFor={name}
              className="text-sm font-semibold text-[#4F3422]">
              {label}
            </label>
          </div>
        </div>
        <div
          style={{ height: 'max-content' }}
          className={
            clsx(
              'w-full  rounded-xl text-[#4F3422]'
            )
          }>
          <textarea
            id={name}
            ref={ref}
            value={searchTerm || initialValue?.label}
            onChange={(e) => {
              handleInputChange(e);
            }}
            className="min-h-[52px] w-full px-4 py-3 bg-[#F5F2F0] rounded-xl text-[#4F3422] h-auto focus:outline-none active:outline-none"
            rows={2}
            {...inputProps}
          />
          {loading && <div className="absolute right-5">...</div>}
        </div>

        {results.length > 0 && isToggle && (
          <ul className="absolute z-10 pb-8 w-full h-[200px] top-[88px] overflow-y-auto bg-[#F5F2F0] border-[1px] rounded-b-lg shadow-lg">
            {results.map(result => (
              <li
                aria-hidden
                key={uniqueId()}
                className="px-4 py-2 hover:bg-[#fbe5d8] cursor-pointer"
                onClick={() => {
                  handleOptionClick({
                    label: result.addressRus,
                    value: result.postcode,
                  });
                  setIsToggle(false);
                  setSearchTerm(result.addressRus);
                }}>
                {result.addressRus}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  },
);

AddressList.displayName = 'AddressList';
