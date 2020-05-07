import React, { useState, useContext } from 'react';
import Profile from './sections/Profile'; 
import Experiences from './sections/Experience'
import Educations from './sections/Education'
import Item from './sections/Item'
import MenuActions from '../../shared/MenuActionsFile';

const Sidebar = () => {

  return (
    <div id="sidebar" className="h-screen col-span-2 shadow-xl h-screen overflow-y-scroll">
      <div className="px-3 py-4">
      <Profile/>
      <Experiences/>
      <Educations/>
      <Item type="projects"/>
      <Item type="languages"/>
      <Item type="hobbies"/>
      </div>
    </div>
  );
};

export default Sidebar;