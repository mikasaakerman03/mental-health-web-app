import React, { forwardRef } from 'react';

export const Textarea = forwardRef((
  {
    name,
    label,
    sublabel,
    value,
    type = 'text',
    classNames,
    placeholder,
    inlineSubText,
    subText,
    rightIcon,
    leftIcon,
    maxLength,
    isDisabled,
    isError,
    onChange,
    onClickRightIcon,
    onClick,
    ...inputProps
  },
  ref,
) => {
  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      <textarea
        name={name}
        className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm text-[#4F3422]"
        disabled={isDisabled}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        ref={ref}
        onChange={handleInputChange}
        autoComplete="off"
        {...inputProps}
      />
    </>
  );
})

Textarea.displayName = 'Textarea';
