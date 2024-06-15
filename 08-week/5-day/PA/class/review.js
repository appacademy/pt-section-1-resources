class Review {
    constructor(vehicle, tester, stars, text) {
        this.vehicle = vehicle;
        this.tester = tester;
        this.starRating = stars;
        this.text = text;
    }

    addReview() {
        this.vehicle.reviews.push(this);
        this.tester.reviews.push(this);
    }

    static filterByStars(rating, ...reviews) {
        return reviews.filter(review => review.starRating === rating)
    }

};



module.exports = Review;