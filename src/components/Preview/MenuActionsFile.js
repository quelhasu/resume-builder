import React, { useState } from 'react'
import { FilePicker } from 'react-file-picker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify';
import { updateResume } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile, exportFile } from '../../utils/index'
import { changeColor } from '../../redux/options'
import { SketchPicker } from 'react-color'
import styled from 'styled-components'

const MenuActionsFile = ({ classNameName = '', fileName, objectToExport }) => {
  const dispatch = useDispatch()

  const [colorPickerState, setColorPickerState] = useState(false);
  const { color } = useSelector(state => ({
    color: state.options.color
  }))

  function handleColorClick() {
    setColorPickerState(!colorPickerState)
  }

  function handleColorChange(color) {
    dispatch(changeColor(color.hex))
  }

  const ColorPicker = styled.i`
    background: ${color};
  `

  return (
    <div className="absolute right-0 z-10 m-4 opacity-75 hover:opacity-100 transition-all duration-150">
      <div className="p-2 text-gray-900 bg-white rounded-lg shadow-lg font-medium capitalize border border-gray-200  flex-col justify-center items-center leading-none">
        <span className="px flex pb-2 border-b border-gray-500">
          <img src={require('../../assets/images/logp-outline.svg')}
            alt="alt placeholder" className="w-8 h-8 inline mx-auto" />
        </span>
        <span className="cursor-pointer flex cursor-pointer p-2 hover:bg-gray-200 hover:text-gray-700 rounded"
          onClick={file => exportFile(fileName, objectToExport)}>
          <i className="w-8 p-2 bg-gray-200 rounded-full">
            <FontAwesomeIcon icon="file-export" />
          </i>
          {/* <span class="mx-2 text-xs">Export JSON</span> */}
        </span>

        <FilePicker
          extensions={['json']}
          onChange={file => uploadFile(file, dispatch, updateResume)}
          onError={err => { toast.error('Please, select a JSON file') }}
        >
          <span className="cursor-pointer flex cursor-pointer p-2 hover:bg-gray-200 hover:text-gray-700 rounded" >
            <i className="w-8 p-2 bg-gray-200 rounded-full">
              <FontAwesomeIcon className="" icon="file-import" />
            </i>
          </span>
        </FilePicker>

        <span className="cursor-pointer flex cursor-pointer p-2 hover:bg-gray-200 hover:text-gray-700 rounded" >
          {/* onClick={file => exportFile(fileName, objectToExport)}> */}
          <i className="w-8 p-2 bg-gray-200 rounded-full">
            <FontAwesomeIcon className="" icon="file-download" />
          </i>
        </span>
        <div className="cursor-pointer flex cursor-pointer p-2 rounded"
          onClick={handleColorClick}>
          <ColorPicker className="w-8 h-8 p-2 rounded-full" />
        </div>

        {colorPickerState ? (
          <div className="absolute z-10">
            <div className="fixed inset-y-auto right-0 mr-4">
              <SketchPicker color={color} onChange={handleColorChange} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default MenuActionsFile;