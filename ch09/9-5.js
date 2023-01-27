const customerRepoistory = new CustomerRepoistory();

const order = new Order(
  data.number,
  customerRepoistory.registerCustomer(data.customerId)
);

class Order {
  // constructor(data) {
  //   this._number = data.number;
  //   // this._customer = new Customer(data.customerId);
  //   // 새로운 customer를 계속 만드는 것이 아니라!
  //   // this._customer = customerRepoistory.registerCustomer(data.customerId);
  //   // => 조금 헤비함
  // }
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

// customerId가 유일하다는 것을 보장하기 위함
class CustomerRepoistory {
  #customers;
  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customer.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
