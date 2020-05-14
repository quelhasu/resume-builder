import React, { useState, useRef, useEffect } from 'react'
import autosize from 'autosize';


const Card = ({ title, secondary = "", collapsed = false, children }) => {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');

  const content = useRef();

  useEffect(() => {
    const { current } = content;
    autosize(current)
  });

  function toggle() {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }
  return (
    <div className={`p-3 rounded overflow-hidden border-solid border border-gray-300 my-3 shadow-xs`}>

      <header
        className={`flex flex-wrap justify-between items-center ${collapsed ? 'cursor-pointer select-none':''}`}
        onClick={collapsed ? toggle : undefined}>
        <p className={`${secondary ? 'w-3/6' : 'w-5/6'} text-sm truncate uppercase  tracking-wider text-gray-800 text-m font-semibold text-left`}>{title}</p>
        <p className={`${secondary ? 'w-2/6' : ''} truncate text-sm font-thin text-gray-500`}>{secondary}</p>
        {collapsed ? (
          <div className={`transform transition-transform duration-500 ease-in-out rounded-full border border-grey w-7 h-7 flex items-center justify-center ${active ? 'rotate-90' : 'rotate-0'}`}>
            <svg aria-hidden="true" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <polyline points='10,6 16,12 10,18'>
              </polyline>
            </svg>
          </div>
        ) : ''}
      </header>


      <div
        className={`transition-maxHeight duration-500 ease-out overflow-hidden`}
        ref={content}
        style={collapsed ? { maxHeight: `${height}` } : {}}>
        {children}
      </div>
    </div>
  )
}

export default Card;