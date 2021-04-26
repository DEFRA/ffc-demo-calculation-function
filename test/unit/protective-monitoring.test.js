const mockSendEvent = jest.fn()
jest.mock('ffc-protective-monitoring', () => {
  return {
    PublishEvent: jest.fn().mockImplementation(() => {
      return { sendEvent: mockSendEvent }
    })
  }
})

const sendProtectiveMonitoringEvent = require('../../app/services/protective-monitoring-service')

describe('send protective monitoring event', () => {
  const claim = {
    claimId: 'MINE1',
    propertyType: 'business',
    accessible: false,
    dateOfSubsidence: '2019-07-26T09:54:19.622Z',
    mineType: ['gold', 'silver'],
    email: 'joe.bloggs@defra.gov.uk'
  }

  test('should send protective monitoring payload', async () => {
    await sendProtectiveMonitoringEvent(claim.claimId, 'Test message')
    expect(mockSendEvent).toHaveBeenCalledTimes(1)
  })
})
