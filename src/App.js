import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Preview from './components/Preview/Preview';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStream, faSearch, faUsers, faCalendarAlt, faFileExport, faFileImport, faFileDownload } from '@fortawesome/free-solid-svg-icons';

import './assets/styles/app.css';

library.add(faStream, faSearch, faUsers, faCalendarAlt, faFileExport, faFileImport, faFileDownload);


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
