const service = require('../../app')
const mockContext = require('../mock-context')

describe('calculation function', () => {
  test('sends payment when calculation received', async () => {
    const message = {
      body: {
        claimId: 'MINE123',
        propertyType: 'business',
        accessible: false,
        dateOfSubsidence: '2019-07-26T09:54:19.622Z',
        mineType: ['gold'],
        email: 'test@email.com'
      }
    }

    await service(mockContext, message)
    expect(mockContext.done.mock.calls.length).toEqual(1)
    expect(mockContext.bindings.outputSbQueue.body.value).toEqual(190.96)
  })
})
