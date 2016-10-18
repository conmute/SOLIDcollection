interface Message {
    message: string;
    feeling: "indifferently" | "anctious" | "happy"; // ...
    [n: string]: string;
}

interface Animal {
    sayTo(obj: Animal): Message;
}

class Duck implements Animal {

    private dead: boolean = false;

    public sayTo(obj: Animal): Message {
        if (this.dead) {
            throw TypeError("Object is dead");
        }
        // ...
        return {
            message: "Quack",
            feeling: "anctious"
        };
    }

}

class ElectrickDuck implements Animal {

    private turnedOn: boolean = false;
    private lowBattery: boolean = false;

    public sayTo(obj: Animal, encode: boolean = false): Message {
        this.turnOn();
        if (this.lowBattery) {
            throw TypeError("Object is dead");
        }
        // ...
        return {
            message: "Quackrrr",
            feeling: "indifferently",
            encoded: "81,117,97,99,107,114,114,114",
        };
    }

    private turnOn() {
        this.turnedOn = true;
    }

}

var dorothy = new Duck();
var q123 = new ElectrickDuck();

dorothy.sayTo(q123);
q123.sayTo(dorothy);
