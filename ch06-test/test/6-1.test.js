import { printOwing } from "../6-1";

class Console {
  #content = "";
  constructor() {}
  log(message) {
    this.#content += `${message}\n`;
  }
  get content() {
    return this.#content;
  }
}
describe("printOwing", () => {
  it("Should print owing", () => {
    const invoice = {
      orders: [{ amount: 2 }, { amount: 5 }],
      customer: "엘리",
    };
    const expected =
      "***********************\n" +
      "**** Customer Owes ****\n" +
      "***********************\n" +
      "name: 엘리\n" +
      "amount: 7\n" +
      "due: 2/20/2022\n";
    const console = new Console();
    printOwing(invoice, console);
    expect(console.content).toBe(expected);
  });
});
