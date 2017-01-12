const isEqual = (reversedString, string) => {
  if (reversedString === string) {
    return true
  } else {
    return false
  }
}

const isPalindrome = string => {
  let reversedString = ''

  for (let i = string.length; i > 0; i--) {
    reversedString += string[i - 1]
  }

  return isEqual(reversedString, string)
}

export default isPalindrome
