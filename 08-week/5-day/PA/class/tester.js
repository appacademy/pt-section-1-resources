const Review = require("./review");
const Bicycle = require("./bicycle");
const ElectricBicycle = require("./electric-bicycle");

class Tester {
    constructor(name) {
        this.name = name;
        this.reviews = [];
    }

    submitReview(vehicle, rating, text) {
        if (!vehicle.validate()) throw new Error("Cannot submit review for invalid vehicle.")
        let review = new Review(vehicle, this, rating, text);
        if (vehicle instanceof Bicycle) this.bikeTester = true;
        if (vehicle instanceof ElectricBicycle) this.eBikeTester = true;
        review.addReview();
        return review;
    }
};

module.exports = Tester;