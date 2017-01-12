const setIntersection = (a, b) => {
  const intersect = []

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) intersect.push(a[i])
    }
  }

  return intersect
}

export default setIntersection

// Return the intersection of two sets
// the function is going to take two arguments that are array's
// so will loop threw the first/a array
// will put a loop inside of the
