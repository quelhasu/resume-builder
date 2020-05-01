const sortObject = (obj = Object, order = Object) => {
  var sortable = []
  {Object.entries(obj).map(([key, value]) => (
    sortable.push([key, value])
  ))}

  sortable.sort(function(a,b){
    return order[a[0]] - order[b[0]]
  })

  var sorted = {}
  sortable.forEach((el) => {
    sorted[el[0]]=el[1]
  })
  return sorted
}

export {
  sortObject
}