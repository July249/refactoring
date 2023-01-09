// 함수 인라인하기

// 예제 1
// moreThanFiveLateDeliveries의 재사용성이 높지 않고, 값의 변화가 빈번하게 일어나지 않는다면
// 굳이 함수로 추출하여 사용할 이유는 없다.
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
// 불필요한 간접 호출은 지양하는 것이 좋다.
function reportLines(customer) {
  const result = [];
  result.push(["name", customer.name]);
  result.push(["location", customer.location]);
  return result;
}
