const service = require('../../app/services/calculation-service')
const mockContext = require('../mock-context')

describe('calculation service', () => {
  test('total is gross minus net1 minus net 2, to two decimal places', () => {
    const claim =
    {
      claimId: 'MINE123',
      propertyType: 'business',
      accessible: false,
      dateOfSubsidence: '2019-07-26T09:54:19.622Z',
      mineType: ['gold'],
      email: 'test@email.com'
    }

    const result = service.calculate(mockContext, claim)
    expect(result).toEqual(190.96)
  })
})
