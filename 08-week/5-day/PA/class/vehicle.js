class Vehicle {
  constructor(model, year, price) {
    this.modelName = model;
    this.year = year;
    this.price = price;
    this.reviews = [];
  }

  validate() {
    if (
      this.modelName &&
      this.year &&
      this.price &&
      this.year > 1950 &&
      this.year < 2100
    )
      return true;
    else return false;
  }

  update(model, year, price) {
    if (year < 1950 || year > 2100)
      throw new Error("Year must be between 1950 and 2100");
    if (price < 1) throw new Error("Price must be greater than 0");
    this.modelName = model;
    this.year = year;
    this.price = price;
  }

  getDetails() {
    return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`;
  }

  findReviewByTester(testerName) {
    // FOR LOOP APPROACH
    //     for (let i = 0; i < this.reviews.length; i++) {
    //       let review = this.reviews[i]; // save the review located at the current index of our 'reviews' array in a new variable 'review' for clarity=
    //       if (review.tester.name === testerName) {
    //         // If the review located at the current index of the reviews array has the tester that we're searching for by name...
    //         return review; // ...return that review
    //       }
    //     }
    //   }
    // .FIND HACK
    return this.reviews.find((review) => review.tester.name === testerName);
  }
}

module.exports = Vehicle;
