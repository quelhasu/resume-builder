import React, { useState, useContext } from 'react';
import Profile from './sections/Profile'; 
import Experiences from './sections/Experience'
import Educations from './sections/Education'

const Sidebar = () => {

  return (
    <div id="sidebar" className="h-screen col-span-2 px-3 py-4 shadow-xl h-screen overflow-y-scroll">
      <Profile/>
      <Experiences/>
      <Educations/>
    </div>
  );
};

export default Sidebar;