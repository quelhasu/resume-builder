import React from 'react'

const ButtonIcon = ({ className='', type='button', value, color, px='6', children, onClick, disabled=false }) => {

  return (
    <div className="my-3">
    <button 
      disabled={disabled} 
      onClick={onClick}
      type={type} 
      className={`leading-tight mr-3 bg-white font-semibold 
      rounded border-b-2 shadow-md py-2 px-${px} inline-flex items-center ${className}
      ${!disabled 
      ? `border-${color}-500 hover:border-${color}-600 hover:bg-${color}-500 hover:text-white text-gray-800` 
      : 'text-gray-300 border-gray-300 cursor-not-allowed'}`}>
      {value ? (<span className="mr-2">{value}</span>) : ''}
      {children ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        {children}
      </svg>
      ) : ''}
    </button>
  </div>
  )
} 

export default ButtonIcon;