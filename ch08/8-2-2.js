class Account {
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }

  get interestRate() {
    return this._type.interestRate;
  }
}

class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }
  get interestRate() {
    return this._interestRate;
  }
}

const fixedDeposit = new AccountType("정기예금", 0.05);
const myAccount = new Account("123-9876-65-0123", fixedDeposit);
console.log(myAccount);
/* 
Account {
  _number: '123-9876-65-0123',
  _type: AccountType { _name: '정기예금', _interestRate: 0.05 }
}
*/
