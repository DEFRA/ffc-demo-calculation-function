const gross = require('../../../app/services/calculations/gross')

describe('gross', () => {
  test('a business has a gross of 200', () => {
    const claim = {
      propertyType: 'business'
    }
    const result = gross(claim)
    expect(result).toEqual(200)
  })

  test('a non-business has a gross of 100', () => {
    const claim = {
      propertyType: 'home'
    }
    const result = gross(claim)
    expect(result).toEqual(100)
  })
})
