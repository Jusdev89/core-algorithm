const makeChange = ({price, amountGiven}) => {
  const change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  if (price === amountGiven) {return change}

  const cents = amountGiven - price

  change.quarters = Math.floor(cents / 25)
  change.dimes = Math.floor((cents % 25) / 10)
  change.nickels = Math.floor(((cents % 25) % 10) / 5)
  change.pennies = cents % 5

  return change
}

export default makeChange
