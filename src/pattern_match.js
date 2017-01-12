// so at the top of our function we declare an
// empty string to to populate with the substring
// We take the first element in the string
// and use that as the pivot then we compare that
// pivot to the next element in the string
// and if its not equal then add that element to the result string
// then we compare are current result string to the origrinal string
// and if that does not match add the next element in are origrinal
// string to the result string and so on

// check length size of the result string
// and then use that to measure how many element you will
// check in the origrinal string.
let count = 0

const subPattern = string => {
  let results = ''

  for (let i = 0; i < string.length; i++) {
    let newString = string.substring(i, results.length)

    console.log(results, '========', newString)

    results += string[i]
    if (results !== newString) { results += string[i] }
  }

  return results
}

export default subPattern
