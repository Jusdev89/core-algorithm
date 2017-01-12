const setSymmetricDifference = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        a.splice(i, 1)
        b.splice(j, 1)
      }
    }
  }

  const difference = [...a, ...b]

  return difference
}

export default setSymmetricDifference
