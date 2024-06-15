class Test {
    constructor(something) {
        this.something = something;
    }

    sayValue() {
        console.log("regular", this.something)
    }

    arrowValue = () => {
        console.log("arrow", this.something)
    }
};

const inst = new Test("some value");

console.log(inst);

const reg = inst.sayValue;
const arrow = inst.arrowValue;

try {
    arrow();
    inst.sayValue();
    reg()
} catch (e) {
    console.log(e)
}