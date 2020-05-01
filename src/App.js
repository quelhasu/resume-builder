import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Preview from './components/Preview/Preview';

import './assets/styles/app.css';

function App() {
  return (
    <div className="App">
      <div className="h-screen grid grid-cols-6 items-center">
        <Sidebar />
        <Preview />
      </div>
    </div>
  );
}

export default App;
