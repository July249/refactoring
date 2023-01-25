class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.manager;
  }

  get chargeCode() {
    return this.chargeCode;
  }
}

// 데이터만 가지고 있는 클래스
// export class Department {
//   #manager;
//   #chargeCode;
//   constructor(manager, chargeCode) {
//     this.#manager = manager;
//     this.#chargeCode = chargeCode;
//   }

//   get chargeCode() {
//     return this.#chargeCode;
//   }

//   set chargeCode(arg) {
//     this.#chargeCode = arg;
//   }

//   get manager() {
//     return this.#manager;
//   }

//   set manager(arg) {
//     this.#manager = arg;
//   }
// }

const person = new Person("Tom", "aManager", "999");
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
