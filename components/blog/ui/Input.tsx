import React from "react";

interface InputProps {
    text: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string
  }

const Input : React.FC<InputProps> = ({value, setValue, text, placeholder}) => {
  return (
    <>
        <label htmlFor={text} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {text}
        </label>
        <input type="text" name={text} value={value} onChange={(e) => setValue(e.target.value)} id={text} placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
    </>
  )
}

export default Input