import React from 'react'

const TextField = ({ className='', name, value, label, placeholder, onChange, onBlur }) => {
  return (
    <div className={className+"text-left py-1"}>
      <label className="uppercase tracking-wide text-gray-600 text-xs font-semibold mb-2">
        {label}
      </label>
      <input
        className="px-2 appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
} 

export default TextField;