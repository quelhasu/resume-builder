import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuActionsFile = ({ classNameName = '', exportFile }) => {
  return (
    // <div classNameName={`${classNameName}`}>
    // <ul classNameName={`flex justify-between  p-2`}>
    //   <li className="mr-3">
    //     <a className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">Active Pill</a>
    //   </li>
    // </ul>
    // </div>
    <div className="absolute right-0 py-4 px-2 mx-4 my-2 text-gray-900 bg-white rounded-md text-left capitalize font-medium shadow-lg ">
      {/* <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
        alt="alt placeholder" className="w-8 h-8 mx-auto mb-5" /> */}
      <span className="cursor-pointer hover:bg-gray-200 hover:text-gray-700 px-2 block mb-5" onClick={exportFile}>
        <FontAwesomeIcon  icon="file-export" />
        {/* <span class="mx-2">Export</span> */}
      </span>
      <span className="cursor-pointer hover:bg-gray-200 hover:text-gray-700 px-2 block mb-5">
      <FontAwesomeIcon className="" icon="file-import" />
      {/* <span class="mx-2">Import</span> */}
      </span>
      <span className="cursor-pointer hover:bg-gray-200 hover:text-gray-700 px-2 block relative">
      <FontAwesomeIcon className="" icon="file-download" />
      {/* <span class="mx-2">Download</span> */}
        {/* <span
            className="absolute right-0 top-0 -mt-2 text-xs bg-yellow-500 text-black font-medium px-2 shadow-lg rounded-full border-2 border-white">3</span> */}
      </span>

    </div>
  )
}

export default MenuActionsFile;