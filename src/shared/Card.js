import React, { useState, useRef } from 'react'
import styled from 'styled-components';


const Card = ({ title, collapsed = false, children }) => {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');

  const content = useRef(null);

  function toggle() {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className={`p-3 rounded overflow-hidden border-solid border border-gray-300 my-3 ${active ? 'border-l-4' : ''}`}>
      {collapsed ? (
        <header
          className="flex justify-between items-center cursor-pointer select-none"
          onClick={toggle}>
          <p className="uppercase  tracking-wider text-gray-800 text-m font-semibold text-left">{title}</p>
          <div className={`transform transition-transform duration-500 ease-in-out rounded-full border border-grey w-7 h-7 flex items-center justify-center ${active ? 'rotate-90' : 'rotate-0'}`}>
            <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <polyline points='10,6 16,12 10,18'>
              </polyline>
            </svg>
          </div>
        </header>
      ) : (
          <header
            className="justify-between items-center">
            <p className="uppercase  tracking-wider text-gray-800 text-m font-semibold text-left">{title}</p>
          </header>
        )}

      <div
        className={`transition-maxHeight duration-500 ease-out`}
        ref={content}
        style={collapsed ? { maxHeight: `${height}` } : {}}>
        {children}
      </div>
    </div>
  )
}

export default Card;