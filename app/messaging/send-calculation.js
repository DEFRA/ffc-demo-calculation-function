const createMessage = require('./create-message')
const protectiveMonitoringSendEvent = require('../services/protective-monitoring-service')

async function sendCalculation (context, payment) {
  const message = createMessage(payment)
  context.bindings.outputSbQueue = message
  await protectiveMonitoringSendEvent(payment.claimId, 'Send calculation message')
  context.log.info(`Published payment for ${payment.claimId}`)
  context.done()
}

module.exports = sendCalculation
