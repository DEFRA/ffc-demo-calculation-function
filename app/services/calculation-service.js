const calculations = require('./calculations')
const round = require('./round')

module.exports = {
  calculate: function (claim) {
    const gross = calculations.gross(claim)
    const net1 = calculations.net1(claim)
    const net2 = calculations.net2(claim)
    const value = round(gross - net1 - net2, 2)

    console.log(`Calculated ${claim.claimId} to have value: ${value}`)
    return value
  }
}
