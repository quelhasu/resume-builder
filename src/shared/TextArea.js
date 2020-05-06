import React, { useRef, useEffect } from 'react'
import autosize from 'autosize';
import styled from 'styled-components';

const TextArea = ({ className = '', name, value, label, placeholder, onChange, onBlur }) => {

  const content = useRef();

  useEffect(() => {
    const { current } = content;

    autosize(current)
  });

  const style = {
    maxHeight: '250px',
    minHeight: '100px',
    resize: 'none',
    padding: '9px',
    boxSizing: 'border-box',
  };


  return (
    <div className={className + "text-left py-1"}>
      <label className="uppercase tracking-wide text-gray-600 text-xs font-semibold mb-2">
        {label}
      </label>
      <textarea
        className="px-2 text-xs appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-2 
        leading-tight 
        focus:outline-none focus:bg-white focus:border-solid focus:border-gray-600"
        style={style}
        ref={content}
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