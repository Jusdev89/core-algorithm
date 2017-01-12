const fizzBuzz = () => {
  const array = []

  for (let i = 0; i <= 100; i++) {
    if (i === 0) {
      array.push(++i)
    } else if (i % 3 === 0 & i % 5 === 0) {
      array.push('FizzBuzz')
    } else if (i % 3 === 0) {
      array.push('Fizz')
    } else if (i % 5 === 0) {
      array.push('Buzz')
    } else {
      array.push(i)
    }
  }

  return array
}

export default fizzBuzz
