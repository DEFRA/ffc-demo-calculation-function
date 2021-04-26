const BASE_VALUE = 100

function calculate (claim) {
  return claim.propertyType === 'business' ? BASE_VALUE * 2 : BASE_VALUE
}

module.exports = calculate
