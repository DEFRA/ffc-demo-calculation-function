function createMessage (payment) {
  return {
    body: payment,
    type: 'uk.gov.demo.claim.calculated',
    source: 'ffc-demo-calculation-function'
  }
}

module.exports = createMessage
