let count = 0
const quickSort = data => {
  if(data.length < 1) {
    return []
  }

  const left = []
  const right = []
  const pivot = data[0]

  for (let i = 1; i < data.length; i++) {
    if (data[i] < pivot) {
      left.push(data[i])
    } else {
      right.push(data[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

export default quickSort
