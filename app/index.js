const calculationService = require('./services/calculation-service')
const protectiveMonitoringSendEvent = require('./services/protective-monitoring-service')
const sendCalculation = require('./messaging/send-calculation')

module.exports = async function (context, message) {
  try {
    const claim = message
    if (claim.claimId !== undefined) {
      const value = calculationService.calculate(context, claim)
      await sendCalculation(context, { claimId: claim.claimId, value })
      await protectiveMonitoringSendEvent(claim.claimId, 'Claim calculated')
    }
  } catch (err) {
    context.log.error('Unable to process message:', err)
    throw err
  }
}
