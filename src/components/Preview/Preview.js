import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { sortObject } from '../../utils/index';

const Preview = () => {

  const { info, social } = useSelector(state => ({
    info: state.profile.info,
    social: sortObject(state.profile.social, {phone: 1, email: 2, github: 3, linkedin: 4 })
  }))

  const LiSocial = styled.li`
    flex-basis: auto;
    min-width: 100px;        
  `;


  const Title = ({ className, title })=> (
    <div className={`${className} text-2xl tracking-widest container overflow-hidden font-bold uppercase`}>
      <span>{title.substring(0,3)}</span>{title.substring(3)}
    </div>
  );

  const StyledTitle = styled(Title)`
    &>span{
      color: #0281CB;
    }

    &:after{
      content:'';
      display:inline-block;
      width:100%; height:100%;
      margin-right:-100%;
      border-bottom:1px solid #717171;
      margin-bottom: 0.45rem;
      margin-left: 0.5rem;
    }
  `;

  return (
    <div className="h-screen col-span-4 p-5">
      <header className="mb-3">
        {info.name ?
          (<p className="text-5xl">
            <span className="font-thin text-gray-600">{info.name.split(' ')[0]}</span>
            <span className="font-bold uppercase">{" " + info.name.split(' ')[1]}</span>
          </p>) : ''
        }
        <p className="italic text-gray-400 mb-1">{info.address}</p>

        <div className="">
          <ul className="inline-flex flex-wrap divide-x divide-gray-400">
            {Object.entries(social).map(([key, value]) => (
              <LiSocial className="flex-1 px-4">{value}</LiSocial>
            ))}
          </ul>
        </div>
      </header>
      
      <body className="text-left">
        <StyledTitle title="experiences"/>
      </body>

     </div>
  )
}

export default Preview