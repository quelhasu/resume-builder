import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { PanZoom } from 'react-easy-panzoom'
import { sortObject } from '../../utils/index';
import MarkdownPreview from '../../shared/Markdown';
import MenuActionsFile from './MenuActionsFile'

const Preview = () => {

  const { info, social, experiences, educations, projects, languages, hobbies } = useSelector(state => ({
    info: state.profile.info,
    social: sortObject(state.profile.social, { phone: 1, email: 2, github: 3, linkedin: 4 }),
    experiences: state.experiences,
    educations: state.educations,
    projects: state.item.projects,
    languages: state.item.languages,
    hobbies: state.item.hobbies

  }))

  const LiSocial = styled.li`
    flex-basis: auto;
    min-width: 100px;        
  `;


  const Title = ({ className, title }) => (
    <div className={`${className} mb-3 text-xl tracking-widest container overflow-hidden font-bold uppercase`}>
      <span>{title.substring(0, 3)}</span>{title.substring(3)}
    </div>
  );

  const StyledTitle = styled(Title)`
    &>span{
      color: #0281CB;
    }

    &:after{
      content:'';
      display:inline-block;
      width:100%; 
      height:100%;
      margin-right:-100%;
      border-bottom:1px solid #717171;
      margin-bottom: 0.40rem;
      margin-left: 0.5rem;
    }
  `;

  return (
    <div className="h-screen flex justify-center  col-span-4 overflow-hidden">
      <MenuActionsFile 
        className=""
        fileName={info.name && `${info.name.split(' ')[0]}-${info.name.split(' ')[1]}`}
        objectToExport={{
          profile:{info, social}, 
          experiences, 
          educations, 
          item: {projects, languages, hobbies}
        }}  />
      <PanZoom
        minZoom="0.5"
        autoCenter
        autoCenterZoomLevel={0.75}
        boundaryRatioVertical={0.5}
        boundaryRatioHorizontal={0.5}
      >
        <div id="A4" className="shadow-xl break-words py-2 px-5 border border-gray-400">
          <header className="">
            {info.name ?
              (<p className="text-3xl leading-normal">
                <span className="font-thin text-gray-600">{info.name.split(' ')[0]}</span>
                <span className="font-bold uppercase">{" " + info.name.split(' ')[1]}</span>
              </p>) : ''
            }
            <p className="italic text-sm text-gray-500 mb-1">{info.address}</p>

            <div className="text-xs px-32">
              <ul className="flex flex-row justify-between flex-wrap divide-x divide-gray-400">
                {Object.entries(social).map(([key, value]) => (
                  <LiSocial key={key} className="flex-1 px-1">{value}</LiSocial>
                ))}
              </ul>
            </div>
          </header>

          <div className="text-left">
            <StyledTitle title="experiences" />
            {experiences.map((item, index) => (
              <div key={item.key} className="flex justify-between mb-4">
                <div className="">
                  <h3 className="font-bold text-base leading-3">{item.title}</h3>
                  <ul className="text-xs leading-3 inline-flex divide-x divide-gray-400 text-gray-600 uppercase font-medium mb-1">
                    <li className="pr-1" >{item.company}</li>
                    <li className="pl-1" >{item.type}</li>
                  </ul>
                  {item.desc && (
                    <MarkdownPreview source={item.desc} className="pl-5 text-xs leading-thin" />
                  )}
                </div>
                <div className="flex flex-col text-right items-end text-xs italic">
                  <p className="colorized leading-3">{item.location}</p>
                  <p>{item.start_date} - {item.end_date}</p>
                </div>
              </div>
            ))}

            <StyledTitle title="educations" />
            {educations.map((item, index) => (
              <div key={item.key} className="flex justify-between mb-4">
                <div className="w-5/6">
                  <p className="font-bold text-base leading-3">{item.univ}</p>
                  <p className="text-xs leading-3 inline-flex divide-x divide-gray-400 text-gray-600 uppercase font-medium mb-1">
                    {item.type}
                  </p>
                  {item.desc && (
                    <MarkdownPreview source={item.desc} className="text-xs leading-thin" />
                  )}
                </div>
                <div className="flex flex-col text-right items-end text-xs italic">
                  <p className="colorized leading-3">{item.location}</p>
                  <p>{item.start_date} - {item.end_date}</p>
                </div>
              </div>
            ))}

            <StyledTitle title="Publication" />
            <div className="flex justify-between mb-4">

            </div>

            <StyledTitle title="Project" />
            <div className="flex justify-between mb-4">
              <div>
                {projects.map((item, index) => (
                  <p key={item.key} className="font-bold text-base">{item.name}</p>
                ))}
              </div>
              <div>
                {projects.map((item, index) => (
                  <p key={item.key} className="text-sm ">{item.desc}</p>
                ))}
              </div>
            </div>

            <div className="flex justify-between -mx-8">
              <div class="w-1/2 px-8">
                <StyledTitle title="Languages" />
                <div className="flex justify-between mb-4">
                  <div className="w-1/4">
                    {languages && languages.map((item, index) => (
                      <p key={item.key} className="font-bold text-base">{item.name}</p>
                    ))}
                  </div>
                  <div className="w-3/4">
                    {languages && languages.map((item, index) => (
                      <p key={item.key} className="text-sm ">{item.desc}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div class="w-1/2 px-8">
                <StyledTitle title="Hobbies" />
                <div className="flex justify-between mb-4">
                  <div className="w-1/4">
                    {hobbies && hobbies.map((item, index) => (
                      <p key={item.key} className="font-bold text-base">{item.name}</p>
                    ))}
                  </div>
                  <div className="w-3/4">
                    {hobbies && hobbies.map((item, index) => (
                      <p key={item.key} className="text-sm ">{item.desc}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </PanZoom>
    </div>
  )
}

export default Preview