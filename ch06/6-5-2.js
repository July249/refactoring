// 함수 선언 바꾸기
// VIP 예약 우선권은 구현하고 싶다고 가정하자.
export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  // flag (true, false에 따라 다른 동작을 하게 만드는 boolean을 칭함)를 이용하여
  // 함수의 동작사항을 변경하는 것은 좋지 않습니다.
  // 이에 대해서는 추후에 조금 더 자세히 다룰 예정입니다.

  // 정말 필요한 flag 라고 가정한다면 아래와 같이 구현할 수 있습니다.
  // 일반 예약을 기준으로 default 값으로 false를 지정하여 줍니다.
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
