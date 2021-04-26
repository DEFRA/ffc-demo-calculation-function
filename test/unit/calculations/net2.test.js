const net2 = require('../../../app/services/calculations/net2')

describe('net2', () => {
  test('a date before the base date has a net2 of 11', () => {
    const claim = {
      dateOfSubsidence: '2014-07-26T09:54:19.622Z'
    }
    const result = net2(claim)
    expect(result).toEqual(11)
  })

  test('a date after the base date has a net2 of 9', () => {
    const claim = {
      dateOfSubsidence: '2019-07-26T09:54:19.622Z'
    }
    const result = net2(claim)
    expect(result).toEqual(9)
  })

  test('no date has a net2 of 0', () => {
    const claim = {
    }
    const result = net2(claim)
    expect(result).toEqual(0)
  })
})
