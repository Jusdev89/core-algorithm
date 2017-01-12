const isEven = n => (n % 2 == 0)
const isOdd = n => (Math.abs(n % 2) == 1)
const equalsOne = n => (n == 1)

const collatzConjecture = (number, conjecture = []) => {
  if (!conjecture.length) {conjecture.push(number)}
  
  if(!equalsOne(number)) {
    if (isOdd(number)) {
      const newNumber = ((number * 3) + 1)
      conjecture.push(newNumber)
      collatzConjecture(newNumber, conjecture)
    }

    if (isEven(number)) {
      const newNumber = (number / 2)
      conjecture.push(newNumber)
      collatzConjecture(newNumber, conjecture)
    }
  }

  return conjecture
}

export default collatzConjecture
