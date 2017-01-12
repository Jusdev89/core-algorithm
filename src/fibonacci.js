const fibonacci = number => {
  const array = []

  if (number) {
    if (number === 1) {
      array.push(0)
    } else if (number === 2) {
      array.push(0, 1)
    } else if (number === 3) {
      array.push(0, 1, 1)
    } else if (number => 4) {
      for (let i = 0; i < number - 1; i++) {
        if (!array.length) {
          i++
          array.push(0, 1, 1)
        } else {
          array.push(array[i] + array[i - 1])
        }
      }
    }
  }
  
  return array
}

export default fibonacci
