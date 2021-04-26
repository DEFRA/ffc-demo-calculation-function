const net1 = require('../../../app/services/calculations/net1')

describe('net1', () => {
  test('an inaccessible business has a net1 of 0.045', () => {
    const claim = {
      propertyType: 'business',
      accessible: false
    }
    const result = net1(claim)
    expect(result).toBeCloseTo(0.045, 3)
  })

  test('an accessible business has a net1 of 0.09', () => {
    const claim = {
      propertyType: 'business',
      accessible: true
    }
    const result = net1(claim)
    expect(result).toBeCloseTo(0.090, 3)
  })

  test('an inaccessible home has a net1 of 0.045', () => {
    const claim = {
      propertyType: 'home',
      accessible: false
    }
    const result = net1(claim)
    expect(result).toBeCloseTo(0.043, 3)
  })

  test('an accessible home has a net1 of 0.09', () => {
    const claim = {
      propertyType: 'home',
      accessible: true
    }
    const result = net1(claim)
    expect(result).toBeCloseTo(0.086, 3)
  })
})
