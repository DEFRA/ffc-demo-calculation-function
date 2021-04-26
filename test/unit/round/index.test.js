const round = require('../../../app/services/round')

describe('round', () => {
  test('rounds up if 5', () => {
    const result = round(1.005, 2)
    expect(result).toEqual(1.01)
  })

  test('rounds up if greater than 5', () => {
    const result = round(1.006, 2)
    expect(result).toEqual(1.01)
  })

  test('rounds down if less than 5', () => {
    const result = round(1.004, 2)
    expect(result).toEqual(1.00)
  })

  test('does no rounding if integer', () => {
    const result = round(1, 2)
    expect(result).toEqual(1.00)
  })

  test('handles 0', () => {
    const result = round(0.000, 2)
    expect(result).toEqual(0.00)
  })

  test('handles 0 with rounding', () => {
    const result = round(0.005, 2)
    expect(result).toEqual(0.01)
  })

  test('handles negatives', () => {
    const result = round(-1.005, 2)
    expect(result).toEqual(-1.00)
  })

  test('handles large number (7) of decimals', () => {
    const result = round(1.0000005, 6)
    expect(result).toEqual(1.000001)
  })

  test('handles no requested decimals', () => {
    const result = round(1.0000005, 0)
    expect(result).toEqual(1)
  })

  test('rounds no requested decimals up if 5', () => {
    const result = round(1.5, 0)
    expect(result).toEqual(2)
  })

  test('rounds no requested decimals down if less than 5', () => {
    const result = round(1.4, 0)
    expect(result).toEqual(1)
  })

  test('rounds no requested decimals up if greater than 5', () => {
    const result = round(1.6, 0)
    expect(result).toEqual(2)
  })
})
