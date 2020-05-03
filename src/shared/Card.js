import React, { useState, useRef } from 'react'
import styled from 'styled-components';


const Card = ({ title, collapsed = false, children }) => {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');

  const content = useRef(null);

  function toggle() {
    console.log(content.current.scrollHeight)
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  const Chevron = () => (
    <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
      {/* <!-- icon by feathericons.com --> */}
      <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <polyline points="6 9 12 15 18 9">
        </polyline>
      </svg>
    </div>
  )

  return (
    <div className="p-3 rounded overflow-hidden border-solid border border-gray-300 my-3">
      {collapsed ? (
        <header
          className="flex justify-between items-center cursor-pointer select-none"
          onClick={toggle}>
          <p className="uppercase  tracking-wider text-gray-800 text-m font-semibold text-left">{title}</p>
          <Chevron />
        </header>
      ) : (
          <header
            className="justify-between items-center">
            <p className="uppercase  tracking-wider text-gray-800 text-m font-semibold text-left">{title}</p>
          </header>
        )}

      <div
        className="transition-maxHeight duration-500 ease-out"
        ref={content}
        style={collapsed ? { maxHeight: `${height}` } :{} }>
        {children}
      </div>
    </div>
  )
}

export default Card;