import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sidebar from './components/Sidebar/Sidebar';
import Preview from './components/Preview/Preview';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faMobile, faEnvelope, faStream, faSearch, faUsers, faCalendarAlt,
  faFileExport, faFileImport, faFileDownload
} from '@fortawesome/free-solid-svg-icons';

import './assets/styles/app.css';

library.add(faMobile, faEnvelope, fab, faStream, faSearch, faUsers,
  faCalendarAlt, faFileExport, faFileImport, faFileDownload);


function App() {
  return (
    <div className="App">
      <div className="h-screen grid grid-cols-6 items-center">
        <Sidebar />
        <Preview />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default App;
