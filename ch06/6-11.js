class Price {
  #productBasePrice;
  #productDiscountRate;
  #productDiscountThreshold;
  #shippingDiscountThreshold;
  #shippingFeePerCase;
  #shippingDiscountedFee;
  constructor(data, quantity) {
    this.quantity = quantity;
    this.#productBasePrice = data.productBasePrice;
    this.#productDiscountRate = data.productDiscountRate;
    this.#productDiscountThreshold = data.productDiscountThreshold;
    this.#shippingDiscountThreshold = data.shippingDiscountThreshold;
    this.#shippingFeePerCase = data.shippingFeePerCase;
    this.#shippingDiscountedFee = data.shippingDiscountedFee;
  }

  get basePrice() {
    return this.#productBasePrice * this.quantity;
  }

  get discount() {
    return (
      Math.max(this.quantity - this.#productDiscountThreshold, 0) *
      this.basePrice *
      this.#productDiscountRate
    );
  }

  get shippingPerCase() {
    return this.basePrice > this.#shippingDiscountThreshold
      ? this.#shippingDiscountedFee
      : this.#shippingFeePerCase;
  }

  get shippingCost() {
    return this.quantity * this.shippingPerCase;
  }

  price() {
    return this.basePrice - this.discount + this.shippingCost;
  }
}

const priceData = new Price(
  {
    productBasePrice: 10,
    productDiscountRate: 0.1,
    productDiscountThreshold: 10,
    shippingDiscountThreshold: 20,
    shippingFeePerCase: 5,
    shippingDiscountedFee: 3,
  },
  5
);

export function priceOrder(priceData) {
  return priceData.price();
}

const price = priceOrder(priceData);
console.log(price);
