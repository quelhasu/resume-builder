import React, { useState, useContext } from 'react';
import Profile from './sections/Profile'; 

const Sidebar = () => {

  return (
    <div id="sidebar" className="h-screen col-span-2 px-3 py-4 shadow-xl">
      <Profile/>
    </div>
  );
};

export default Sidebar;