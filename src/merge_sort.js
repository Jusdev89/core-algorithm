let count = 0

const mergeSort = data => {
  if (data.length < 2) {
    return data
  }

  const midpoint = Math.round(data.length / 2)
  return merge(
    mergeSort(data.slice(0, midpoint)),
    mergeSort(data.slice(midpoint))
  )
}

const merge = (left, right) => {
  const out = []

  while (left.length && right.length) {
    console.log(count++)
    out.push(
      left[0] < right[0]
        ? left.shift()
        : right.shift()
    )
  }

  while (left.length) {
    out.push(left.shift())
  }

  while (right.length) {
    out.push(right.shift())
  }

  return out
}

export default mergeSort
