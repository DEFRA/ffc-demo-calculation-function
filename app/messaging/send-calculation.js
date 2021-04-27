const protectiveMonitoringSendEvent = require('../services/protective-monitoring-service')

async function sendCalculation (context, payment) {
  context.bindings.outputSbQueue = payment
  await protectiveMonitoringSendEvent(payment.claimId, 'Send calculation message')
  context.log.info(`Published payment for ${payment.claimId}`)
  context.done()
}

module.exports = sendCalculation
