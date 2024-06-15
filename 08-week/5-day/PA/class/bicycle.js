const Vehicle = require("./vehicle");

class Bicycle extends Vehicle{
    constructor(model, year, price, style, frameSize, tireSize) {
        super(model, year, price)
        this.style = style;
        this.frameSize = frameSize;
        this.tireSize = tireSize;
    }

}

module.exports = Bicycle;

