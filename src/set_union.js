const setUnion = (a,b) => {
  const union = []

  for (let i = 0; i < a.length; i++) {
    for (let j = b.length; j > 0; j--) {
      if (a[i] === b[j]) {
        for (let l = 0; l < i; l++) {
          union.push(a[l])
        }
        for (let k = j; k < b.length; k++) {
          union.push(b[k])
        }
      }
    }
  }

  return union
}

export default setUnion

// we declare an empty array, call it union
// then we create a classical for loop, that will traverse the "a" array
// create another for loop inside of the "a" for loop, and this for loop
// will traverse in reserve array "b" and inside of this for loop we will create
// a checked of each item in both array's based on their indices.
// and if and when that check returns true. we will declare two for loop
// the first for loop will push the contents of the a array to the union array we
// declared at the beginnning. and stop pushing when we have reached the indice of
// were our check was successful. then in our second for loop inside of our check
// we are going to use the index of were our check was made as our starting point.
