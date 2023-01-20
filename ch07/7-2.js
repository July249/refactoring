// 컬렉션 캡슐화하기

// 외부에 컬렉션을 노출하여 변경가능하게 하지 말고
// 어떤 동작이 되는지 api를 만들어서 해당 api를 통해서만 접근이 가능하도록 하는 것이 중요
export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses];
    // return this.#courses;
  }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }

  // 외부에서 업데이트를 할 수 없게 만들 것임
  // set courses(courses) {
  //   this.#courses = courses;
  // }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person("엘리");
const course = new Course("리팩토링", true);
ellie.addCourse(course);
console.log(ellie.courses.length);
ellie.removeCourse(course, () => {
  console.log("해당 코스는 없습니다.");
});
console.log(ellie.courses);
console.log(ellie.courses.length);
ellie.removeCourse(course, () => {
  console.log("해당 코스는 없습니다.");
});
