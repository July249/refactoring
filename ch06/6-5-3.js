// 함수 선언 바꾸기

// 결국 함수에서 필요한 것은 aCustomer가 아니라
// state이다!
// 따라서 state만 받아오면 되는 것이다!
export function inNewEngland(state) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(state);
}
