// PasswordInput.tsx
import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

interface PasswordInputProps {
  label: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 pr-3 flex items-center bg-black text-white"
        >
          {showPassword ? (
            <IoEyeOff className="h-5 w-5 text-gray-500" />
          ) : (
            <IoEye className="h-5 w-5 text-gray-500" />
          )}
          mostrar
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
