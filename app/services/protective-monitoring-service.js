const { PublishEvent } = require('ffc-protective-monitoring')
const config = require('../config')

async function sendEvent (claimId, event) {
  const protectiveMonitoring = new PublishEvent(config.protectiveMonitoringUrl)
  await protectiveMonitoring.sendEvent({
    sessionid: claimId,
    datetime: createEventDate(),
    version: '1.1',
    application: 'ffc-demo-calculation-service',
    component: 'ffc-demo-calculation-service',
    ip: 'none',
    pmccode: '0001',
    priority: '0',
    details: {
      message: event
    }
  })
}

function createEventDate () {
  const eventDate = new Date()
  return eventDate.toISOString()
}

module.exports = sendEvent
