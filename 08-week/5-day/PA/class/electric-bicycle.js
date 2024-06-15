const Bicycle = require("./bicycle");

class ElectricBicycle extends Bicycle {
    constructor(model, year, price, style, frameSize, tireSize, range, maxSpeed) {
        super(model, year, price, style, frameSize, tireSize);
        this.range = range;
        this.maxSpeed = maxSpeed;
    }
}

module.exports = ElectricBicycle;