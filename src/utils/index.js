import { toast } from 'react-toastify';
import moment from 'moment'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function setPanZoom(panZoomRef, ratio) {
  panZoomRef.current.autoCenter(ratio)
  panZoomRef.current.reset()
}

function printFile(fileName, pageRef, panZoomRef) {
  const date = moment(new Date()).format("DD-MM-YYYY")
  const filename = `${fileName}-${date}`
  setPanZoom(panZoomRef, 1);
  toast.info('Download PDF will start...')
  setTimeout(() => {
    html2canvas(pageRef.current, {
      scale: 2,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 1);
      const pdf = new jsPDF({
        orientation: 'portrait',
      });
      const pageHeight = pdf.internal.pageSize.getHeight();

      const ratio = pageHeight / canvas.height

      const width = canvas.width * ratio
      const height = canvas.height * ratio


      pdf.addImage(imgData, 'JPEG', 0, 0, width, height, null, 'slow', 'portrait')
      pdf.save(`${fileName}-${date}.pdf`);
    })
  }, 500);
}

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

async function exportFile(fileName, objectToExport) {
  const date = moment(new Date()).format("DD-MM-YYYY")
  const filename = `${fileName}-${date}`
  const json = JSON.stringify(objectToExport)
  const blob = new Blob([json], { type: 'application/json' })
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
  exportFile,
  printFile
}