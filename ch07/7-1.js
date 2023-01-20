// 레코드 캡슐화하기
class Organization {
  #data;
  #name;
  #country;
  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }

  get rawData() {
    // 기존 데이터 반환함에 유의 (set 내용은 반환 안됨)
    //return { ...this.#data }; // 얕은 복사, cloneDeep을 이용하는 것이 깊은 복사 가능하게 해줌

    // 새롭게 set 된 내용을 반환
    return { name: this.name, country: this.country };
  }
}

// const organization = new Organization("Acme Gooseberries", "GB");

const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

organization.name = "Dream Coding";
console.log(organization.name);
console.log(organization.country);
