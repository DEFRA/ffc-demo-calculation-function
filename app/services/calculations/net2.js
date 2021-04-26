const BASE_DATE = new Date(2015, 1, 29)

function calculate (claim) {
  if (claim.dateOfSubsidence) {
    return new Date(claim.dateOfSubsidence) < BASE_DATE ? 11 : 9
  }
  return 0
}
module.exports = calculate
