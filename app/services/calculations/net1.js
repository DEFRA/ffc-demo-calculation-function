function calculateBase (propertyType) {
  return propertyType === 'business' ? 0.45 : 0.43
}

function calculateMultiplier (accessible) {
  return accessible ? 0.2 : 0.1
}
function calculate (claim) {
  return calculateBase(claim.propertyType) * calculateMultiplier(claim.accessible)
}

module.exports = calculate
