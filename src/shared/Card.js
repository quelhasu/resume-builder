import React from 'react'

const Card = ({ title, children }) => {
  return (
    <div className="p-3 rounded overflow-hidden border-solid border border-gray-300 mb-3">
      <p className="uppercase tracking-wider text-gray-800 text-m font-semibold text-left">{title}</p>
      {children}
    </div>
  )
} 

export default Card;