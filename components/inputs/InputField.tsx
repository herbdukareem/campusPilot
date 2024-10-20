'use client'
import React from 'react';
import { Input } from '@nextui-org/react';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "sm" | "md" | "lg" | "xl" | "xs";
  type?: string;
  readOnly?: boolean;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  size = 'md',
  type = 'text',
  readOnly = false,
  required = false
}) => {
  return (
    <Input
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      size={size}
      type={type}
      readOnly={readOnly}
      required={required}
      className="bg-white  border-2 border-primary-400 rounded-lg p-2 outline-none focus:border-primary-500" // Tailwind CSS classes

    />
  );
};

export default InputField;
