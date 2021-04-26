const createMessage = require('./create-message')
const protectiveMonitoringSendEvent = require('../services/protective-monitoring-service')

async function sendCalculation (context, payment) {
  const message = createMessage(payment)
  context.bindings.outputSbQueue = message
  await protectiveMonitoringSendEvent(payment.claimId, 'Send calculation message')
  console.info(`Published payment for ${payment.claimId}`)
  context.done()
}

module.exports = sendCalculation
