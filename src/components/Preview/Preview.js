import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Preview = () => {

  const { info, social } = useSelector(state => ({
    info: state.profile.info,
    social: state.profile.social
  }))

  const LiSocial = styled.li`
    // text-align: center;
    // border-left: 1px solid #ccc;
    // background-color: #fff;
    flex-basis: auto;
    min-width: 100px;        

    &:before {
      padding-right: 1.25rem;
      content: " | ";
      color:#e2e8f0;
    }

    &:first-child{
      &:before {
        content: " "
      }
    }
  `;

  const Title = styled.div`
    &>span{
      color: #0281CB;
    }

    &:after{
      
    }
  
  `
  return (
    <div className="h-screen col-span-3 p-5">
      <header className="mb-3">
        {info.name ?
          (<p className="text-4xl">
            <span className="font-thin text-gray-600">{info.name.split(' ')[0]}</span>
            <span className="font-bold uppercase">{" " + info.name.split(' ')[1]}</span>
          </p>) : ''
        }
        <p className="italic text-gray-400 mb-1">{info.address}</p>

        <div className="">
          <ul className="inline-flex flex-wrap">
            {Object.entries(social).map(([key, value]) => (
              <LiSocial className="flex-1 px-4">{value}</LiSocial>
            ))}
          </ul>
        </div>
      </header>
      
      <body className="text-left text-xl">
        <Title className="tracking-widest"><span>EXP</span>ERIENCES</Title>
      </body>
    </div>
  )
}

export default Preview