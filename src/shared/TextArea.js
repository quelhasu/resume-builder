import React from 'react'
import styled from 'styled-components';

const TextArea = ({ className='', name, value, label, placeholder, onChange, onBlur }) => {

  return (
    <div className={className+"text-left py-1"}>
      <label className="uppercase tracking-wide text-gray-600 text-xs font-semibold mb-2">
        {label}
      </label>
      <textarea
        className="px-2 appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-2 
        leading-tight 
        focus:outline-none focus:bg-white focus:border-solid focus:border-gray-600"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
} 

export default TextArea;