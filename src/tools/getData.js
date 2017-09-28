function getData (data) {
  var arr = []
  for (var i = 0; i < data.length; i++) {
    var obj = {}
    for (var j in data[i]) {
      if (typeof (data[i][j]) === 'object') {
        obj[j] = data[i][j][0] ? data[i][j][0].remark : null
      } else {
        obj[j] = data[i][j]
      }
      arr.push(obj)
    }
  }
  return arr
}
export default getData
