function calculateCharge(date, quantity, plan) {
  const summerCharge = quantity * plan.summerRate;
  const regularCharge = quantity * plan.regularRate + plan.regularServiceCharge;
  return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd)
    ? summerCharge
    : regularCharge;
}
