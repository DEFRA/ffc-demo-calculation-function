const calculationService = require('./services/calculation-service')
const protectiveMonitoringSendEvent = require('./services/protective-monitoring-service')

module.exports = async function (context, message) {
  try {
    const claim = message
    if (claim.claimId !== undefined) {
      const value = calculationService.calculate(context, claim)
      context.bindings.outputSbQueue = { claimId: claim.claimId, value }
      await protectiveMonitoringSendEvent(claim.claimId, 'Claim calculated')
      context.log.info(`Published payment for ${claim.claimId}`)
      context.done()
    }
  } catch (err) {
    context.log.error('Unable to process message:', err)
    throw err
  }
}
