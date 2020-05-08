import { toast } from 'react-toastify';
import moment from 'moment'

const sortObject = (obj = Object, order = Object) => {
  var sortable = []
  {
    Object.entries(obj).map(([key, value]) => (
      sortable.push([key, value])
    ))
  }

  sortable.sort(function (a, b) {
    return order[a[0]] - order[b[0]]
  })

  var sorted = {}
  sortable.forEach((el) => {
    sorted[el[0]] = el[1]
  })
  return sorted
}

const handleFile = (event, dispatch, action) => {
  const content = event.target.result
  const json = JSON.parse(content)
  dispatch(action(json))
}

function uploadFile(file, dispatch, action) {
  var fileData = new FileReader()
  fileData.onloadend = (e) => handleFile(e, dispatch, action)
  fileData.readAsText(file)
  toast.success('File Uploaded!')
}

async function exportFile(fileName, objectToExport)  {
  const date = moment(new Date()).format("DD-MM-YYYY")
  const filename = `${fileName}-${date}`
  const json = JSON.stringify(objectToExport)
  const blob = new Blob([json], {type: 'application/json'})
  const href = await URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = href
  link.download = filename + ".json"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  toast.info('Export start..')
}

export {
  sortObject,
  uploadFile, 
  exportFile
}