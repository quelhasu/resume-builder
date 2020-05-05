import React from 'react'
import styled from 'styled-components';

const ButtonIcon = ({ className='', type='button', value, color, px='6', children, onClick='' }) => {

  return (
    <div class="my-3">
    <button onClick={onClick} type={type} class={`leading-tight mr-3 bg-white text-gray-800 font-semibold rounded border-b-2 border-${color}-500 hover:border-${color}-600 hover:bg-${color}-500 hover:text-white shadow-md py-2 px-${px} inline-flex items-center ${className}`}>
      {value ? (<span class="mr-2">{value}</span>) : ''}
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