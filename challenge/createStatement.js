class Performance {
  #audience;
  #play;
  constructor(audience, play) {
    this.#audience = audience;
    this.#play = play;
  }

  get audience() {
    return this.#audience;
  }

  get play() {
    return this.#play;
  }

  get credits() {
    let result = 0;
    result += Math.max(this.#audience - 30, 0);
    if ("comedy" === this.#play.type) {
      result += Math.floor(this.#audience / 5);
    }
    return result;
  }

  get amount() {
    let thisAmount = 0;
    switch (this.#play.type) {
      case "tragedy": // 비극
        thisAmount = 40000;
        if (this.#audience > 30) {
          thisAmount += 1000 * (this.#audience - 30);
        }
        break;
      case "comedy": // 희극
        thisAmount = 30000;
        if (this.#audience > 20) {
          thisAmount += 10000 + 500 * (this.#audience - 20);
        }
        thisAmount += 300 * this.#audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${this.#play.type}`);
    }
    return thisAmount;
  }
}

export function createStatement(invoice, plays) {
  const statement = {};
  statement.customer = invoice.customer;
  statement.performances = invoice.performances.map((p) => new Performance(p.audience, plays[p.playID]));
  statement.totalAmount = totalAmount(statement.performances);
  statement.totalCredits = totalCredits(statement.performances);
  return statement;

  function totalAmount(performances) {
    return performances.reduce((sum, p) => (sum += p.amount), 0);
  }

  function totalCredits(performances) {
    return performances.reduce((sum, p) => (sum += p.credits), 0);
  }
}
