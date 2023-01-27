function disabilityAmount(employee) {
  if (isSenior() || isMonthAble() || isPartTime()) return 0;
  else return 1;

  function isSenior() {
    return employee.seniority < 2 ? true : false;
  }

  function isMonthAble() {
    return employee.monthsDisabled > 12 ? true : false;
  }

  function isPartTime() {
    return employee.isPartTime;
  }
}
