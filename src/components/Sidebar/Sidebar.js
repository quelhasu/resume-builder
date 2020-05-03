import React, { useState, useContext } from 'react';
import Profile from './sections/Profile'; 
import Experiences from './sections/Experiences'

const Sidebar = () => {

  return (
    <div id="sidebar" className="h-screen col-span-2 px-3 py-4 shadow-xl h-screen overflow-y-scroll">
      <Profile/>
      <Experiences/>
    </div>
  );
};

export default Sidebar;